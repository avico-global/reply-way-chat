import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "../components/common/Navbar";
import Container from "../components/common/Container";
import Footer from "../components/common/Footer";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const contactItems = [
  {
    Icon: Mail,
    title: "Email Us",
    note: "We usually respond within 24 hours",
    link: "mailto:hello@replyway.com",
    text: "hello@replyway.com",
  },
  {
    Icon: Phone,
    title: "Call Us",
    note: "Mon-Fri from 8am to 6pm PST",
    link: "tel:+1-555-123-4567",
    text: "+1 (555) 123-4567",
  },
  {
    Icon: MapPin,
    title: "Visit Us",
    note: "Our office in San Francisco",
    addr: ["123 Innovation Drive", "San Francisco, CA 94105", "United States"],
  },
  {
    Icon: Clock,
    title: "Business Hours",
    note: "",
    hours: [
      "Mon-Fri: 8:00 AM - 6:00 PM PST",
      "Saturday: 9:00 AM - 2:00 PM PST",
      "Sunday: Closed",
    ],
  },
];

const faqs = [
  {
    q: "How quickly do you respond to contact form submissions?",
    a: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.",
  },
  {
    q: "Can I schedule a demo or consultation?",
    a: "Absolutely! We'd be happy to schedule a personalized demo. Just mention this in your message or call us directly to set up a time.",
  },
  {
    q: "Do you offer technical support?",
    a: "Yes, we provide comprehensive technical support for all our customers during business hours.",
  },
  {
    q: "What information should I include in my message?",
    a: "Your name, company (if applicable), specific questions or requirements, and relevant context.",
  },
  {
    q: "Are you available for partnerships or collaborations?",
    a: "We're always interested. Please reach out with details about your proposal and we'll get back to you promptly.",
  },
];

export default function Contact() {
  const heroRef = useRef(null),
    formRef = useRef(null),
    infoRef = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach(
          (e) => e.isIntersecting && e.target.classList.add("animate-slide-in")
        ),
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    [heroRef, formRef, infoRef].forEach(
      (r) => r.current && io.observe(r.current)
    );
    return () => io.disconnect();
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
                Contact Us
              </div>
              <h1
                ref={heroRef}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tight mb-8 opacity-0"
              >
                Let's start a
                <span className="block text-transparent bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 bg-clip-text animate-gradient">
                  conversation
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-light max-w-3xl mx-auto slide-in-delay-1">
                Have questions about ReplyWay? We'd love to hear from you. Send
                us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div ref={formRef} className="opacity-0">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                Send us a
                <span className="block text-transparent bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 bg-clip-text animate-gradient">
                  message
                </span>
              </h2>
              <p className="text-body-large text-gray-600 dark:text-gray-300 mb-8">
                We'd love to hear from you
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input
                    id="firstName"
                    label="First Name"
                    placeholder="Your first name"
                  />
                  <Input
                    id="lastName"
                    label="Last Name"
                    placeholder="Your last name"
                  />
                </div>
                <Input
                  id="email"
                  type="email"
                  label="Email Address"
                  placeholder="your.email@example.com"
                />
                <Input
                  id="company"
                  label="Company (Optional)"
                  placeholder="Your company name"
                />
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Pricing</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Info */}
            <div ref={infoRef} className="opacity-0">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                Contact
                <span className="block text-transparent bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text">
                  information
                </span>
              </h2>
              <p className="text-body-large text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We're here to help and answer any questions you might have. We
                look forward to hearing from you.
              </p>

              <div className="space-y-6">
                {contactItems.map(
                  ({ Icon, title, note, link, text, addr, hours }, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {title}
                        </h3>
                        {note && (
                          <p className="text-gray-600 dark:text-gray-300 mb-2">
                            {note}
                          </p>
                        )}
                        {link && (
                          <a
                            href={link}
                            className="text-blue-600 hover:text-blue-700 font-medium"
                          >
                            {text}
                          </a>
                        )}
                        {addr && (
                          <p className="text-gray-600 dark:text-gray-300">
                            {addr.map((l, k) => (
                              <span key={k}>
                                {l}
                                <br />
                              </span>
                            ))}
                          </p>
                        )}
                        {hours && (
                          <p className="text-gray-600 dark:text-gray-300">
                            {hours.map((l, k) => (
                              <span key={k}>
                                {l}
                                <br />
                              </span>
                            ))}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-slate-950 transition-colors">
        <Container>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              FAQ
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
              Frequently asked
              <span className="block text-transparent bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 bg-clip-text animate-gradient">
                questions
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mt-6">
              Quick answers to common questions
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {f.q}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
              Ready to get
              <span className="block text-transparent bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 bg-clip-text animate-gradient">
                started?
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed font-light mt-6">
              Join thousands of teams already using ReplyWay to transform their
              collaboration experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/signup">
                <button className="btn btn-primary btn-large">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}

/* Small input helper to keep markup identical but code shorter */
function Input({ id, label, type = "text", placeholder }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
      />
    </div>
  );
}
