import React from "react";
import Container from "../../common/Container";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-800 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <Container>
        <div className="relative text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
            Ready to transform your
            <span className="block text-transparent bg-gradient-to-r from-white to-blue-100 bg-clip-text">
              team collaboration?
            </span>
          </h2>
          <p className="text-body-large sm:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of teams already using ReplyWay to streamline
            communication, boost productivity, and achieve better results
            together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/signup"
              className="btn btn-large bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-4 text-lg"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="btn btn-large bg-transparent text-white border-2 border-white/30 hover:bg-white/10 px-8 py-4 text-lg"
            >
              Talk to Sales
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-200 text-sm">
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Free 30-day trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
