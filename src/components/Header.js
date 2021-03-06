import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { startLogout } from "../actions/auth";

export const Header = ({ startLogoutAction }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        <button className="button button--link" onClick={startLogoutAction}>
          Logout
        </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogoutAction: () => dispatch(startLogout()),
});

Header.propTypes = {
  startLogoutAction: PropTypes.func.isRequired,
};

export default connect(
  undefined,
  mapDispatchToProps,
)(Header);
