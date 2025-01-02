import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const navigate = useNavigate()

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      {/* Header Section */}
      <header className="h-screen w-screen bg-indigo-600 text-white text-center flex justify-center items-center">
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl font-extrabold mb-4 leading-tight">
            Welcome to Infinite Quotes
          </h1>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            Discover a world of inspiration, one quote at a time. Explore a curated collection of quotes on various topics and let their wisdom spark your creativity.
          </p>
          <button
            onClick={() => navigate('/quotes')}
            className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-indigo-50 transition-colors duration-300"
          >
            Explore Quotes
          </button>
        </div>
      </header>

      {/* About Section */}
      <section className="h-screen w-screen bg-white py-12 flex justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
            Why Infinite Quotes?
          </h2>
          <p className="text-lg text-center mb-6">
            At Infinite Quotes, we believe that the power of words can change lives. Our collection is hand-picked to inspire, motivate, and bring positivity to your everyday life.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-indigo-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Inspiration</h3>
              <p className="text-gray-700">
                Find words of wisdom that will inspire and uplift you on your journey.
              </p>
            </div>
            <div className="bg-indigo-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Motivation</h3>
              <p className="text-gray-700">
                Motivate yourself daily with quotes that encourage progress and resilience.
              </p>
            </div>
            <div className="bg-indigo-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Positivity</h3>
              <p className="text-gray-700">
                Surround yourself with positivity and let good vibes flow through your day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2025 Infinite Quotes. All Rights Reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://twitter.com"
            className="text-white hover:text-indigo-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://github.com"
            className="text-white hover:text-indigo-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
