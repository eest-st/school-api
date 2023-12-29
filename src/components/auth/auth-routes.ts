import { Router } from "express";

import { sanitizer } from "~/helpers";
import * as authController from "./auth-controller";
import {
  createUserAuthenticationValidator,
  loginUserAuthenticationValidator,
} from "./auth-validations";

const router = Router();

router.post(
  "/auth/register",
  sanitizer(createUserAuthenticationValidator),
  authController.register,
);

router.post(
  "/auth/login",
  sanitizer(loginUserAuthenticationValidator),
  authController.login,
);

export default router;
