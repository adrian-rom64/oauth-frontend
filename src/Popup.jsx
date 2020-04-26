import React, { useEffect } from 'react';
import config from './config';
import './Styles/Spinner.css';

const providers = {
  github: config.githubUrl,
  facebook: config.facebookUrl,
  spotify: config.spotifyUrl,
};

function Popup() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (code) {
      const provider = window.location.pathname.split('/')[2];
      window.opener.postMessage(`${code}PROVIDER${provider}`);
      window.close();
      return;
    }
    const provider = params.get('provider');
    if (provider) {
      window.location.href = providers[provider];
      return;
    }
    window.opener.postMessage('error');
    window.close();
  }, [window.location]);

  return (
    <div className="spinner-container">
      <div className="spinner">
        <div className="lds-dual-ring" />
      </div>
    </div>
  );
}

export default Popup;
