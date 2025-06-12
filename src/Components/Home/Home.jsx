
import { useEffect } from 'react';
function My_Home() {
  useEffect(() => {
    document.title = "Hala Elkomy - Home";
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Hala Elkomy</h1>
      <p className="text-lg text-gray-700 mb-8">Your one-stop solution for all your needs.</p>
      <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
        Get Started
      </button>
    </div>
  );
}
export default My_Home;