import express from "express";

import {
  getBackupsList,
  createBackup,
  getBackupById,
  deleteBackupById,
  restoreBackup,
} from "controllers/backups";
import authHandler from "middleware/authHandler";

const router = express.Router();

router.get("/", authHandler, getBackupsList);

router.post("/create", authHandler, createBackup);

router
  .route("/:id")
  .get(authHandler, getBackupById)
  .delete(authHandler, deleteBackupById);

router.post("/restore/:id", authHandler, restoreBackup);

export default router;
