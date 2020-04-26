import React from 'react';
import PropTypes from 'prop-types';
import { createPopup } from './utils';

function AuthButton(props) {
  const { provider, apiHandler, resetUserData } = props;

  const authHandler = () => {
    resetUserData();
    createPopup(provider, (message) => apiHandler(message, provider));
  };

  return (
    <div className={provider}>
      <button type="button" onClick={authHandler}>{provider}</button>
    </div>
  );
}

AuthButton.propTypes = {
  apiHandler: PropTypes.func.isRequired,
  provider: PropTypes.string.isRequired,
  resetUserData: PropTypes.func.isRequired,
};

export default AuthButton;
