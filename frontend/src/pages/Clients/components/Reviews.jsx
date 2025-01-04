import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { getTokenWithExpiration } from "../../Auth/Session";; // Ensure this function exists to retrieve tokens
import appConfig from "../../../config/appConfig"; // Update with your actual configuration file path

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const yourAuthToken = getTokenWithExpiration("token"); // Check for a valid token

    if (!yourAuthToken) {
      Swal.fire({
        title: "Authentication Required",
        text: "Please log in to access reviews.",
        icon: "warning",
      });
      setLoading(false); // Stop loading when auth fails
      return;
    }

    axios
      .get(`${appConfig.baseurlAPI}/reviews`, {
        headers: {
          Authorization: `Bearer ${yourAuthToken}`, // Add token to headers
        },
      })
      .then((response) => {
        if (Array.isArray(response.data)) {
          setReviews(response.data);
        } else {
          console.error("Unexpected response format:", response);
        }
      })
      .catch((error) => {
        console.error("API Fetch Error:", error);
        Swal.fire({
          title: "Oops...",
          text: "Something went wrong. Please try again.",
          icon: "error",
          timer: 3000,
        });
      })
      .finally(() => {
        setLoading(false); // Stop loading once API call completes
      });
  }, []);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Avis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div key={review.review_id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <h3 className="font-bold mb-2">{review.comment}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {review.salon?.salon_name || "Unknown Salon"}
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div>
                  <p className="font-medium">{review.client?.name || "Anonymous"}</p>
                  <p className="text-sm text-gray-500">{review.salon?.location || "Unknown Location"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
