import { Router } from "express";
import healthRoutes from "~/components/health/health-routes";

const router = Router();

router.use(healthRoutes);

export default router;
