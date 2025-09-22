import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "../components/common/Navbar";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";
import {
  MessageCircle,
  Video,
  Users,
  FileText,
  Shield,
  Zap,
} from "lucide-react";
import Image from "next/image";
import CTA from "../components/container/Home/CTA";

export default function Features() {
  const heroRef = useRef(null);

  const features = [
    {
      icon: MessageCircle,
      title: "Real-time Messaging",
      description:
        "Instant communication with your team through secure, fast messaging channels that keep everyone connected.",
      image: "/st-images/chat.jpeg",
    },
    {
      icon: Video,
      title: "Video Conferencing",
      description:
        "High-quality video calls with screen sharing, recording, and advanced collaboration tools for remote teams.",
      image: "/st-images/hd-call.jpeg",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Work together seamlessly with shared workspaces, project boards, and real-time document collaboration.",
      image: "/st-images/team.png",
    },
    {
      icon: FileText,
      title: "Global Access",
      description:
        "Access your workspace from anywhere in the world with seamless connectivity and synchronized data across all devices.",
      image: "/st-images/global-access.png",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level security with end-to-end encryption, SSO integration, and comprehensive compliance features.",
      image: "/st-images/enterprise.jpeg",
    },
    {
      icon: Zap,
      title: "AI-Powered Tools",
      description:
        "Smart automation, intelligent insights, and AI-assisted workflows to boost your team's productivity.",
      image: "/st-images/ai-powered.png",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (heroRef.current) observer.observe(heroRef.current);
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
      `}</style>

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 dark:from-slate-900 dark:via-slate-900/95 dark:to-blue-950/20 transition-colors duration-300 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <Container>
          <div className="flex items-center justify-center min-h-[300px]">
            <div className="max-w-4xl text-center relative z-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Features
              </div>
              <h1
                ref={heroRef}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tight mb-8 opacity-0"
              >
                Powerful tools for
                <span className="block text-transparent bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 bg-clip-text animate-gradient">
                  modern teams
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-light max-w-3xl mx-auto slide-in-delay-1">
                Discover the comprehensive suite of collaboration tools that
                make ReplyWay the ultimate platform for productive teamwork.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50 transition-colors duration-300">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
              Everything you need to
              <span className="block text-transparent bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 bg-clip-text animate-gradient">
                collaborate
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mt-6">
              Powerful collaboration tools designed to streamline communication,
              boost productivity, and keep your team connected across all
              projects and workflows.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="card-feature group">
                  {/* Feature Image */}
                  <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Feature Content */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/40 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-heading-4 text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-body text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTA />

      <Footer />
    </>
  );
}
