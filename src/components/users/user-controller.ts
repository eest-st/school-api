import { logger } from "~/helpers";

import { apiResponse } from "~/helpers/apiResponse";
import * as userService from "./user-service";

export const getUserList = async (_req: Req, res: Res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(apiResponse({ users }));
  } catch (error) {
    logger.error(error);
  }
};
