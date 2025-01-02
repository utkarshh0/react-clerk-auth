import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/Home";
import Quotes from './pages/Quotes'
import LikedQuotes from "./pages/LikedQuotes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        {/* Navigation Bar */}
        <nav className="bg-indigo-600 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center font-semibold text-md">
            <Link to="/" className="text-2xl font-bold hover:text-indigo-200">
              Quotes
            </Link>
            <div className="space-x-6">
              <Link
                to="/"
                className="hover:text-indigo-200 transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/quotes"
                className="hover:text-indigo-200 transition-colors duration-300"
              >
                Explore Quotes
              </Link>
              <SignedIn>
                <Link
                  to="/liked"
                  className="hover:text-indigo-200 transition-colors duration-300"
                >Liked
                </Link>
              </SignedIn>
              
              <button className="hover:text-indigo-200 transition-colors duration-300">
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </button>

            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/liked" element={<LikedQuotes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

