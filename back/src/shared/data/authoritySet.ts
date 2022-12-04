import { EUserRole } from "./userData/userDataInterface";

//  ADMIN
export const adminRoleAuthority = new Set<EUserRole>([
  EUserRole.ADMIN,
  EUserRole.SUPER_ADMIN,
]);

//SUPERADMIN
export const superAdminRoleAuthority = new Set<EUserRole>([
  EUserRole.SUPER_ADMIN,
]);

export const sellerRoleAuthority = new Set<EUserRole>([EUserRole.BASIC]);
export const buyerRoleAuthority = new Set<EUserRole>([EUserRole.BASIC]);
