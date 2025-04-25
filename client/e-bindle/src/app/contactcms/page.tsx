/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Footer from "../Components/MainPage/Footer";
import CMSHeader from "../cms/cmsComponent/CMSHeader";

const ContactCMS = () => {
  const [activeTab, setActiveTab] = useState<"add" | "update" | "delete">(
    "add"
  );
  const [formData, setFormData] = useState({
    level: "",
    email: "",
    instagram: "",
    linkedin: "",
    facebook: "",
    twitter: "",
    address: "",
    phone1: "",
    phone2: "",
    descr: "",
  });

  const handleClick = (option: string, data: typeof formData) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL_TEST + "api/v1/contacts";
    if (option === "add") {
      async function addContact() {
        try {
          const res = await axios.post(baseUrl, data, {
            headers: { "Content-Type": "application/json" },
          });
          if (res.status === 201) {
            alert("Contact Added");
          } else {
            alert("Something went wrong");
          }
        } catch (err: unknown) {
          if (axios.isAxiosError(err) && err.response) {
            alert(err.response.data?.error || "Something went wrong");
          } else {
            alert("Something went wrong");
          }
        }
      }
      addContact();
    } else if (option === "update") {
      async function updateContact() {
        try {
          const res = await axios.patch(
            `${baseUrl}/level/${data.level}`,
            data,
            {
              headers: { "Content-Type": "application/json" },
            }
          );
          if (res.status === 200) {
            alert("Contact Updated");
          } else {
            alert("Something went wrong");
          }
        } catch (err: unknown) {
          if (axios.isAxiosError(err) && err.response) {
            alert(err.response.data?.error || "Something went wrong");
          } else {
            alert("Something went wrong");
          }
        }
      }
      updateContact();
    } else if (option === "delete") {
      async function deleteContact() {
        try {
          const res = await axios.delete(`${baseUrl}/level/${data.level}`);
          if (res.status === 200) {
            alert("Contact Deleted");
          } else {
            alert("Something went wrong");
          }
        } catch (err: any) {
          alert(err.response?.data?.error || "Something went wrong");
        }
      }
      deleteContact();
    }
  };

  return (
    <>
      <CMSHeader />
      <div className="min-h-screen bg-gray-50 p-8">
        <nav className="flex justify-center mb-12 space-x-4">
          {["add", "update", "delete"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab as "add" | "update" | "delete")}
              className={`px-6 py-3 rounded-full font-medium capitalize ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-600 hover:bg-blue-50"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {tab}
            </motion.button>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8"
        >
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleClick(activeTab, formData);
            }}
          >
            {/* Level is always required */}
            <input
              type="text"
              placeholder="Level (unique key, e.g. 'primary')"
              value={formData.level}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, level: e.target.value }))
              }
              className="w-full p-3 border rounded-lg"
              required
              //   disabled={activeTab === "update" || activeTab === "delete"}
            />

            {/* Only show other fields for add/update */}
            {activeTab !== "delete" && (
              <>
                <input
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className="w-full p-3 border rounded-lg"
                  required
                />
                <input
                  type="text"
                  placeholder="Instagram"
                  value={formData.instagram}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      instagram: e.target.value,
                    }))
                  }
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="LinkedIn"
                  value={formData.linkedin}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      linkedin: e.target.value,
                    }))
                  }
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Facebook"
                  value={formData.facebook}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      facebook: e.target.value,
                    }))
                  }
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Twitter"
                  value={formData.twitter}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      twitter: e.target.value,
                    }))
                  }
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      address: e.target.value,
                    }))
                  }
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Phone 1"
                  value={formData.phone1}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      phone1: e.target.value,
                    }))
                  }
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Phone 2"
                  value={formData.phone2}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      phone2: e.target.value,
                    }))
                  }
                  className="w-full p-3 border rounded-lg"
                />
                <textarea
                  placeholder="Description"
                  value={formData.descr}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      descr: e.target.value,
                    }))
                  }
                  className="w-full p-3 border rounded-lg"
                  rows={4}
                />
              </>
            )}

            <button
              type="submit"
              className={`w-full py-3 rounded-lg text-white font-medium transition-colors ${
                activeTab === "delete"
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {activeTab === "add"
                ? "Create Contact"
                : activeTab === "update"
                ? "Update Contact"
                : "Delete Contact"}
            </button>
          </form>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default ContactCMS;
