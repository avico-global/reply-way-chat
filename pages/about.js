import React, { useEffect, useRef } from "react";
import Navbar from "../components/common/Navbar";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";

const values = [
  {
    title: "Innovation",
    description:
      "We constantly push boundaries to create solutions that anticipate future needs and challenges.",
    icon: "🚀",
  },
  {
    title: "Collaboration",
    description:
      "We believe that the best solutions come from working together and sharing diverse perspectives.",
    icon: "🤝",
  },
  {
    title: "Excellence",
    description:
      "We're committed to delivering the highest quality products and experiences for our users.",
    icon: "⭐",
  },
  {
    title: "User-Centric",
    description:
      "Every decision we make is driven by what's best for our users and their success.",
    icon: "👥",
  },
  {
    title: "Integrity",
    description:
      "We operate with transparency, honesty, and ethical practices in everything we do.",
    icon: "🔒",
  },
  {
    title: "Growth",
    description:
      "We embrace continuous learning and improvement, both as individuals and as a company.",
    icon: "📈",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    description:
      "Visionary leader with 15+ years in tech innovation and product development.",
    image: "👩‍💼",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    description:
      "Expert in AI and machine learning with a passion for scalable architecture.",
    image: "👨‍💻",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    description:
      "Creative director focused on user experience and beautiful, intuitive interfaces.",
    image: "👩‍🎨",
  },
  {
    name: "David Kim",
    role: "VP of Engineering",
    description:
      "Seasoned engineering leader building robust and scalable systems.",
    image: "👨‍🔧",
  },
  {
    name: "Lisa Thompson",
    role: "Head of Marketing",
    description:
      "Strategic marketer with expertise in growth and brand development.",
    image: "👩‍💼",
  },
  {
    name: "Alex Morgan",
    role: "Product Manager",
    description:
      "Product strategist focused on user needs and market opportunities.",
    image: "👨‍💼",
  },
];

export default function About() {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("animate-slide-in")
        ),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    [heroRef, missionRef, valuesRef, teamRef].forEach(
      (r) => r.current && observer.observe(r.current)
    );
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

      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 dark:from-slate-900 dark:via-slate-900/95 dark:to-blue-950/20 transition-colors duration-300 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <Container>
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="max-w-4xl text-center relative z-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Our Story
              </div>
              <h1
                ref={heroRef}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tight mb-8 opacity-0"
              >
                Building the future of
                <span className="block text-transparent bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 bg-clip-text animate-gradient">
                  team collaboration
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light slide-in-delay-1">
                We're on a mission to transform how teams work together through
                innovative technology that makes collaboration seamless,
                productive, and enjoyable.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50 transition-colors">
        <Container>
          <div
            ref={missionRef}
            className="max-w-5xl mx-auto text-center opacity-0"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
              Our Mission
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-light mt-6 mb-8 max-w-4xl mx-auto">
              To empower teams and organizations with cutting-edge technology
              that enhances productivity, fosters meaningful collaboration, and
              creates seamless experiences across all devices and platforms.
            </p>
            <p className="text-body text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We believe that the future of work is not just about being
              connected, but about being truly collaborative, efficient, and
              innovative. Our platform brings together the best of AI,
              communication, and productivity tools to help you achieve more.
            </p>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <Container>
          <div ref={valuesRef} className="text-center mb-16 opacity-0">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
              Our{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 bg-clip-text animate-gradient">
                Values
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mt-6">
              The principles that guide everything we do and shape how we build
              products for the future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {values.map((v, i) => (
              <div key={i} className="card-feature group">
                <div className="text-4xl mb-6 duration-300">{v.icon}</div>
                <h3 className="text-heading-4 text-gray-900 dark:text-white mb-4">
                  {v.title}
                </h3>
                <p className="text-body text-gray-600 dark:text-gray-300 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50 transition-colors">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                Our Story
              </h2>
            </div>
            <div className="space-y-8 text-gray-600 dark:text-gray-300">
              <p className="text-body-large leading-relaxed">
                ReplyWay was born from a simple observation: while technology
                has made us more connected than ever, true collaboration remains
                challenging. Teams struggle with fragmented tools, poor user
                experiences, and solutions that don't adapt to their unique
                workflows.
              </p>
              <p className="text-body-large leading-relaxed">
                Founded in 2025, we set out to create a platform that would
                revolutionize how teams work together. Our journey began with a
                small team of passionate engineers, designers, and product
                experts who shared a common vision: to build tools that don't
                just connect people, but truly empower them.
              </p>
              <p className="text-body-large leading-relaxed">
                Today, ReplyWay serves thousands of teams worldwide, helping
                them communicate more effectively, collaborate seamlessly, and
                achieve their goals faster. We continue to innovate and evolve,
                always guided by our core mission and the feedback of our
                amazing community.
              </p>
              <p className="text-body-large leading-relaxed">
                As we look to the future, we're excited about the possibilities
                that AI and emerging technologies bring. We're committed to
                staying at the forefront of innovation while maintaining the
                human-centered approach that makes our platform special.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
