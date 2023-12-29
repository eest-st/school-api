import jwt from "jsonwebtoken";
import CONFIG from "~/config";
import { UnauthorizedError } from "~/helpers/error";

const isAuthenticated = (req: Req, res: Res, next: NextFn) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, CONFIG.AUTH.ACCESS_TOKEN_SECRET, (err: any) => {
      if (err) {
        throw new UnauthorizedError("Unauthorized");
      } else {
        next();
      }
    });
  } else {
    throw new UnauthorizedError("Invalid Token");
  }
};

export default isAuthenticated;
