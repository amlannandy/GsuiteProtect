import { Response } from "express";

import IRequest from "../types/Request";

export const getBackupsList = async (req: IRequest, res: Response) => {
  const userId = req.user.id;
  res.status(200).json({
    success: true,
    msg: "Backups belonging to user id" + userId,
  });
};

export const createBackup = async (req: IRequest, res: Response) => {
  res.status(200).json({
    success: true,
    msg: "Create backup route",
  });
};

export const getBackupById = async (req: IRequest, res: Response) => {
  const backupId = req.params.id;
  res.status(200).json({
    success: true,
    msg: "Backup with id" + backupId,
  });
};

export const deleteBackupById = async (req: IRequest, res: Response) => {
  const backupId = req.params.id;
  res.status(200).json({
    success: true,
    msg: "Delete backup with id" + backupId,
  });
};

export const restoreBackup = async (req: IRequest, res: Response) => {
  const backupId = req.params.id;
  res.status(200).json({
    success: true,
    msg: "Restore backup with id" + backupId,
  });
};
