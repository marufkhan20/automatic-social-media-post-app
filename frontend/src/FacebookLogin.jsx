import FacebookLogin from "@greatsumini/react-facebook-login";
import React from "react";

const FacebookLoginButton = () => {
  return (
    <div>
      <FacebookLogin
        appId="1064967038261996"
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

// Install the library
// npm install react-facebook-login

// import React from "react";
// import FacebookLogin from "react-facebook-login";

// const FacebookLoginButton = () => {
//   const responseFacebook = (response) => {
//     console.log(response);
//     // Handle the Facebook login response here
//   };

//   return (
//     <FacebookLogin
//       appId="1064967038261996"
//       autoLoad={false}
//       fields="name,email,picture"
//       callback={responseFacebook}
//     />
//   );
// };

// export default FacebookLoginButton;
