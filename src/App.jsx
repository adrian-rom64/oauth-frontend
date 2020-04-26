import React, { useState } from 'react';
import Axios from 'axios';
import './Styles/App.css';
import config from './config';

import AuthButton from './AuthButton';

function App() {
  const [userData, setUserData] = useState(null);

  const Welcome = () => <h1>{`Welcome, ${userData}`}</h1>;

  const apiHandler = async (message, provider) => {
    setUserData(null);
    const providerFromPopup = message.split('PROVIDER')[1];
    if (provider !== providerFromPopup) return;

    const code = message.split('PROVIDER')[0];
    if (!code) return;

    const url = `${config.apiUrl}/auth/${provider}`;
    const payload = { code };
    Axios.post(url, payload).then((res) => {
      if (res.status === 200) {
        setUserData(res.data.userData);
      }
    });
  };

  const resetUserData = () => setUserData(null);

  return (
    <div className="app">
      {userData ? <Welcome /> : null}
      <AuthButton apiHandler={apiHandler} provider="facebook" resetUserData={resetUserData} />
      <AuthButton apiHandler={apiHandler} provider="github" resetUserData={resetUserData} />
      <AuthButton apiHandler={apiHandler} provider="spotify" resetUserData={resetUserData} />
      <AuthButton apiHandler={apiHandler} provider="google" resetUserData={resetUserData} />
    </div>
  );
}

export default App;
