import { Response } from "express";

import User from "../models/User";
import IRequest from "../types/Request";

export const login = async (req: IRequest, res: Response) => {
  const { name, email, imageUrl, googleId, accessToken } = req.body;

  let user = await User.findOne({ email: email });
  if (!user) {
    user = await User.create({ name, email, imageUrl, googleId, accessToken });
  }

  const token = user.getJWTToken();

  res.status(200).json({
    success: true,
    data: token,
  });
};

export const getCurrentUser = async (req: IRequest, res: Response) => {
  const user = req.user;
  res.status(200).json({
    success: true,
    data: user,
  });
};
