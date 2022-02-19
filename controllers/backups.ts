import { Response } from "express";

import Backup from "../models/Backup";
import IRequest from "../types/Request";
import asyncHandler from "../middleware/asyncHandler";

export const getBackupsList = asyncHandler(
  async (req: IRequest, res: Response) => {
    const userId = req.user.id;
    res.status(200).json({
      success: true,
      msg: "Backups belonging to user id" + userId,
    });
  }
);

export const createBackup = asyncHandler(
  async (req: IRequest, res: Response) => {
    const backup = await Backup.create({ user: req.user });
    res.status(200).json({
      success: true,
      data: backup,
    });
  }
);

export const getBackupById = asyncHandler(
  async (req: IRequest, res: Response) => {
    const backupId = req.params.id;
    res.status(200).json({
      success: true,
      msg: "Backup with id" + backupId,
    });
  }
);

export const deleteBackupById = asyncHandler(
  async (req: IRequest, res: Response) => {
    const backupId = req.params.id;
    res.status(200).json({
      success: true,
      msg: "Delete backup with id" + backupId,
    });
  }
);

export const restoreBackup = asyncHandler(
  async (req: IRequest, res: Response) => {
    const backupId = req.params.id;
    res.status(200).json({
      success: true,
      msg: "Restore backup with id" + backupId,
    });
  }
);