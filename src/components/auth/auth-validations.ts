import { body } from "express-validator";

export const createUserAuthenticationValidator = [
  body("username").notEmpty().withMessage("Username is required"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .matches(/\d/)
    .withMessage("Password must contain at least one digit")
    .matches(/[a-zA-Z]/)
    .withMessage("Password must contain at least one letter"),
];

export const loginUserAuthenticationValidator = [
  body("username").notEmpty().withMessage("Username is required"),
  body("password").notEmpty().withMessage("Password is required"),
];
