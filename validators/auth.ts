import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";

export const validateAuthenticate = [
  check("name").trim().not().isEmpty().withMessage("Please provide a name"),
  check("email")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Please provide an email")
    .isEmail()
    .withMessage("Email is invalid"),
  check("imageUrl")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Please provide imageUrl"),
  check("googleId")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Please provide google id"),
  check("accessToken")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Please provide access token"),
  (req: Request, res: Response, next: NextFunction) =>
    sendErrorResponse(req, res, next),
];

const sendErrorResponse = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      errors: errors.array().map(err => err.msg),
    });
  }
  next();
};
