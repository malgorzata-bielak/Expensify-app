// Higher Order Component (HOC) - component that renders another component
// - reuse code
// - render hijacking
// - prop manipulation
// - abstract state

import React from "react";
import ReactDOM from "react-dom";

// regular component
const Info = props => (
  <div>
    <h1>Info</h1>
    <p>

      The info is:
{props.info}
    </p>
  </div>
);

// function
const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

// ho component
// const AdminInfo = withAdminWarning(Info);

const requireAuthentification = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Require authentification</p>}
    </div>
  );
};

const AuthInfo = requireAuthentification(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="There are the details" />,
//   document.getElementById("app")
// );

ReactDOM.render(
  <AuthInfo isAuthenticated info="There are the details" />,
  document.getElementById("app"),
);
