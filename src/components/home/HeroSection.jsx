"use strict";
import React from "react";
import Slider from "./Slider";
import Container from "../Container";

export default function HeroSection() {
  return (
    <Container>
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Text Section - Left Side */}
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Welcome to Our Store
              </h1>
              <p className="text-lg text-gray-600">
                Your one-stop shop for everything! Discover amazing products at
                unbeatable prices.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
                Shop Now
              </button>
              <div className="flex gap-4 pt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">10K+</p>
                  <p className="text-gray-500">Happy Customers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">500+</p>
                  <p className="text-gray-500">Products</p>
                </div>
              </div>
            </div>

            {/* Image Slider - Right Side */}
            <div className="md:w-1/2 w-full">
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
