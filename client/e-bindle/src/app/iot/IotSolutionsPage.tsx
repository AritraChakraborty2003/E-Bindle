"use client";
import React from "react";

export default function IotSolutionsPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-blue-600 mb-4 text-center">
          IoT Solutions
        </h1>
        <p className="text-gray-700 text-center mb-10 max-w-3xl mx-auto">
          Unlock the power of smart devices and connected systems with our
          advanced Internet of Things (IoT) solutions. We help businesses
          automate processes, gather real-time data, and improve decision-making
          across industries.
        </p>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            Our Sub-Services
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>IoT Device Development and Integration</li>
            <li>Edge Computing and Embedded Systems</li>
            <li>Real-Time Data Monitoring and Analytics</li>
            <li>Predictive Maintenance Solutions</li>
            <li>Custom Dashboards and Remote Control Systems</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            Technical Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 rounded shadow">
              <h3 className="font-semibold mb-2">
                Sensor & Device Integration
              </h3>
              <p>
                We integrate sensors, actuators, and controllers to build
                reliable IoT ecosystems across hardware and software layers.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded shadow">
              <h3 className="font-semibold mb-2">Cloud & Edge Computing</h3>
              <p>
                Our architecture balances cloud resources and edge devices to
                optimize speed, reduce latency, and handle massive data flows.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded shadow">
              <h3 className="font-semibold mb-2">Secure Connectivity</h3>
              <p>
                We use encrypted protocols, device authentication, and secure
                firmware updates to safeguard your network.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded shadow">
              <h3 className="font-semibold mb-2">
                Data Processing & Visualization
              </h3>
              <p>
                We design real-time dashboards and analytics tools that turn raw
                IoT data into actionable insights.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            Industries We Serve
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Smart Manufacturing (Industry 4.0)</li>
            <li>Healthcare (Remote Monitoring, Smart Wearables)</li>
            <li>Agriculture (Precision Farming, Sensor Networks)</li>
            <li>Retail (Smart Shelves, Customer Tracking)</li>
            <li>Logistics (Fleet Management, Asset Tracking)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            Our Business Impact
          </h2>
          <p className="text-gray-700 mb-4">We help businesses:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Reduce operational costs through automation</li>
            <li>Improve asset utilization and reduce downtime</li>
            <li>Enhance customer experience with smart products</li>
            <li>Unlock new revenue streams via IoT-enabled services</li>
            <li>Stay competitive in a connected, data-driven world</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
