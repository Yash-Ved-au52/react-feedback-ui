import React, { useState } from "react";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F4F4F4]">
      <div className="bg-[#2C3E50] p-8 rounded-lg shadow-lg w-full max-w-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <h2 className="text-4xl font-bold text-center text-[#ECF0F1] mb-6 animate-bounce">
          We Value Your Feedback!
        </h2>
        {submitted ? (
          <div className="text-center animate-fade-in">
            <h3 className="text-2xl font-semibold text-[#2ECC71]">
              Thank you for your feedback!
            </h3>
            <p className="text-[#BDC3C7] mt-2">
              We appreciate your input and will use it to improve our services.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#ECF0F1] mb-2">
                Rate Us
              </label>
              <div className="flex justify-center mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    onClick={() => handleRating(star)}
                    className={`w-12 h-12 cursor-pointer transition-transform duration-200 transform hover:scale-125 ${
                      rating >= star ? "text-[#F1C40F]" : "text-[#BDC3C7]"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.568 8.332 1.207-6 5.848 1.416 8.267L12 18.896l-7.416 3.9L6 14.162l-6-5.848 8.332-1.207z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#ECF0F1] mb-2">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-1 block w-full p-3 border border-[#BDC3C7] rounded-md focus:outline-none focus:ring focus:ring-[#F1C40F] transition duration-200 resize-none"
                rows="4"
                placeholder="Write your feedback here..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#3498DB] text-white font-semibold py-3 rounded-md hover:bg-[#2980B9] transition duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              Submit Feedback
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Feedback;
