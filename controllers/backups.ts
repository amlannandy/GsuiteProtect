import { Response } from "express";

import Backup from "models/Backup";
import IRequest from "types/Request";
import asyncHandler from "middleware/asyncHandler";

export const getBackupsList = asyncHandler(
  async (req: IRequest, res: Response) => {
    const userId = req.user._id;
    const backups = await Backup.find({ where: { user: userId } });
    res.status(200).json({
      success: true,
      data: backups,
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
    const backup = await Backup.findById(req.params.id).populate("user");
    if (!backup) {
      return res.status(404).json({
        success: false,
        errors: ["Backup not found"],
      });
    }
    if (backup.user._id.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        success: false,
        errors: ["Not authorized to access this backup"],
      });
    }
    res.status(200).json({
      success: true,
      data: backup,
    });
  }
);

export const deleteBackupById = asyncHandler(
  async (req: IRequest, res: Response) => {
    const backupId = req.params.id;
    const backup = await Backup.findById(backupId);
    if (!backup) {
      return res.status(404).json({
        success: false,
        errors: ["Backup not found"],
      });
    }
    if (backup.user._id.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        success: false,
        errors: ["Not authorized to access this backup"],
      });
    }
    await Backup.findByIdAndDelete(backupId);
    res.status(200).json({
      success: true,
      msg: "Backup successfully deleted",
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
