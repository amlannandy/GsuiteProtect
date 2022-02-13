import { Request, Response } from "express";

import User from "../models/User";

export const login = async (req: Request, res: Response) => {
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
