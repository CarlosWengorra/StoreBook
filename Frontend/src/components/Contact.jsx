import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom"; // Importar Navigate para redireccionar
import axios from "axios";
import Navbar from "./Navbar";
import { useAuth } from "../context/AuthProvider"; // Importar el contexto de autenticación

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    query: "",
  });

  const [authUser] = useAuth(); // Obtener el estado de autenticación

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4001/contacts", formData);
      console.log("Formulario enviado correctamente");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  // Verificar si el usuario está autenticado
  if (!authUser) {
    return <Navigate to="/signup" />; // Redireccionar a la página de inicio de sesión si el usuario no está autenticado
  }
  return (
    <div className="dark:bg-slate-900 dark:text-white min-h-screen">
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-10">
        <div className="mt-24 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            Contact <span className="text-pink-500">Us</span>
          </h1>
          <p className="mt-8">
            If you have any questions or inquiries, please reach out to us. We
            are here to help you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border dark:bg-slate-900 dark:text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border dark:bg-slate-900 dark:text-white"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border dark:bg-slate-900 dark:text-white"
              required
            />
          </div>

          <div className="mt-4">
            <label htmlFor="query" className="block mb-1">
              Your Query
            </label>
            <textarea
              id="query"
              name="query"
              value={formData.query}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 rounded-md border dark:bg-slate-900 dark:text-white"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300"
          >
            Submit
          </button>
        </form>

        <Link to="/">
          <button className="text-center mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
