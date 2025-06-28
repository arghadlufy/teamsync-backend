import mongoose, { Document, model, Schema } from "mongoose";
import {
  Permissions,
  PermissionsEnumType,
  Roles,
  RolesEnumType,
} from "../enums/role.enum";
import { RolePermissions } from "../utils/role-permission";

export interface RolePermissionDocument extends Document {
  name: RolesEnumType;
  permissions: Array<PermissionsEnumType>;
}

const rolesSchema = new Schema<RolePermissionDocument>(
  {
    name: {
      type: String,
      enum: Object.values(Roles),
      required: true,
      unique: true,
    },
    permissions: {
      type: [String],
      required: true,
      enum: Object.values(Permissions),
      default: function (this: RolePermissionDocument) {
        return RolePermissions[this.name];
      },
    },
  },
  {
    timestamps: true,
  }
);

const RolePermission = model<RolePermissionDocument>(
  "RolePermission",
  rolesSchema
);

export default RolePermission;
