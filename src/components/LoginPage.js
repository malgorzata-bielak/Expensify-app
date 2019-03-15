import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLoginAction }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>It's time to get your expenses under control.</p>
      <button className="button" onClick={startLoginAction}>
        Login with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLoginAction: () => dispatch(startLogin()),
});

LoginPage.propTypes = {
  startLoginAction: PropTypes.func.isRequired,
};

export default connect(
  undefined,
  mapDispatchToProps,
)(LoginPage);
