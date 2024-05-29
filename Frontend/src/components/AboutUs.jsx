import React from "react";
import { Link, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import aboutImage from "../assets/about.jpg";
import { useAuth } from "../context/AuthProvider";

function AboutUs() {
  const [authUser] = useAuth();

  // Verificar si el usuario está autenticado
  if (!authUser) {
    return <Navigate to="/signup" />; 
  }

  return (
    <div className="dark:bg-slate-900 dark:text-white min-h-screen">
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-10">
        <div className="mt-24 flex flex-col md:flex-row items-center justify-center text-center md:text-left">
          <div className="md:w-1/2 md:mr-8 mb-6 md:mb-0">
            <img src={aboutImage} alt="About Us" className="rounded-md shadow-md" />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-4xl mb-4">About <span className="text-pink-500">Us</span></h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              fringilla, est ut viverra ultrices, ligula ex consequat orci, nec
              fermentum enim libero in ex. Aliquam in tellus magna. Fusce ut
              mauris at felis consectetur posuere.
            </p>
            <p>
              Proin nec leo sed justo maximus consectetur. Donec vitae placerat lorem. Duis bibendum odio et ex semper eleifend. Maecenas vestibulum blandit ligula sed fermentum. Nam nec arcu dapibus, condimentum quam id, posuere odio. Fusce nec sem vel lacus accumsan convallis. Donec viverra placerat turpis a placerat. In aliquam tincidunt hendrerit. Donec in fermentum nisi.
            </p>
            <Link to="/">
              <button className="text-center mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
