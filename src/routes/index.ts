import { Router } from "express";

import authRoutes from "~/components/auth/auth-routes";
import healthRoutes from "~/components/health/health-routes";

const router = Router();

router.use(healthRoutes);
router.use(authRoutes);

export default router;
