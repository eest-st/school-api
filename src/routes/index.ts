import { Router } from "express";

import authRoutes from "~/components/auth/auth-routes";
import healthRoutes from "~/components/health/health-routes";
import userRoutes from "~/components/users/user-routes";

const router = Router();

router.use(healthRoutes);
router.use(authRoutes);
router.use(userRoutes);

export default router;
