import jwt from "jsonwebtoken";
import CONFIG from "~/config";
import { logger } from "~/helpers";
import { UnauthorizedError } from "~/helpers/error";

const isAuthenticated = (req: Req, _res: Res, next: NextFn) => {
  const authHeader =
    req.headers.authorization || (req.headers.Authorization as string);
  const token = authHeader.split(" ")[1];

  logger.info(`Token ${token}`);

  if (!token) {
    throw new UnauthorizedError("Invalid Token");
  }

  jwt.verify(token, CONFIG.AUTH.ACCESS_TOKEN_SECRET, (err: any) => {
    if (err) {
      throw new UnauthorizedError("Unauthorized");
    } else {
      next();
    }
  });
};

export default isAuthenticated;
