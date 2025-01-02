import { useAuth } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const LikedQuotes = () => {
  const [likedQuotes, setLikedQuotes] = useState([]);
  const { isSignedIn, isLoaded } = useAuth(); // Destructure to check if Clerk data is loaded
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure Clerk data is loaded before checking authentication status
    if (!isLoaded) return;

    if (!isSignedIn) {
      navigate("/"); // Redirect to home if not signed in
      return;
    }

    // Retrieve liked quotes from localStorage if signed in
    const storedLikedQuotes = JSON.parse(localStorage.getItem("likedQuotes")) || [];
    setLikedQuotes(storedLikedQuotes);
  }, [isSignedIn, isLoaded, navigate]);

  const handleRemoveLike = (quoteId) => {
    // Remove a quote from liked quotes
    const updatedQuotes = likedQuotes.filter((quote) => quote._id !== quoteId);
    setLikedQuotes(updatedQuotes);
    localStorage.setItem("likedQuotes", JSON.stringify(updatedQuotes));
  };

  if(!isLoaded) return <div className="text-center my-8"><p>Loading....</p></div>

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600">Liked Quotes</h1>
      {likedQuotes.length === 0 ? (
        <div className="text-center text-gray-600">No liked quotes yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {likedQuotes.map((quote) => (
            <div
              key={quote._id}
              className="bg-indigo-100 p-8 rounded-lg shadow-lg hover:shadow-xl relative transition-shadow duration-300"
            >
              <button
                onClick={() => handleRemoveLike(quote._id)}
                className="text-red-600 text-xl p-1 rounded-lg font-bold absolute right-2 top-2 hover:text-red-800"
              >
                <MdDelete />
              </button>
              <blockquote className="text-md italic text-gray-700">
              &quot;{quote.content}&quot;
                <footer className="text-xs text-right text-indigo-600 font-semibold mt-4">
                  - {quote.author || "Unknown"}
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LikedQuotes;
