import React, { useState } from "react";
import Modal from "react-modal";
import {
  HiOutlineUser,
  HiOutlineCpuChip,
  HiOutlineGlobeAlt,
  HiOutlineCloud,
} from "react-icons/hi2";

// Modal.setAppElement("#__next"); // Uncomment for Next.js accessibility

const serviceOptions = [
  {
    value: "app-dev",
    label: "App Development",
  },
  {
    value: "web-dev",
    label: "Web Development",
    icon: (
      <HiOutlineGlobeAlt
        className="inline-block mr-2 text-blue-400"
        size={20}
      />
    ),
  },
  {
    value: "ai-ml-analytics",
    label: "AI/ML & Analytics",
    icon: (
      <HiOutlineCpuChip className="inline-block mr-2 text-blue-400" size={20} />
    ),
  },
  {
    value: "iot",
    label: "IOT",
    icon: (
      <HiOutlineCloud className="inline-block mr-2 text-blue-400" size={20} />
    ),
  },
  {
    value: "saas-custom-solutions",
    label: "SaaS Custom Solutions",
    icon: (
      <HiOutlineCloud className="inline-block mr-2 text-blue-400" size={20} />
    ),
  },
];

const QuoteModal: React.FC<{ isOpen: boolean; onRequestClose: () => void }> = ({
  isOpen,
  onRequestClose,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "app-dev",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after success
    setFormData({ name: "", email: "", service: "app-dev" });

    // Auto close modal after 2 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      onRequestClose();
    }, 2000);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => {
        if (!isSubmitting) onRequestClose();
      }}
      contentLabel="Get A Quote"
      shouldCloseOnOverlayClick={false}
      overlayClassName="fixed inset-0 flex items-center justify-center z-50 bg-blue-200/40 backdrop-blur-lg transition-all duration-300"
      className="w-[93vw] lg:w-full max-w-lg mx-auto bg-white/90 rounded-3xl shadow-2xl border border-blue-100 p-8 outline-none relative animate-fade-in"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={() => {
          if (!isSubmitting) onRequestClose();
        }}
        className="absolute top-4 right-4 text-blue-400 hover:text-blue-600 transition-colors text-3xl font-bold focus:outline-none"
        aria-label="Close"
        disabled={isSubmitting}
      >
        &times;
      </button>

      <div className="flex flex-col items-center mb-4">
        <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-full p-3 shadow-lg mb-2 animate-pulse">
          {/* <HiOutlineMail className="text-white" size={32} /> */}
        </div>
        <h2 className="text-2xl font-extrabold text-blue-700 mb-1 text-center">
          Get A Quote
        </h2>
        <p className="text-blue-400 mb-4 text-center text-sm">
          Let us know your needs, and our team will get back to you soon!
        </p>
      </div>

      {submitSuccess ? (
        <div className="flex flex-col items-center py-10">
          <svg
            className="h-12 w-12 text-green-500 mb-3 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <div className="text-center text-green-600 font-semibold text-lg">
            Thank you! Your request has been submitted.
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="relative">
            <HiOutlineUser
              className="absolute left-3 top-3 text-blue-300"
              size={20}
            />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full border focus:outline-none border-blue-200 rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition disabled:opacity-50 bg-white/70"
              placeholder=" "
              autoComplete="off"
            />
            <label
              htmlFor="name"
              className="absolute left-10 top-2 text-blue-600 pointer-events-none transition-all duration-200 transform -translate-y-1/2 origin-left bg-white/80 px-1"
              style={{
                fontSize: formData.name ? "0.8rem" : "1rem",
                top: formData.name ? "0.1rem" : "1.1rem",
                color: formData.name ? "#2563eb" : "#60a5fa",
              }}
            >
              Name
            </label>
          </div>
          {/* Email */}
          <div className="relative">
            {/* <HiOutlineMail
              className="absolute left-3 top-3 text-blue-300"
              size={20}
            /> */}
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full border focus:outline-none border-blue-200 rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition disabled:opacity-50 bg-white/70"
              placeholder=" "
              autoComplete="off"
            />
            <label
              htmlFor="email"
              className="absolute left-10 top-2 text-blue-600 pointer-events-none transition-all duration-200 transform -translate-y-1/2 origin-left bg-white/80 px-1"
              style={{
                fontSize: formData.email ? "0.8rem" : "1rem",
                top: formData.email ? "0.1rem" : "1.1rem",
                color: formData.email ? "#2563eb" : "#60a5fa",
              }}
            >
              Email
            </label>
          </div>
          {/* Service */}
          <div>
            <label
              htmlFor="service"
              className="block font-semibold text-blue-700 mb-1"
            >
              Service Needed
            </label>
            <div className="relative">
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full border focus:outline-none border-blue-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition disabled:opacity-50 bg-white/70 appearance-none"
              >
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <span className="absolute right-4 top-3 text-blue-300 pointer-events-none">
                {serviceOptions.find((o) => o.value === formData.service)?.icon}
              </span>
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => {
                if (!isSubmitting) onRequestClose();
              }}
              className="px-5 py-2 rounded-lg border border-blue-200 text-blue-500 bg-blue-50 hover:bg-blue-100 transition font-semibold"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold shadow hover:from-blue-600 hover:to-blue-800 transition disabled:opacity-50 flex items-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              ) : (
                <>
                  <span>Submit</span>
                  {/* <HiOutlineMail className="inline-block" size={18} /> */}
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
};

export default QuoteModal;
