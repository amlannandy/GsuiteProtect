import express from "express";

import { authenticate, getCurrentUser } from "../controllers/auth";
import authHandler from "../middleware/authHandler";

const router = express.Router();

router.post("/authenticate", authenticate);

router.get("/current-user", authHandler, getCurrentUser);

export default router;
