"use client";
import React from "react";

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <h1 className="text-5xl font-bold text-blue-600 mb-4 text-center">
          Web Development Services
        </h1>
        <p className="text-gray-700 text-center mb-10 max-w-3xl mx-auto">
          We deliver custom, high-performance websites that elevate your brand,
          engage users, and drive measurable results. From sleek landing pages
          to complex e-commerce platforms, we turn your vision into reality with
          cutting-edge web technologies.
        </p>

        {/* Sub-Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            Our Sub-Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-semibold mb-2">
                Custom Website Design & Development
              </h3>
              <p>
                Tailored, pixel-perfect designs that align with your brand
                identity and deliver exceptional user experiences.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Responsive Web Applications
              </h3>
              <p>
                Dynamic, mobile-optimized apps that work flawlessly across
                devices, ensuring smooth interactions and performance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                CMS Integration (WordPress, Strapi, etc.)
              </h3>
              <p>
                Easy-to-manage content platforms, empowering you to update your
                site effortlessly without technical help.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">E-commerce Solutions</h3>
              <p>
                Robust online stores with secure payment gateways, inventory
                management, and seamless checkout experiences.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Performance Optimization & SEO
              </h3>
              <p>
                We boost site speed, SEO rankings, and user engagement with
                optimized code and Google Core Web Vitals compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 rounded shadow">
              <h3 className="font-semibold mb-2">Modern UI/UX Design</h3>
              <p>
                We craft sleek, intuitive designs focused on maximizing
                usability and aesthetics.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded shadow">
              <h3 className="font-semibold mb-2">SEO-Optimized Code</h3>
              <p>
                Structured code and metadata optimized for search engines,
                helping improve your online visibility.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded shadow">
              <h3 className="font-semibold mb-2">Fast Loading Times</h3>
              <p>
                We ensure blazing-fast page load speeds, improving user
                retention and Google rankings.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded shadow">
              <h3 className="font-semibold mb-2">Secure & Scalable</h3>
              <p>
                We build with security best practices and scalable
                infrastructure for long-term growth.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            Our Process
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li>
              <span className="font-semibold">Discovery & Planning:</span> We
              gather requirements, define goals, and create a project roadmap.
            </li>
            <li>
              <span className="font-semibold">Design & Prototyping:</span> Our
              designers create wireframes and mockups to visualize the final
              product.
            </li>
            <li>
              <span className="font-semibold">Development & Testing:</span> We
              develop, test, and optimize your site using the latest web
              technologies.
            </li>
            <li>
              <span className="font-semibold">Launch & Support:</span> We deploy
              your site live, monitor performance, and provide continuous
              support.
            </li>
          </ol>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            Why Choose E-Bindle?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Experienced team with 4+ years delivering successful projects
              across industries.
            </li>
            <li>
              Personalized approach tailored to your unique business needs and
              goals.
            </li>
            <li>
              Agile development ensuring fast delivery, flexibility, and
              transparency.
            </li>
            <li>
              End-to-end solutions — from strategy and design to development and
              deployment.
            </li>
          </ul>
        </section>

        {/* Call to Action */}
      </div>
    </div>
  );
}
