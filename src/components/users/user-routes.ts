import { Router } from "express";

import isAuthenticated from "~/middlewares/isAuthenticated";
import * as userCcontroller from "./user-controller";

const router = Router();

router.get("/users", isAuthenticated, userCcontroller.getUserList);

export default router;
