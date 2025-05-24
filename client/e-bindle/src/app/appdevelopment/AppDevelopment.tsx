"use client";
import React from "react";

export default function AppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <h1 className="text-5xl font-bold text-blue-600 mb-4 text-center">
          Mobile App Development Services
        </h1>
        <p className="text-gray-700 text-center mb-10 max-w-3xl mx-auto">
          We craft high-impact mobile applications that deliver exceptional user
          experiences, drive customer loyalty, and support your business goals.
          Our solutions span from native to cross-platform development, ensuring
          robust, scalable, and secure apps ready for today’s mobile-first
          world.
        </p>

        {/* Sub-Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            Our Sub-Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h3 className="font-semibold mb-2">iOS & Android Development</h3>
              <p>
                We build native mobile apps tailored to the strengths of each
                platform, ensuring smooth performance, beautiful interfaces, and
                full compliance with app store standards.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Cross-Platform Apps</h3>
              <p>
                Save time and budget with React Native and Flutter, delivering
                apps that work seamlessly across iOS and Android from a shared
                codebase.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">UI/UX Design</h3>
              <p>
                Our human-centered designs combine sleek visuals with intuitive
                navigation, ensuring users stay engaged and satisfied.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Backend & API Integration</h3>
              <p>
                We connect your app to powerful backend systems, third-party
                services, and secure payment gateways to enrich functionality
                and data flow.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Maintenance & Updates</h3>
              <p>
                Post-launch, we provide ongoing support to fix bugs, deliver
                updates, and enhance features as your business evolves.
              </p>
            </div>
          </div>
        </section>

        {/* Challenges We Solve */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            Challenges We Solve
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Reducing time-to-market without sacrificing quality</li>
            <li>Ensuring multi-device, multi-OS compatibility</li>
            <li>Creating intuitive experiences that delight users</li>
            <li>Maintaining security, data privacy, and compliance</li>
            <li>Scaling backend systems to handle growing user bases</li>
          </ul>
        </section>

        {/* Key Technical Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            Key Technical Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 rounded shadow">
              <h3 className="font-semibold mb-2">Native Performance</h3>
              <p>
                Optimized code, smooth animations, and minimal latency ensure
                top-tier user satisfaction.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded shadow">
              <h3 className="font-semibold mb-2">Scalable Architecture</h3>
              <p>
                Apps built to grow with your business, ready to handle
                increasing traffic and feature expansion.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded shadow">
              <h3 className="font-semibold mb-2">Secure Data Handling</h3>
              <p>
                End-to-end encryption, secure storage, and GDPR-compliant data
                processing protect your users and your reputation.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded shadow">
              <h3 className="font-semibold mb-2">Seamless Integrations</h3>
              <p>
                Integrate with CRM, ERP, social media, analytics, and other key
                business systems to create a connected ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Technologies We Use */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            Technologies We Use
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>React Native, Flutter, Swift, Kotlin</li>
            <li>Node.js, Express, GraphQL, REST APIs</li>
            <li>Firebase, AWS, Azure cloud services</li>
            <li>Stripe, Razorpay, PayPal payment integrations</li>
            <li>Google Analytics, Mixpanel, Firebase Analytics</li>
          </ul>
        </section>

        {/* Our Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            Our App Development Process
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li>
              <span className="font-semibold">Discovery & Planning:</span> We
              define objectives, user personas, and technical scope to set
              clear, measurable goals.
            </li>
            <li>
              <span className="font-semibold">Design & Prototyping:</span> Our
              designers deliver wireframes, UI screens, and interactive
              prototypes for early feedback.
            </li>
            <li>
              <span className="font-semibold">Agile Development:</span> We code
              in sprints, delivering regular builds and adapting to evolving
              requirements.
            </li>
            <li>
              <span className="font-semibold">Testing & QA:</span> Rigorous
              testing across devices ensures functionality, performance, and
              security.
            </li>
            <li>
              <span className="font-semibold">Deployment & Monitoring:</span> We
              publish your app, monitor real-world performance, and plan future
              improvements.
            </li>
          </ol>
        </section>

        {/* Post-Launch Value */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            Post-Launch Support & Growth
          </h2>
          <p className="text-gray-700 mb-4">
            Our job doesn’t end at launch. We continuously monitor your app,
            gather user feedback, analyze data, and recommend improvements to
            keep your product competitive.
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Bug fixes and performance updates</li>
            <li>Feature enhancements based on market trends</li>
            <li>Scalability reviews as user demand grows</li>
            <li>App store optimization to maintain visibility</li>
          </ul>
        </section>

        {/* Industry Impact */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            Industries We Transform
          </h2>
          <p className="text-gray-700 mb-4">
            We have successfully delivered mobile solutions across industries
            like:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>
              Healthcare: Appointment apps, telemedicine, fitness trackers
            </li>
            <li>Finance: Digital wallets, mobile banking, investment tools</li>
            <li>Retail: Mobile shopping, loyalty programs, AR-enabled apps</li>
            <li>
              Education: E-learning platforms, interactive courses, progress
              trackers
            </li>
            <li>Travel: Booking systems, travel guides, real-time updates</li>
            <li>
              Entertainment: Streaming apps, social platforms, gaming portals
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
