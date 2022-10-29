import { EUserRole } from "../../shared/data/userData/userDataInterface";
import { hasRoleAuthority } from "./generics";
//  ADMIN
export const adminRoleAuthority = new Set<EUserRole>([
  EUserRole.ADMIN,
  EUserRole.SUPER_ADMIN,
]);

export const hasAdminAuthority = () => {
  return hasRoleAuthority(adminRoleAuthority);
};

//SUPERADMIN
export const superAdminRoleAuthority = new Set<EUserRole>([
  EUserRole.SUPER_ADMIN,
]);

export const hasSuperAdminAuthority = () => {
  return hasRoleAuthority(superAdminRoleAuthority);
};
