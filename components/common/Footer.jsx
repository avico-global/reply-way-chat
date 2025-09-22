import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top: Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand + Description */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center space-x-3 hover:opacity-90 transition-opacity mb-6"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="text-xl font-bold text-white">ReplyWay</span>
            </Link>
            <p className="text-body text-gray-300 mb-6 max-w-md">
              The all-in-one collaboration platform that brings your team
              together. Chat, video calls, project management, and more in one
              unified workspace.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/features"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/download"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Download
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="border-t border-slate-800 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-body-small text-gray-400 text-center">
            © 2025 ReplyWay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
