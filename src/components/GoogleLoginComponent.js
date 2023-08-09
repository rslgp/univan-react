import React from 'react';
import GoogleLogin from 'react-google-login';

const GoogleLoginComponent = ({ onLoginSuccess }) => {
  const responseGoogle = (response) => {
    if (response.profileObj) {
      // Call the onLoginSuccess function and pass the user's UID
      onLoginSuccess(response.profileObj.googleId);
    }
  };

  return (
    <div>
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle} // Handle failure if needed
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default GoogleLoginComponent;
