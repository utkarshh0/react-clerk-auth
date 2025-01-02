import { useAuth } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]); // Stores quotes
  const [loading, setLoading] = useState(false); // Tracks API call status
  const [error, setError] = useState(null); // Tracks API errors
  const [likedQuotes, setLikedQuotes] = useState([]);

  const { isSignedIn } = useAuth();

  // Fetch quotes from API
  const fetchQuotes = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.quotable.io/quotes?limit=40`);
      const data = await response.json();
      setQuotes([ ...data.results]);
    } catch (err) {
      console.error(err)
      setError("Failed to fetch quotes. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes(); // Initial fetch
    const storedLikedQuotes = JSON.parse(localStorage.getItem("likedQuotes")) || [];
    setLikedQuotes(storedLikedQuotes);
  }, []);

  const handleLike = (quote) => {
    if (isSignedIn) {
      // User is signed in
      const isAlreadyLiked = likedQuotes.some((q) => q._id === quote._id);

      if (!isAlreadyLiked) {
        const newLikedQuotes = [...likedQuotes, { _id: quote._id, content: quote.content, author: quote.author }];
        setLikedQuotes(newLikedQuotes);
        localStorage.setItem("likedQuotes", JSON.stringify(newLikedQuotes));
      } else {
        const updatedQuotes = likedQuotes.filter((qt) => qt._id !== quote._id);
        setLikedQuotes(updatedQuotes);
        localStorage.setItem("likedQuotes", JSON.stringify(updatedQuotes));
      }
    } else {
      alert("User not logged in. Click the Sign In button.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600">Quotes</h1>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {quotes.map((quote) => (
          <div
            key={quote._id}
            className="bg-indigo-100 p-8 rounded-lg shadow-lg hover:shadow-xl relative transition-shadow duration-300"
          >
            <button
              onClick={() => handleLike(quote)}
              className={`text-3xl font-bolder absolute right-2 top-2 ${
                likedQuotes.some((q) => q._id === quote._id) ? "text-red-600" : "hover:text-red-600"
              }`}
            >
              <CiHeart />
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

      {loading && <div className="text-center mt-6 text-gray-500">Loading...</div>}
      <div id="scroll-sentinel" className="h-10"></div>
    </div>
  );
};

export default Quotes;
