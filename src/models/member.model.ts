import mongoose, { Document, model, Schema } from "mongoose";
import { RolePermissionDocument } from "./roles-permission.model";

export interface MemberDocument extends Document {
  user: mongoose.Types.ObjectId;
  workspace: mongoose.Types.ObjectId;
  role: RolePermissionDocument;
  joinedAt: Date;
}

const memberSchema = new Schema<MemberDocument>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    workspace: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workspace",
      required: true,
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RolePermission",
      required: true,
    },
    joinedAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Member = model<MemberDocument>("Member", memberSchema);
export default Member;
