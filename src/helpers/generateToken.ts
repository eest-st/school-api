import { User } from "@prisma/client";
import jwt from "jsonwebtoken";

import CONFIG from "~/config";

export const generateToken = (user: User) => {
  const token = jwt.sign({ id: user.id }, CONFIG.AUTH.ACCESS_TOKEN_SECRET, {
    expiresIn: CONFIG.AUTH.ACCESS_TOKEN_EXPIRE,
  });

  return token;
};
