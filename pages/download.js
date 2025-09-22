import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "../components/common/Navbar";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";
import {
  Download as DownloadIcon,
  Smartphone,
  Monitor,
  Globe,
  Shield,
  Zap,
  CheckCircle,
  Laptop,
} from "lucide-react";

export default function Download() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const downloadRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-in");
        }
      });
    }, observerOptions);

    if (heroRef.current) observer.observe(heroRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (downloadRef.current) observer.observe(downloadRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-30px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-in {
          animation: slideInFromLeft 0.8s ease-out forwards;
        }

        .slide-in-delay-1 {
          animation-delay: 0.2s;
        }

        .slide-in-delay-2 {
          animation-delay: 0.4s;
        }

        .slide-in-delay-3 {
          animation-delay: 0.6s;
        }
      `}</style>
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 dark:from-slate-900 dark:via-slate-900/95 dark:to-blue-950/20 transition-colors duration-300 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <Container>
          <div className="flex items-center justify-center min-h-[300px]">
            <div className="max-w-4xl text-center relative z-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Download App
              </div>
              <h1
                ref={heroRef}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-white leading-tight tracking-tight mb-8 opacity-0"
              >
                Get ReplyWay
                <span className="block text-transparent bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 bg-clip-text h-20 animate-gradient">
                  everywhere
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-light max-w-3xl mx-auto slide-in-delay-1">
                Stay connected with your team on desktop with our native
                applications for Windows and Mac. Mobile apps coming soon!
              </p>
            </div>
          </div>
        </Container>
      </section>
      {/* Download Options Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50 transition-colors">
        <Container>
          <div ref={downloadRef} className="max-w-7xl mx-auto opacity-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Windows App */}
              <div className="card-feature group text-center">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Monitor className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-heading-4 text-gray-900 dark:text-white mb-4">
                  Windows
                </h3>
                <p className="text-body text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Get the full ReplyWay experience on Windows with our native
                  desktop application featuring all collaboration tools.
                </p>
                <div className="space-y-3">
                  <button className="btn btn-primary w-full flex items-center justify-center space-x-2">
                    <DownloadIcon className="w-5 h-5" />
                    <span>Download for Windows</span>
                  </button>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Windows 10 or later required
                  </p>
                </div>
              </div>

              {/* Mac App */}
              <div className="card-feature group text-center">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Laptop className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-heading-4 text-gray-900 dark:text-white mb-4">
                  macOS
                </h3>
                <p className="text-body text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Native macOS experience with full system integration,
                  optimized performance, and seamless collaboration features.
                </p>
                <div className="space-y-3">
                  <button className="btn btn-primary w-full flex items-center justify-center space-x-2">
                    <DownloadIcon className="w-5 h-5" />
                    <span>Download for Mac</span>
                  </button>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    macOS 11.0 or later required
                  </p>
                </div>
              </div>
            </div>

            {/* Coming Soon Section */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                Coming Soon
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Mobile Apps in Development
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                We're working on native iOS and Android apps to bring ReplyWay
                to your mobile devices. Stay tuned for updates on our mobile
                release!
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
