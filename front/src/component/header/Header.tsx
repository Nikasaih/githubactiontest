import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  adminRoleAuthority,
  buyerRoleAuthority,
  sellerRoleAuthority,
  superAdminRoleAuthority,
} from "../../shared/data/authoritySet";
import AppContext from "../AppContext";

const GenericHeader = (): JSX.Element => {
  return (
    <>
      <Link to="/">Home</Link>
    </>
  );
};
const AnonymusHeader = (): JSX.Element => {
  return <></>;
};
const UserIdentifiedHeader = (): JSX.Element => {
  return <></>;
};
const AdminHeader = (): JSX.Element => {
  return <></>;
};
const SuperAdminHeader = (): JSX.Element => {
  return <></>;
};

export const Header = () => {
  return (
    <div>
      <GenericHeader />
      <AdditionalHeaderManager />
    </div>
  );
};

const AdditionalHeaderManager = (): JSX.Element => {
  const { generalUseAuth } = useContext(AppContext);

  if (!generalUseAuth?.auth) {
    return <AnonymusHeader />;
  }

  return (
    <>
      {adminRoleAuthority.has(generalUseAuth.auth.role) ? (
        <AdminHeader />
      ) : null}
      {superAdminRoleAuthority.has(generalUseAuth.auth.role) ? (
        <SuperAdminHeader />
      ) : null}
      {sellerRoleAuthority.has(generalUseAuth.auth.role) ? (
        <UserIdentifiedHeader />
      ) : null}
      {buyerRoleAuthority.has(generalUseAuth.auth.role) ? (
        <UserIdentifiedHeader />
      ) : null}
    </>
  );
};
