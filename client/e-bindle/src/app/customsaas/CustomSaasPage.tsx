"use client";
import React from "react";

export default function CustomSaasPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-blue-600 mb-4 text-center">
          Custom SaaS Solutions
        </h1>
        <p className="text-gray-700 text-center mb-10 max-w-3xl mx-auto">
          We design and deliver scalable, secure, and high-performing
          Software-as-a-Service (SaaS) platforms tailored to your business
          needs. Our SaaS products help you reach more customers, improve
          efficiency, and unlock new revenue streams.
        </p>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            Our Core Services
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Custom SaaS Application Development</li>
            <li>Multi-Tenant Architecture Design</li>
            <li>Subscription Billing & Payment Integration</li>
            <li>Admin Dashboards & User Management</li>
            <li>Ongoing SaaS Maintenance & Support</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            Technical Excellence
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 rounded shadow">
              <h3 className="font-semibold mb-2">
                Scalable Cloud Infrastructure
              </h3>
              <p>
                We deploy SaaS products on AWS, Azure, and GCP, ensuring
                performance, uptime, and resilience.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded shadow">
              <h3 className="font-semibold mb-2">API-First Design</h3>
              <p>
                Our SaaS platforms offer robust REST and GraphQL APIs for easy
                integrations with third-party services.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded shadow">
              <h3 className="font-semibold mb-2">
                Secure Authentication & Authorization
              </h3>
              <p>
                We implement OAuth2, SSO, JWT, and RBAC to protect your SaaS
                users and data.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded shadow">
              <h3 className="font-semibold mb-2">Analytics & Reporting</h3>
              <p>
                We provide actionable insights and performance metrics to drive
                smarter business decisions.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            Industries We Serve
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Finance (Accounting, FinTech SaaS)</li>
            <li>Healthcare (HealthTech Platforms)</li>
            <li>Education (LMS, E-learning Tools)</li>
            <li>Marketing (CRM, Campaign Management)</li>
            <li>Retail (Inventory Management, Customer Portals)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            Business Outcomes
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>
              Launch new SaaS products faster with reduced development cycles
            </li>
            <li>
              Expand market reach with cloud-native, subscription-based models
            </li>
            <li>
              Increase customer retention through exceptional user experiences
            </li>
            <li>Generate predictable, recurring revenue streams</li>
            <li>Ensure continuous improvements and feature rollouts</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
