import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Log to console for the dev
  console.log(err.stack.red);

  res.status(err.statusCode || 500).json({
    success: false,
    errors: [err.message || "Internal Server Error"],
  });
};

export default errorHandler;
