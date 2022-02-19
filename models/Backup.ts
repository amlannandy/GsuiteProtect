import mongoose from "mongoose";

const BackupSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "Please add a user"],
  },
  backupCount: {
    type: Number,
    required: [true, "Please add backup count"],
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Backup", BackupSchema);
