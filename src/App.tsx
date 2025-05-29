import { ArrowRight } from "lucide-react";
import "./App.css";
import Lottie from 'lottie-react';
import animationData from "./assets/travel.json";

export default function Page() {
  const newDomainUrl = "https://unp.auladm.com/"; 

  return (
    <div className="flex min-h-screen items-center w-full justify-center bg-gradient-to-b from-white to-gray-100 p-4">
      <div className="rounded-xl bg-white p-6 shadow-lg sm:p-8">
        <div className="flex flex-col items-center">

          {/* Lottie Animation */}
          <div className="mb-6 w-40 sm:w-48">
            <Lottie animationData={animationData} loop={true} autoplay={true} />
          </div>

          {/* Heading */}
          <h1 className="mb-3 text-2xl font-bold text-gray-800 sm:mb-4 sm:text-3xl md:text-4xl text-center">
            ¡Nos mudamos!
          </h1>

          {/* Divider */}
          <div className="mb-4 h-1 w-16 bg-blue-500 sm:mb-6"></div>

          {/* Description */}
          <p className="mb-4 text-center text-gray-600 sm:mb-6 sm:text-lg">
            Hemos completado la migración a nuestro nuevo dominio.
          </p>

          {/* New Domain Card */}
          <div className="mb-6 w-full rounded-lg bg-gray-50 p-4 sm:mb-8">
            <p className="mb-2 text-center font-medium text-gray-700">
              Accede a tu aula virtual desde:
            </p>
            <p className="text-center text-lg font-bold text-blue-600 sm:text-xl break-all">
              {newDomainUrl}
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => (window.location.href = newDomainUrl)}
            className="inline-flex items-center rounded-md bg-blue-600 mb-5 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Ir al nuevo sitio
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>

          {/* Contact Info */}
          <p className="text-center text-sm text-gray-500">
            Si tienes alguna pregunta, por favor contáctanos en{" "}
            <a
              href="mailto:info@ejemplo.com"
              className="text-blue-600 hover:underline"
            >
              info@ejemplo.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}