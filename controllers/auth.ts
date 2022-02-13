import { Request, Response } from "express";

export const login = async (req: Request, res: Response) => {
  const { name, email, imageUrl, googleId, accessToken } = req.body;

  res.status(200).json({
    success: true,
    message: "Login route",
    data: { name },
  });
};
