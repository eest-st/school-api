import { OK } from "http-status";

export const healthCheck = (_req: Req, res: Res, next: NextFn) => {
  try {
    res.status(OK).json({
      uptime: process.uptime(),
      message: "OK",
      timestamp: Date.now(),
    });
  } catch (error) {
    next(error);
  }
};
