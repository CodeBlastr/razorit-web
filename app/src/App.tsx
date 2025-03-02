import React from "react";
import ContactForm from "./components/ContactForm";

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <section className="py-16 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold">Welcome to RazorIT</h1>
        <p className="text-lg mt-2">Innovative IT solutions for modern businesses</p>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="mt-2 text-gray-700">
          Providing top-tier IT consulting, cloud solutions, and custom software development.
        </p>
      </section>

      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold">Why Choose RazorIT?</h2>
        <p className="mt-2 text-gray-700">
          We deliver cutting-edge technology solutions with unmatched expertise and customer focus.
        </p>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold">Our Clients</h2>
        <p className="mt-2 text-gray-700">Trusted by leading enterprises across industries.</p>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="mt-2">We'd love to hear from you. Fill out the form below.</p>
        <ContactForm />
      </section>
    </div>
  );
};

export default App;
