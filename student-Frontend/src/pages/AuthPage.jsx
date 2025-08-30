
import { SignIn, SignUp } from "@clerk/clerk-react";
import {useLocation } from "react-router-dom";

function AuthPage({ mode }) {
  const location = useLocation();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      {mode === "sign-in" || location.pathname.includes("sign-in") ? (
        <SignIn path="/sign-in" routing="path" />
      ) : (
        <SignUp path="/sign-up" routing="path" />
      )}
    </div>
  );
}

export default AuthPage;
