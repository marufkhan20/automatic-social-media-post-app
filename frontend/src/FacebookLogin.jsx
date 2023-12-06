import FacebookLogin from "@greatsumini/react-facebook-login";
import React from "react";

const FacebookLoginButton = () => {
  return (
    <div>
      <FacebookLogin
        appId="7021752024552407"
        onSuccess={(response) => {
          console.log("Login Success!", response);
        }}
        onFail={(error) => {
          console.log("Login Failed!", error);
        }}
        onProfileSuccess={(response) => {
          console.log("Get Profile Success!", response);
        }}
      />
    </div>
  );
};

export default FacebookLoginButton;
