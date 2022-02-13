import express from "express";

import { login, getCurrentUser } from "../controllers/auth";
import authHandler from "../middleware/authHandler";

const router = express.Router();

router.post("/login", login);

router.get("/current-user", authHandler, getCurrentUser);

export default router;
