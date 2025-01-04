import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import appConfig from "../../../config/appConfig";
import Swal from "sweetalert2";
import { getTokenWithExpiration } from "../../Auth/Session";

function NewArrivals() {
  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const yourAuthToken = getTokenWithExpiration("token"); // Check for a valid token
  
    if (!yourAuthToken) {
      Swal.fire({
        title: "Authentication Required",
        text: "Please log in to access new arrivals.",
        icon: "warning",
      });
      setLoading(false); // Stop loading when auth fails
      return;
    }
  
    // Fetch data from the API
    axios
      .get(`${appConfig.baseurlAPI}/services`, {
        headers: {
          Authorization: `Bearer ${yourAuthToken}`, // Add token to headers
        },
      })
      .then((response) => {
        if (Array.isArray(response.data)) {
          // Use the array directly if response.data is an array
          setNewArrivals(response.data);
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
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Nouveaux sur Solibook</h2>
        {loading ? (
          <p className="text-center text-gray-500">Loading new arrivals...</p>
        ) : newArrivals.length > 0 ? (
          <Slider {...settings}>
            {newArrivals.map((item) => (
              <div key={item.service_id} className="px-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200">
                    <img
                      src={item.image}
                      alt={item.service_name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg">{item.service_name}</h3>
                    <div className="flex items-center gap-1 text-sm text-yellow-500">
                      <span>★</span>
                      <span>{item.rating}</span>
                      <span className="text-gray-600">({item.reviews})</span>
                    </div>
                    <p className="text-sm text-gray-600">{item.salon?.name}</p>
                    <p className="text-sm text-gray-500">{item.category?.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-center text-gray-500">
            No new arrivals available at the moment.
          </p>
        )}
      </div>
    </section>
  );
}

export default NewArrivals;
