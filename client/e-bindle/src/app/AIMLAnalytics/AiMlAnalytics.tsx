"use client";
import React from "react";

export default function AiMlAnalyticsPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-blue-600 mb-4 text-center">
          AI/ML & Analytics
        </h1>
        <p className="text-gray-700 text-center mb-10 max-w-3xl mx-auto">
          Transform your business with data-driven insights and cutting-edge
          artificial intelligence solutions. We help companies leverage machine
          learning models, predictive analytics, and automation to drive
          innovation and performance.
        </p>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            Our Sub-Services
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Predictive Analytics & Forecasting</li>
            <li>Natural Language Processing (NLP) Solutions</li>
            <li>Computer Vision & Image Recognition</li>
            <li>AI Chatbots & Virtual Assistants</li>
            <li>Big Data Engineering & Pipelines</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            Technical Strengths
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 bg-blue-50 rounded shadow">
              <h3 className="font-semibold mb-2">Advanced Machine Learning</h3>
              <p>
                We develop and train custom models using TensorFlow, PyTorch,
                and scikit-learn for domain-specific applications.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded shadow">
              <h3 className="font-semibold mb-2">Automated Data Pipelines</h3>
              <p>
                We build scalable pipelines using tools like Apache Spark and
                Kafka for seamless data ingestion and processing.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded shadow">
              <h3 className="font-semibold mb-2">Cloud AI Integration</h3>
              <p>
                We deploy models on AWS SageMaker, Azure ML, and Google Cloud AI
                platforms for robust, enterprise-grade performance.
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded shadow">
              <h3 className="font-semibold mb-2">Interactive Dashboards</h3>
              <p>
                Our visual analytics tools enable non-technical teams to
                explore, understand, and act on insights.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            Industries We Impact
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Finance (Fraud Detection, Credit Scoring)</li>
            <li>Healthcare (Diagnostics, Personalized Medicine)</li>
            <li>Retail (Recommendation Systems, Customer Segmentation)</li>
            <li>Manufacturing (Defect Detection, Process Optimization)</li>
            <li>Marketing (Sentiment Analysis, Campaign Optimization)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6 text-blue-500">
            Our Business Value
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Accelerate decision-making with real-time insights</li>
            <li>Automate repetitive tasks to boost efficiency</li>
            <li>Uncover hidden patterns and opportunities in your data</li>
            <li>Deliver personalized customer experiences</li>
            <li>Drive innovation and stay ahead of competitors</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
