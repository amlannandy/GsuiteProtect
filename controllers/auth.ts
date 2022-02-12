import { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Login route",
  });
};
