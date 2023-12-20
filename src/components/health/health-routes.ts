import { Router } from "express";

import * as healthController from "./health-controller";

const router = Router();

router.get("/health", healthController.healthCheck);

export default router;
