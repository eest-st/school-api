import timeout from "connect-timeout";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";

import CONFIG from "./config";
import routes from "./routes";

import * as errorHandler from "~/middlewares/errorHandler";
import morganMiddleware from "./middlewares/morganMiddleware";

export const createApp = (): express.Application => {
  const app = express();

  app.use(cors());
  app.use(cookieParser());
  app.use(helmet());
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    }),
  );

  if (CONFIG.APP.ENV !== "test") {
    app.use(morganMiddleware);
  }

  app.use(timeout(CONFIG.SERVER.TIMEOUT));

  // API Routes
  app.use("/api/v1", routes);

  // Error Middleware
  app.use(errorHandler.genericErrorHandler);
  app.use(errorHandler.notFoundError);

  return app;
};
