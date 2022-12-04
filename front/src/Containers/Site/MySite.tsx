import { Header } from "../../component/header/Header";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const MySite = () => {
  return (
    <>
      <Header />
      <Pages />
      {/**insert footer */}
    </>
  );
};

const Pages = (): JSX.Element => {
  return (
    <Router>
      <GenericPages />
      <AdminPages />
      <SuperAdminPages />
      <UserAnonymousPages />
    </Router>
  );
};

const GenericPages = (): JSX.Element => {
  return (
    <>
      <Link to="/generic"> page</Link>
    </>
  );
};

const UserAnonymousPages = (): JSX.Element => {
  return (
    <>
      <Link to="/anonymous"> page</Link>
    </>
  );
};

const UserIdentifiedPages = (): JSX.Element => {
  return (
    <>
      <Link to="/identified"> page</Link>
    </>
  );
};

const AdminPages = (): JSX.Element => {
  return (
    <>
      <Link to="/admin"> page</Link>
    </>
  );
};

const SuperAdminPages = (): JSX.Element => {
  return (
    <>
      <Link to="/superadmin"> page</Link>
    </>
  );
};
