import { CREATED, UNAUTHORIZED } from "http-status";

import { generateToken, logger } from "~/helpers";
import { apiResponse } from "~/helpers/apiResponse";
import { NotFoundException } from "~/helpers/error";
import { compare, hash } from "~/utils/crypt";
import * as authService from "./auth-services";

export const login = async (req: Req, res: Res, _next: NextFn) => {
  try {
    const { username, password } = req.body;
    const user = await authService.getUserByUsername(username);

    if (!user) {
      throw new NotFoundException();
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(UNAUTHORIZED).json({ message: "Invalid password" });
    }

    const token = await generateToken(user);

    logger.info(`User ${user.username} logged in`);

    return res.status(200).json(apiResponse({ access_token: token }));
  } catch (error: any) {
    logger.error(error);
    return res.status(error.status || 500).json({ message: error.message });
  }
};

export const register = async (req: Req, res: Res, _next: NextFn) => {
  try {
    const { username, password } = req.body;

    const hashedPassword = await hash(password);
    const user = await authService.createUser({
      username,
      password: hashedPassword,
    });

    logger.info(`User ${user.username} created`);

    res.status(CREATED).json(apiResponse({ user }));
  } catch (error: any) {
    logger.error(error);
    res.status(error.status || 500).json({ message: error.message });
  }
};
