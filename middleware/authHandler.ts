import jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";

import User from "../models/User";
import IRequest from "../types/Request";

const authHandler = async (
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  let token: string;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      errors: ["You need to be authenticated to use this route"],
    });
  }

  try {
    // Verify token
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      return res.status(401).json({
        success: false,
        errors: ["You need to be authenticated to use this route"],
      });
    }
    const decoded = jwt.verify(token, jwtSecret);
    const email = (decoded as any).id;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({
        success: false,
        errors: ["You need to be authenticated to use this route"],
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      errors: ["You need to be authenticated to use this route"],
    });
  }
};

export default authHandler;
