import React from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/container/Home/Hero";
import Features from "../components/container/Home/Features";
import Footer from "../components/common/Footer";
import CTA from "../components/container/Home/CTA";
import Container from "../components/common/Container";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="py-20 bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 transition-colors duration-300">
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              Product Demo
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
              See ReplyWay in
              <span className="block text-transparent bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 bg-clip-text animate-gradient">
                action
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light mt-6">
              Experience seamless team collaboration with our intuitive
              interface designed for modern workflows. Everything you need to
              keep your team connected and productive.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-4 backdrop-blur-sm">
              {/* Browser chrome */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 mx-6">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 text-sm text-gray-600 dark:text-gray-300 text-center">
                    app.replyway.com
                  </div>
                </div>
                <div className="w-20"></div>
              </div>

              {/* Screenshot */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700/50">
                <img
                  src="/st-images/demo.png"
                  alt="ReplyWay Dashboard - Team collaboration interface"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Features />
      <CTA />
      <Footer />
    </>
  );
}
