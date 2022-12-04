import {
  adminRoleAuthority,
  buyerRoleAuthority,
  sellerRoleAuthority,
  superAdminRoleAuthority,
} from "../../shared/data/authoritySet";
import { hasRoleAuthority } from "./generics";

export const hasAdminAuthority = () => {
  return hasRoleAuthority(adminRoleAuthority);
};

export const hasSuperAdminAuthority = () => {
  return hasRoleAuthority(superAdminRoleAuthority);
};

//SELLER
export const hasSellerAuthority = () => {
  return hasRoleAuthority(sellerRoleAuthority);
};
//BUYER
export const hasBuyerAuthority = () => {
  return hasRoleAuthority(buyerRoleAuthority);
};
