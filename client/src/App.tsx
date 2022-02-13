import React from "react";
import GoogleLogin from "react-google-login";

const App = () => {
  const login = async (loginResponse: any) => {
    const {
      googleId,
      accessToken,
      profileObj: { name, email, imageUrl },
    } = loginResponse;
    const body = {
      googleId,
      accessToken,
      name,
      email,
      imageUrl,
    };
    const res = await fetch("http://localhost:5000/api/v1/auth/login", {
      method: "post",
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Hello World</h1>
      <GoogleLogin
        clientId={process.env.REACT_APP_OAUTH_CLIENT_ID!}
        buttonText='Login'
        onSuccess={response => login(response)}
        onFailure={error => console.log(error)}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default App;
