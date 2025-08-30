import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center mt-5">
      <h1>🎓 Welcome to Student Manager</h1>
      <p>Manage students efficiently with search, add, update, and delete features.</p>

      <SignedOut>
        <SignInButton mode="modal">
          <button className="btn btn-primary">Sign In with Google</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <Link to="/dashboard" className="btn btn-success">Go to Dashboard</Link>
      </SignedIn>
    </div>
  );
}

export default Home;
