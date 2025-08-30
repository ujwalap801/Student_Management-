import { Outlet, Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from "@clerk/clerk-react";

function RootLayout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow w-100">
        <div className="container-fluid px-4">
         
          <Link className="navbar-brand d-flex align-items-center" to="/">
             Student Manager
          </Link>

          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

        
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center gap-2">

          
              <SignedIn>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
              </SignedIn>

              
              <SignedOut>
                <li className="nav-item">
                  <SignInButton mode="modal">
                    <button className="btn btn-light ms-2">Sign In</button>
                  </SignInButton>
                </li>
              </SignedOut>

    
              <SignedIn>
                <li className="nav-item d-flex align-items-center">
                  <UserButton />
                </li>
              </SignedIn>
            </ul>
          </div>
        </div>
      </nav>

 
      <div className="container-fluid my-4 px-0">
        <Outlet />
      </div>
    </>
  );
}

export default RootLayout;
