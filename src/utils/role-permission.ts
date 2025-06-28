import {
  Roles,
  Permissions,
  PermissionsEnumType,
  RolesEnumType,
} from "../enums/role.enum";

export const RolePermissions: Record<RolesEnumType, PermissionsEnumType[]> = {
  OWNER: [
    Permissions.CREATE_WORKSPACE,
    Permissions.ADD_MEMBER,
    Permissions.CHANGE_MEMBER_ROLE,
    Permissions.CREATE_TASK,
    Permissions.EDIT_TASK,
    Permissions.DELETE_TASK,
    Permissions.MANAGE_WORKSPACE_SETTINGS,
    Permissions.CREATE_PROJECT,
    Permissions.DELETE_PROJECT,
    Permissions.DELETE_WORKSPACE,
    Permissions.EDIT_PROJECT,
    Permissions.EDIT_WORKSPACE,
    Permissions.REMOVE_MEMBER,
    Permissions.VIEW_ONLY,
  ],
  ADMIN: [
    Permissions.ADD_MEMBER,
    Permissions.CREATE_PROJECT,
    Permissions.EDIT_PROJECT,
    Permissions.DELETE_PROJECT,
    Permissions.CREATE_TASK,
    Permissions.EDIT_TASK,
    Permissions.DELETE_TASK,
    Permissions.MANAGE_WORKSPACE_SETTINGS,
    Permissions.VIEW_ONLY,
  ],
  MEMBER: [
    Permissions.VIEW_ONLY,
    Permissions.CREATE_TASK,
    Permissions.EDIT_TASK,
  ],
};
