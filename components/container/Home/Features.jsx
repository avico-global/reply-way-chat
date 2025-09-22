import React from 'react'
import Container from '../../common/Container'
import { MessageCircle, Video, Users, FileText, Shield, Zap } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: MessageCircle,
      title: "Real-time Messaging",
      description: "Instant communication with your team through secure, fast messaging channels that keep everyone connected.",
      image: "/st-images/chat.jpeg"
    },
    {
      icon: Video,
      title: "Video Conferencing",
      description: "High-quality video calls with screen sharing, recording, and advanced collaboration tools for remote teams.",
      image: "/st-images/hd-call.jpeg"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly with shared workspaces, project boards, and real-time document collaboration.",
      image: "/st-images/team.png"
    },
    {
      icon: FileText,
      title: "Global Access",
      description: "Access your workspace from anywhere in the world with seamless connectivity and synchronized data across all devices.",
      image: "/st-images/global-access.png"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, SSO integration, and comprehensive compliance features.",
      image: "/st-images/enterprise.jpeg"
    },
    {
      icon: Zap,
      title: "AI-Powered Tools",
      description: "Smart automation, intelligent insights, and AI-assisted workflows to boost your team's productivity.",
      image: "/st-images/ai-powered.png"
    }
  ]

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800/50 transition-colors duration-300">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
            Everything your team
            <span className="block text-transparent bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 bg-clip-text animate-gradient">
              needs to succeed
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light mt-6">
            Powerful collaboration tools designed to streamline communication, boost productivity, 
            and keep your team connected across all projects and workflows.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="card-feature group"
              >
                {/* Feature Image */}
                <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
            )
          })}
        </div>
      </Container>
    </section>
  )
}
