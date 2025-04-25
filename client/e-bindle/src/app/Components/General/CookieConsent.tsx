/* eslint-disable react/no-unescaped-entities */
// components/CookieConsentModal.tsx
"use client";
import { useEffect, useState } from "react";

export default function CookieConsentModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Show after 2 seconds if not already dismissed this session
    if (!sessionStorage.getItem("cookie-consent")) {
      const timer = setTimeout(() => setShow(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const handleManage = () => {
    // You can open a settings panel here
    alert("Open cookie settings (not implemented)");
  };

  const handleClose = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed w-[100vw] inset-0 z-50 flex items-end justify-center bg-black/40">
      <div
        className="relative bg-white rounded-xl shadow-2xl w-[90vw] max-w-3xl mx-auto p-6 md:p-8 mb-6 animate-fadeIn"
        style={{
          marginBottom: "2vw",
        }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl"
          onClick={handleClose}
          aria-label="Close"
        >
          &times;
        </button>
        {/* Title */}
        <div className="font-semibold text-lg mb-2 text-gray-900">
          Cookie Consent
        </div>
        {/* Message */}
        <p className="text-gray-700 mb-4 text-sm">
          By Clicking, "Accept all cookies", you agree to the storing of cookies
          on your device to enhance site navigation, analyze site usage, and
          assist in our marketing efforts.{" "}
          <a
            href="/privacy-policy"
            className="text-blue-600 underline hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy policy
          </a>
          .
        </p>
        {/* Buttons */}
        <div className="flex flex-col md:flex-row md:justify-end gap-2">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            onClick={handleAccept}
          >
            Accept
          </button>
          <button
            className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition"
            onClick={handleManage}
          >
            Reject
          </button>
        </div>
      </div>
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
