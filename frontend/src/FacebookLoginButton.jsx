// FacebookConnectButton.js
import React from "react";
import FacebookLogin from "react-facebook-login";

const FacebookConnectButton = ({ onConnect }) => {
  const responseFacebook = (response) => {
    // Handle the response from Facebook
    // 'response' contains user information, including the access token
    if (response.accessToken) {
      onConnect(response.accessToken);
    } else {
      console.log("Facebook login failed.");
    }
  };

  return (
    <FacebookLogin
      appId="229804916794431"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
      icon="fa-facebook"
      textButton="Connect with Facebook"
    />
  );
};

export default FacebookConnectButton;
