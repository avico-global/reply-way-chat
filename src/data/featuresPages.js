// Dynamic Components - removed imports for non-existent components
import React from 'react'

// Consistent hero component matching our design system
const DynamicHero = ({ title, subtitle, bannerText, primaryCtaText, secondaryCtaText, stats }) => (
  <section className="relative py-20 lg:py-32 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 dark:from-slate-900 dark:via-slate-900/95 dark:to-blue-950/20 transition-colors duration-300 overflow-hidden">
    {/* Background decorations */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-blue-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
    </div>
    
    <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
      {bannerText && (
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
          {bannerText}
        </div>
      )}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 dark:text-white leading-[0.9] tracking-tight mb-8">
        {title.split(' ').slice(0, -1).join(' ')}
        <span className="block text-transparent bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 bg-clip-text animate-gradient">
          {title.split(' ').slice(-1)[0]}
        </span>
      </h1>
      <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-light max-w-4xl mx-auto mb-12">{subtitle}</p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
        <button className="btn btn-primary btn-large">{primaryCtaText}</button>
        <button className="btn btn-secondary btn-large">{secondaryCtaText}</button>
      </div>
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-4 py-6 rounded-2xl border border-gray-200/50 dark:border-gray-600/50">
              <div className="text-heading-3 text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-body-small text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  </section>
)

const DynamicFeatures = ({ title, subtitle, features, demoTitle, demoDescription, demoFeatures }) => (
  <section className="py-20 bg-slate-50 dark:bg-slate-800/50 transition-colors">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
          Features
        </div>
        <h2 className="text-heading-2 text-gray-900 dark:text-white mb-6">{title}</h2>
        <p className="text-body-large text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features?.map((feature, i) => (
          <div key={i} className="card-feature group">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/40 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-heading-4 text-gray-900 dark:text-white mb-4">{feature.title}</h3>
            <p className="text-body text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const DynamicBenefits = ({ title, subtitle, benefits, statsTitle, statsSubtitle, useCasesTitle, useCases }) => (
  <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-50 dark:bg-violet-900/30 border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 text-sm font-medium mb-6">
          Benefits
        </div>
        <h2 className="text-heading-2 text-gray-900 dark:text-white mb-6">{title}</h2>
        <p className="text-body-large text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits?.map((benefit, i) => (
          <div key={i} className="card group">
            <div className="w-12 h-12 bg-violet-50 dark:bg-violet-900/40 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <benefit.icon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
            </div>
            <h3 className="text-heading-4 text-gray-900 dark:text-white mb-4">{benefit.title}</h3>
            <p className="text-body text-gray-600 dark:text-gray-300 leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const DynamicFAQ = ({ subtitle, faqs }) => (
  <section className="py-20 bg-slate-50 dark:bg-slate-800/50 transition-colors">
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
          FAQ
        </div>
        <h2 className="text-heading-2 text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
        <p className="text-body-large text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
      </div>
      <div className="space-y-6">
        {faqs?.map((faq, i) => (
          <div key={i} className="card">
            <h3 className="text-heading-4 text-gray-900 dark:text-white mb-4">{faq.question}</h3>
            <p className="text-body text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const DynamicGetStarted = ({ title, subtitle, mainCtaTitle, mainCtaSubtitle, primaryCtaText, platforms, finalCtaTitle, finalCtaSubtitle }) => (
  <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-600 to-blue-800 overflow-hidden">
    {/* Background decorations */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
    </div>
    
    <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
      <h2 className="text-heading-2 sm:text-4xl lg:text-5xl text-white mb-6">{title}</h2>
      <p className="text-body-large sm:text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
      
      <div className="mb-16">
        <h3 className="text-heading-3 text-white mb-4">{mainCtaTitle}</h3>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">{mainCtaSubtitle}</p>
        <button className="btn btn-large bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-4 text-lg">{primaryCtaText}</button>
      </div>

      {platforms && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {platforms.map((platform, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <platform.icon className="w-12 h-12 text-white mx-auto mb-4" />
              <h4 className="text-heading-4 text-white mb-2">{platform.name}</h4>
              <p className="text-blue-100 mb-4">{platform.description}</p>
              <ul className="text-sm text-blue-200 space-y-1">
                {platform.features?.map((feature, j) => (
                  <li key={j}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <div>
        <h3 className="text-heading-3 text-white mb-4">{finalCtaTitle}</h3>
        <p className="text-blue-100 max-w-2xl mx-auto">{finalCtaSubtitle}</p>
      </div>
    </div>
  </section>
)

// Icons for features
import { Monitor, Users, Shield, Zap, Eye, Share2, Settings, BarChart3, Video, MessageCircle, Phone, FileText, TrendingUp, Globe, Clock, DollarSign, Target, CheckCircle, Lock, Wifi, Smartphone, Tablet, Search, Building } from 'lucide-react'

// Navigation data structure
export const navigationData = {
  features: [
    {
      title: "Meetings and conferencing",
      icon: Video,
      items: [
        { name: "Online meetings", href: "/online-meetings", slug: "online-meetings" },
        { name: "Video conferencing", href: "/video-conferencing", slug: "video-conferencing" },
        { name: "Screen sharing", href: "/screen-sharing", slug: "screen-sharing" },
        { name: "Custom backgrounds", href: "/custom-backgrounds", slug: "custom-backgrounds" },
        { name: "Webinars", href: "/webinars", slug: "webinars" },
        { name: "Accessibility", href: "/accessibility", slug: "accessibility" },
        { name: "Town hall", href: "/town-hall", slug: "town-hall" }
      ]
    },
    {
      title: "Teams Phone",
      icon: Smartphone,
      items: [
        { name: "Teams Phone", href: "/teams-phone", slug: "teams-phone" },
        { name: "VOIP", href: "/voip", slug: "voip" },
        { name: "PBX", href: "/pbx", slug: "pbx" },
        { name: "Video calling", href: "/video-calling", slug: "video-calling" },
        { name: "Business phones", href: "/business-phones", slug: "business-phones" },
        { name: "Contact Center", href: "/contact-center", slug: "contact-center" }
      ]
    },
    {
      title: "Chat and collaboration",
      icon: MessageCircle,
      items: [
        { name: "AI in Teams", href: "/ai-in-teams", slug: "ai-in-teams" },
        { name: "Instant messaging", href: "/instant-messaging", slug: "instant-messaging" },
        { name: "File sharing", href: "/file-sharing", slug: "file-sharing" },
        { name: "Collaboration", href: "/collaboration", slug: "collaboration" },
        { name: "Chat", href: "/chat", slug: "chat" }
      ]
    },
    {
      title: "Devices",
      icon: Smartphone,
      items: [
        { name: "Teams Devices", href: "/teams-devices", slug: "teams-devices" },
        { name: "Teams Rooms", href: "/teams-rooms", slug: "teams-rooms" }
      ]
    },
    {
      title: "Apps",
      icon: Monitor,
      items: [
        { name: "Apps and workflows", href: "/apps-and-workflows", slug: "apps-and-workflows" },
        { name: "Meeting apps", href: "/meeting-apps", slug: "meeting-apps" },
        { name: "Microsoft Mesh", href: "/microsoft-mesh", slug: "microsoft-mesh" },
        { name: "Microsoft Places", href: "/microsoft-places", slug: "microsoft-places" }
      ]
    },
    {
      title: "Business and management",
      icon: Building,
      items: [
        { name: "Workforce management", href: "/workforce-management", slug: "workforce-management" },
        { name: "Staffing/scheduling", href: "/staffing-scheduling", slug: "staffing-scheduling" },
        { name: "Hot Desking", href: "/hot-desking", slug: "hot-desking" }
      ]
    }
  ]
}

// Function to get all valid feature slugs
export const getAllFeatureSlugs = () => {
  const slugs = []
  navigationData.features.forEach(category => {
    category.items.forEach(item => {
      slugs.push(item.slug)
    })
  })
  return slugs
}

// Function to get feature data by slug
export const getFeatureDataBySlug = (slug) => {
  for (const category of navigationData.features) {
    const item = category.items.find(item => item.slug === slug)
    if (item) {
      return item
    }
  }
  return null
}

// Function to generate placeholder data for features that don't have content yet
export const generatePlaceholderFeatureData = (slug, title) => {
  return {
    sections: [
      {
        component: DynamicHero,
        props: {
          bannerText: `New ${title} Premium - AI-powered features for intelligent collaboration`,
          title: title,
          subtitle: `Experience the power of ${title.toLowerCase()} with advanced features, seamless integration, and professional tools designed for modern teams.`,
          primaryCtaText: "Get Started",
          secondaryCtaText: "Watch Demo",
          stats: [
            { value: "10M+", label: "Users" },
            { value: "99.9%", label: "Reliability" },
            { value: "24/7", label: "Support" },
            { value: "Global", label: "Reach" }
          ]
        }
      },
      {
        component: DynamicFeatures,
        props: {
          title: "Express More with",
          subtitle: `Transform your workflow with powerful ${title.toLowerCase()} features designed for modern teams and professionals.`,
          features: [
            {
              icon: Zap,
              title: "Lightning Fast",
              description: "Experience blazing-fast performance with optimized algorithms and cloud infrastructure."
            },
            {
              icon: Shield,
              title: "Enterprise Security",
              description: "Bank-level encryption and security features to protect your data and communications."
            },
            {
              icon: Users,
              title: "Team Collaboration",
              description: "Work together seamlessly with real-time collaboration tools and shared workspaces."
            },
            {
              icon: Settings,
              title: "Advanced Controls",
              description: "Customize your experience with powerful settings and configuration options."
            },
            {
              icon: BarChart3,
              title: "Analytics & Insights",
              description: "Track performance and gain insights with detailed analytics and reporting."
            },
            {
              icon: CheckCircle,
              title: "Easy Integration",
              description: "Integrate seamlessly with your existing tools and workflows."
            }
          ],
          demoTitle: `See ${title} in Action`,
          demoDescription: `Experience the power of our ${title.toLowerCase()} technology with this interactive demo.`,
          demoFeatures: ["Advanced features", "Seamless integration", "Professional tools"]
        }
      },
      {
        component: DynamicBenefits,
        props: {
          title: `How ${title} Can`,
          subtitle: `Discover the powerful benefits that ${title.toLowerCase()} brings to modern businesses and how it can revolutionize your workflow.`,
          benefits: [
            {
              icon: TrendingUp,
              title: "Increased Productivity",
              description: "Streamline your workflow and boost team productivity with efficient tools and automation."
            },
            {
              icon: Globe,
              title: "Global Reach",
              description: "Connect with team members and clients worldwide without geographical limitations."
            },
            {
              icon: Users,
              title: "Better Collaboration",
              description: "Improve team collaboration with real-time communication and shared resources."
            },
            {
              icon: Clock,
              title: "Time Savings",
              description: "Save valuable time with automated processes and efficient workflows."
            },
            {
              icon: DollarSign,
              title: "Cost Reduction",
              description: "Reduce operational costs while maintaining high-quality service and features."
            },
            {
              icon: Target,
              title: "Improved Outcomes",
              description: "Achieve better results with data-driven insights and optimized processes."
            }
          ],
          statsTitle: `${title} Impact`,
          statsSubtitle: "Real numbers from businesses using our technology",
          useCasesTitle: "Popular Use Cases",
          useCases: [
            { title: "Team Collaboration", description: "Enhance team collaboration with shared tools and real-time communication." },
            { title: "Project Management", description: "Manage projects efficiently with integrated tools and automated workflows." },
            { title: "Client Communication", description: "Improve client communication with professional tools and seamless integration." },
            { title: "Remote Work", description: "Support remote work with cloud-based tools and mobile accessibility." },
            { title: "Business Operations", description: "Streamline business operations with automated processes and analytics." },
            { title: "Data Management", description: "Manage data effectively with secure storage and advanced analytics." }
          ]
        }
      },
      {
        component: DynamicFAQ,
        props: {
          subtitle: `Get answers to common questions about ${title.toLowerCase()} technology, features, and how it can benefit your team.`,
          faqs: [
            {
              question: `What is ${title}?`,
              answer: `${title} is a powerful tool designed to enhance your workflow and improve team collaboration with advanced features and seamless integration.`
            },
            {
              question: "How secure is the platform?",
              answer: "Our platform uses enterprise-grade encryption and security features to protect your data and ensure privacy."
            },
            {
              question: "Can I integrate with other tools?",
              answer: "Yes, our platform offers seamless integration with popular tools and services to enhance your workflow."
            },
            {
              question: "What devices are supported?",
              answer: "Our platform works across all major devices including desktop computers, laptops, tablets, and smartphones."
            },
            {
              question: "Is there a free trial available?",
              answer: "Yes, we offer a free trial so you can experience the full power of our platform before making a decision."
            }
          ]
        }
      },
      {
        component: DynamicGetStarted,
        props: {
          title: `Get Started with ${title} Today`,
          subtitle: "Join thousands of users who are already transforming their workflow with our powerful technology.",
          mainCtaTitle: "Ready to Get Started?",
          mainCtaSubtitle: "Download our app and begin your journey in minutes",
          primaryCtaText: "Download App",
          platforms: [
            {
              icon: Monitor,
              name: "Desktop",
              description: "Windows, macOS, Linux",
              features: ["Full features", "Advanced controls", "Desktop optimization"]
            },
            {
              icon: Smartphone,
              name: "Mobile",
              description: "iOS, Android",
              features: ["Mobile optimized", "Touch controls", "Push notifications"]
            },
            {
              icon: Tablet,
              name: "Tablet",
              description: "iPad, Android tablets",
              features: ["Large screen support", "Touch controls", "Portrait mode"]
            }
          ],
          finalCtaTitle: "Transform Your Workflow Today",
          finalCtaSubtitle: "Experience the power of seamless integration and take your productivity to the next level"
        }
      }
    ]
  }
}

export const featuresPagesData = {
  'screen-sharing': {
    sections: [
      {
        component: DynamicHero,
        props: {
          bannerText: "New Screen Sharing Premium - AI-powered collaboration for intelligent presentations",
          title: "Screen Sharing",
          subtitle: "Share your screen seamlessly, collaborate in real-time, and present with confidence from anywhere with our advanced screen sharing technology.",
          primaryCtaText: "Start Sharing Now",
          secondaryCtaText: "Watch Demo",
          stats: [
            { value: "15M+", label: "Screens Shared" },
            { value: "4K", label: "Quality Support" },
            { value: "99.9%", label: "Reliability" },
            { value: "24/7", label: "Support" }
          ]
        }
      },
      {
        component: DynamicFeatures,
        props: {
          title: "Express More with",
          subtitle: "Transform your presentations and collaborations with powerful screen sharing features designed for modern teams and professionals.",
          features: [
            {
              icon: Monitor,
              title: "Present with confidence",
              description: "Share your screen with crystal-clear quality and real-time collaboration tools that make presentations engaging and interactive."
            },
            {
              icon: Users,
              title: "Collaborate seamlessly",
              description: "Enable multiple participants to view and interact with your shared content, fostering better teamwork and communication."
            },
            {
              icon: Shield,
              title: "Secure sharing",
              description: "Advanced security features ensure your sensitive information stays protected during screen sharing sessions."
            },
            {
              icon: Zap,
              title: "Lightning fast",
              description: "Ultra-low latency screen sharing with adaptive quality that works perfectly on any connection speed."
            },
            {
              icon: Eye,
              title: "Selective sharing",
              description: "Choose to share your entire screen, specific applications, or just a portion of your screen for focused presentations."
            },
            {
              icon: Share2,
              title: "Remote control",
              description: "Grant temporary control to participants for collaborative editing and troubleshooting sessions."
            },
            {
              icon: Settings,
              title: "Advanced controls",
              description: "Fine-tune your sharing experience with customizable settings for quality, permissions, and access controls."
            },
            {
              icon: BarChart3,
              title: "Analytics & insights",
              description: "Track engagement, viewership, and interaction metrics to improve your presentation effectiveness."
            }
          ],
          demoTitle: "See Screen Sharing in Action",
          demoDescription: "Experience the power of our screen sharing technology with this interactive demo. See how easy it is to share your screen and collaborate with your team.",
          demoFeatures: ["Real-time collaboration", "4K quality support", "Cross-platform compatibility"]
        }
      },
      {
        component: DynamicBenefits,
        props: {
          title: "How Screen Sharing Can",
          subtitle: "Discover the powerful benefits that screen sharing brings to modern businesses and how it can revolutionize your team's collaboration and productivity.",
          benefits: [
            {
              icon: TrendingUp,
              title: "Increased Productivity",
              description: "Screen sharing eliminates the need for lengthy explanations and enables real-time collaboration, boosting team productivity by up to 40%."
            },
            {
              icon: Globe,
              title: "Global Collaboration",
              description: "Connect with team members worldwide instantly, breaking down geographical barriers and enabling seamless remote work."
            },
            {
              icon: Users,
              title: "Better Communication",
              description: "Visual communication through screen sharing reduces misunderstandings and ensures everyone is on the same page."
            },
            {
              icon: Clock,
              title: "Time Savings",
              description: "Save hours of travel time and meeting setup with instant screen sharing capabilities from anywhere."
            },
            {
              icon: DollarSign,
              title: "Cost Reduction",
              description: "Reduce travel costs, meeting expenses, and infrastructure costs while maintaining high-quality collaboration."
            },
            {
              icon: Target,
              title: "Improved Focus",
              description: "Keep everyone focused on the same content with synchronized screen sharing and real-time annotations."
            }
          ],
          statsTitle: "Screen Sharing Impact",
          statsSubtitle: "Real numbers from businesses using our screen sharing technology",
          useCasesTitle: "Popular Use Cases",
          useCases: [
            { title: "Remote Training", description: "Conduct interactive training sessions with screen sharing, allowing trainees to see exactly what you're doing." },
            { title: "Sales Presentations", description: "Share product demos and presentations with prospects in real-time, increasing engagement and conversion rates." },
            { title: "Technical Support", description: "Provide remote technical support by viewing and controlling users' screens to resolve issues quickly." },
            { title: "Design Reviews", description: "Collaborate on design projects with real-time feedback and annotations on shared screens." },
            { title: "Code Reviews", description: "Conduct thorough code reviews with team members by sharing your development environment." },
            { title: "Virtual Meetings", description: "Enhance virtual meetings with visual content sharing for better engagement and understanding." }
          ]
        }
      },
      {
        component: DynamicFAQ,
        props: {
          subtitle: "Get answers to common questions about screen sharing technology, features, and how it can benefit your team.",
          faqs: [
            {
              question: "What is screen sharing?",
              answer: "Screen sharing is a technology that allows you to display your computer screen to other people in real-time over the internet. It enables you to show presentations, demonstrate software, collaborate on documents, and provide remote technical support."
            },
            {
              question: "What are the advantages of screen sharing?",
              answer: "Screen sharing offers numerous benefits including improved communication through visual aids, increased productivity by eliminating travel time, cost savings on meetings and travel, better collaboration for remote teams, enhanced training capabilities, and more effective sales presentations."
            },
            {
              question: "How secure is screen sharing?",
              answer: "Our screen sharing technology uses enterprise-grade encryption to protect your data. We implement secure authentication, encrypted data transmission, and provide controls to manage who can view your screen. You can also set permissions to prevent unauthorized access."
            },
            {
              question: "What devices support screen sharing?",
              answer: "Our screen sharing solution works across all major platforms including Windows, macOS, Linux, iOS, and Android. You can share your screen from desktop computers, laptops, tablets, and smartphones with full compatibility."
            },
            {
              question: "Can I control who sees my screen?",
              answer: "Yes, you have complete control over your screen sharing sessions. You can invite specific participants, set viewing permissions, revoke access at any time, and choose to share only specific applications or portions of your screen."
            }
          ]
        }
      },
      {
        component: DynamicGetStarted,
        props: {
          title: "Get Started with Screen Sharing Today",
          subtitle: "Join millions of users who are already transforming their collaboration with our powerful screen sharing technology.",
          mainCtaTitle: "Ready to Start Sharing?",
          mainCtaSubtitle: "Download our app and begin your first screen sharing session in minutes",
          primaryCtaText: "Download App",
          platforms: [
            {
              icon: Monitor,
              name: "Desktop",
              description: "Windows, macOS, Linux",
              features: ["Full screen sharing", "Application sharing", "Remote control"]
            },
            {
              icon: Smartphone,
              name: "Mobile",
              description: "iOS, Android",
              features: ["Screen mirroring", "Camera sharing", "Touch annotations"]
            },
            {
              icon: Tablet,
              name: "Tablet",
              description: "iPad, Android tablets",
              features: ["Large screen support", "Pen annotations", "Multi-touch gestures"]
            }
          ],
          finalCtaTitle: "Transform Your Collaboration Today",
          finalCtaSubtitle: "Experience the power of seamless screen sharing and take your team's productivity to the next level"
        }
      }
    ]
  },
  'online-meetings': {
    sections: [
      {
        component: DynamicHero,
        props: {
          bannerText: "New Online Meetings Premium - AI-powered collaboration for intelligent meetings",
          title: "Online Meetings",
          subtitle: "Host professional meetings from anywhere with crystal-clear video, advanced collaboration tools, and seamless integration across all devices.",
          primaryCtaText: "Start Meeting Now",
          secondaryCtaText: "Watch Demo",
          stats: [
            { value: "50M+", label: "Meetings Hosted" },
            { value: "4K", label: "Video Quality" },
            { value: "99.9%", label: "Reliability" },
            { value: "24/7", label: "Support" }
          ]
        }
      },
      {
        component: DynamicFeatures,
        props: {
          title: "Express More with",
          subtitle: "Transform your meetings with powerful online meeting features designed for modern teams and professionals.",
          features: [
            {
              icon: Video,
              title: "HD Video Conferencing",
              description: "Crystal clear video calls with adaptive quality that works perfectly on any connection speed."
            },
            {
              icon: Users,
              title: "Large Meeting Support",
              description: "Host meetings with up to 1000 participants with advanced moderation and management tools."
            },
            {
              icon: Shield,
              title: "Enterprise Security",
              description: "Bank-level encryption and security features to protect your sensitive meeting content."
            },
            {
              icon: Zap,
              title: "Instant Join",
              description: "Join meetings instantly with one-click access and no downloads required for participants."
            },
            {
              icon: CheckCircle,
              title: "Meeting Recording",
              description: "Record your meetings automatically with cloud storage and easy sharing capabilities."
            },
            {
              icon: Settings,
              title: "Advanced Controls",
              description: "Manage participants, control permissions, and customize your meeting experience."
            },
            {
              icon: BarChart3,
              title: "Meeting Analytics",
              description: "Track attendance, engagement, and meeting effectiveness with detailed analytics."
            },
            {
              icon: Lock,
              title: "Privacy Controls",
              description: "Control who can join, mute participants, and manage meeting privacy settings."
            }
          ],
          demoTitle: "See Online Meetings in Action",
          demoDescription: "Experience the power of our online meeting technology with this interactive demo. See how easy it is to host professional meetings.",
          demoFeatures: ["HD video quality", "Large participant support", "Advanced security"]
        }
      },
      {
        component: DynamicBenefits,
        props: {
          title: "How Online Meetings Can",
          subtitle: "Discover the powerful benefits that online meetings bring to modern businesses and how they can revolutionize your team's communication.",
          benefits: [
            {
              icon: TrendingUp,
              title: "Increased Efficiency",
              description: "Online meetings eliminate travel time and enable instant collaboration, boosting team efficiency by up to 50%."
            },
            {
              icon: Globe,
              title: "Global Reach",
              description: "Connect with team members, clients, and partners worldwide without geographical limitations."
            },
            {
              icon: Users,
              title: "Better Engagement",
              description: "Interactive features and visual communication improve engagement and participation in meetings."
            },
            {
              icon: Clock,
              title: "Time Optimization",
              description: "Schedule and join meetings instantly, reducing setup time and increasing productivity."
            },
            {
              icon: DollarSign,
              title: "Cost Savings",
              description: "Eliminate travel costs, meeting room expenses, and infrastructure costs while maintaining quality."
            },
            {
              icon: Target,
              title: "Improved Outcomes",
              description: "Better collaboration tools lead to more productive meetings and better decision-making."
            }
          ],
          statsTitle: "Online Meeting Impact",
          statsSubtitle: "Real numbers from businesses using our online meeting technology",
          useCasesTitle: "Popular Use Cases",
          useCases: [
            { title: "Team Standups", description: "Daily team meetings with video conferencing for better engagement and communication." },
            { title: "Client Presentations", description: "Professional presentations with screen sharing and interactive features." },
            { title: "Training Sessions", description: "Interactive training with recording capabilities and participant engagement tools." },
            { title: "Board Meetings", description: "Secure board meetings with advanced privacy controls and recording features." },
            { title: "Sales Calls", description: "Professional sales calls with presentation tools and follow-up capabilities." },
            { title: "Remote Interviews", description: "Conduct interviews remotely with high-quality video and recording features." }
          ]
        }
      },
      {
        component: DynamicFAQ,
        props: {
          subtitle: "Get answers to common questions about online meeting technology, features, and how it can benefit your team.",
          faqs: [
            {
              question: "What is an online meeting?",
              answer: "An online meeting is a virtual gathering that allows participants to connect via video, audio, and chat from anywhere in the world. It enables real-time collaboration, presentations, and discussions without the need for physical presence."
            },
            {
              question: "How many people can join an online meeting?",
              answer: "Our online meeting solution supports up to 1000 participants depending on your plan. Free users can host meetings with up to 100 participants, while premium plans offer larger capacity."
            },
            {
              question: "What internet speed do I need for online meetings?",
              answer: "For optimal experience, we recommend a minimum of 1 Mbps upload and download speed. Our adaptive technology automatically adjusts quality based on your connection to ensure smooth meetings."
            },
            {
              question: "Can I record online meetings?",
              answer: "Yes, you can record your online meetings for later review, training purposes, or documentation. Recordings are saved securely and can be shared with team members."
            },
            {
              question: "Is it secure to host online meetings?",
              answer: "Our online meeting platform uses enterprise-grade encryption and security features. You can set passwords, waiting rooms, and control participant access to ensure meeting security."
            }
          ]
        }
      },
      {
        component: DynamicGetStarted,
        props: {
          title: "Get Started with Online Meetings Today",
          subtitle: "Join millions of users who are already transforming their communication with our powerful online meeting technology.",
          mainCtaTitle: "Ready to Start Meeting?",
          mainCtaSubtitle: "Download our app and begin your first online meeting in minutes",
          primaryCtaText: "Download App",
          platforms: [
            {
              icon: Monitor,
              name: "Desktop",
              description: "Windows, macOS, Linux",
              features: ["Full meeting features", "Screen sharing", "Advanced controls"]
            },
            {
              icon: Smartphone,
              name: "Mobile",
              description: "iOS, Android",
              features: ["Mobile optimized", "Camera sharing", "Touch controls"]
            },
            {
              icon: Tablet,
              name: "Tablet",
              description: "iPad, Android tablets",
              features: ["Large screen support", "Pen annotations", "Multi-touch gestures"]
            }
          ],
          finalCtaTitle: "Transform Your Meetings Today",
          finalCtaSubtitle: "Experience the power of seamless online meetings and take your team's communication to the next level"
        }
      }
    ]
  },
  'video-conferencing': {
    sections: [
      {
        component: DynamicHero,
        props: {
          bannerText: "New Video Conferencing Premium - AI-powered collaboration for intelligent video calls",
          title: "Video Conferencing",
          subtitle: "Connect with anyone, anywhere, anytime with crystal-clear video quality and advanced collaboration features.",
          primaryCtaText: "Start Video Call",
          secondaryCtaText: "Watch Demo",
          stats: [
            { value: "25M+", label: "Video Calls" },
            { value: "4K", label: "Video Quality" },
            { value: "99.9%", label: "Reliability" },
            { value: "24/7", label: "Support" }
          ]
        }
      },
      {
        component: DynamicFeatures,
        props: {
          title: "Express More with",
          subtitle: "Transform your video calls with powerful conferencing features designed for modern teams and professionals.",
          features: [
            {
              icon: Video,
              title: "HD Video Quality",
              description: "Crystal clear video calls with adaptive quality that works perfectly on any connection speed."
            },
            {
              icon: Users,
              title: "Group Video Calls",
              description: "Host video calls with up to 1000 participants with advanced moderation and management tools."
            },
            {
              icon: Shield,
              title: "Secure Calls",
              description: "Bank-level encryption and security features to protect your sensitive video conversations."
            },
            {
              icon: Zap,
              title: "Instant Connection",
              description: "Join video calls instantly with one-click access and no downloads required for participants."
            },
            {
              icon: CheckCircle,
              title: "Call Recording",
              description: "Record your video calls automatically with cloud storage and easy sharing capabilities."
            },
            {
              icon: Settings,
              title: "Advanced Controls",
              description: "Manage participants, control permissions, and customize your video call experience."
            },
            {
              icon: BarChart3,
              title: "Call Analytics",
              description: "Track attendance, engagement, and call effectiveness with detailed analytics."
            },
            {
              icon: Lock,
              title: "Privacy Controls",
              description: "Control who can join, mute participants, and manage call privacy settings."
            }
          ],
          demoTitle: "See Video Conferencing in Action",
          demoDescription: "Experience the power of our video conferencing technology with this interactive demo.",
          demoFeatures: ["HD video quality", "Large participant support", "Advanced security"]
        }
      },
      {
        component: DynamicBenefits,
        props: {
          title: "How Video Conferencing Can",
          subtitle: "Discover the powerful benefits that video conferencing brings to modern businesses and how it can revolutionize your team's communication.",
          benefits: [
            {
              icon: TrendingUp,
              title: "Increased Productivity",
              description: "Video conferencing enables face-to-face communication without travel, boosting team productivity by up to 40%."
            },
            {
              icon: Globe,
              title: "Global Collaboration",
              description: "Connect with team members worldwide instantly, breaking down geographical barriers."
            },
            {
              icon: Users,
              title: "Better Communication",
              description: "Visual communication through video calls reduces misunderstandings and builds stronger relationships."
            },
            {
              icon: Clock,
              title: "Time Savings",
              description: "Save hours of travel time with instant video conferencing capabilities from anywhere."
            },
            {
              icon: DollarSign,
              title: "Cost Reduction",
              description: "Reduce travel costs, meeting expenses, and infrastructure costs while maintaining quality."
            },
            {
              icon: Target,
              title: "Improved Engagement",
              description: "Face-to-face video calls increase engagement and participation in meetings and discussions."
            }
          ],
          statsTitle: "Video Conferencing Impact",
          statsSubtitle: "Real numbers from businesses using our video conferencing technology",
          useCasesTitle: "Popular Use Cases",
          useCases: [
            { title: "Team Meetings", description: "Regular team meetings with video conferencing for better engagement." },
            { title: "Client Calls", description: "Professional client calls with high-quality video and screen sharing." },
            { title: "Training Sessions", description: "Interactive training with video conferencing and recording capabilities." },
            { title: "Interviews", description: "Remote interviews with high-quality video and professional features." },
            { title: "Sales Calls", description: "Professional sales calls with presentation tools and follow-up capabilities." },
            { title: "Board Meetings", description: "Secure board meetings with advanced privacy controls and recording." }
          ]
        }
      },
      {
        component: DynamicFAQ,
        props: {
          subtitle: "Get answers to common questions about video conferencing technology, features, and how it can benefit your team.",
          faqs: [
            {
              question: "What is video conferencing?",
              answer: "Video conferencing is a technology that allows people to conduct face-to-face meetings over the internet using video and audio. It enables real-time communication and collaboration without physical presence."
            },
            {
              question: "How many people can join a video call?",
              answer: "You can host video calls with up to 1000 participants depending on your plan. Free users can host calls with up to 100 participants, while premium plans offer larger capacity."
            },
            {
              question: "What internet speed do I need for video calls?",
              answer: "For optimal experience, we recommend a minimum of 1 Mbps upload and download speed. Our adaptive technology automatically adjusts quality based on your connection."
            },
            {
              question: "Can I record video calls?",
              answer: "Yes, you can record your video calls for later review, training purposes, or documentation. Recordings are saved securely and can be shared with team members."
            },
            {
              question: "Is video conferencing secure?",
              answer: "Our video conferencing platform uses enterprise-grade encryption and security features. You can set passwords, waiting rooms, and control participant access."
            }
          ]
        }
      },
      {
        component: DynamicGetStarted,
        props: {
          title: "Get Started with Video Conferencing Today",
          subtitle: "Join millions of users who are already transforming their communication with our powerful video conferencing technology.",
          mainCtaTitle: "Ready to Start Video Calling?",
          mainCtaSubtitle: "Download our app and begin your first video call in minutes",
          primaryCtaText: "Download App",
          platforms: [
            {
              icon: Monitor,
              name: "Desktop",
              description: "Windows, macOS, Linux",
              features: ["Full video features", "Screen sharing", "Advanced controls"]
            },
            {
              icon: Smartphone,
              name: "Mobile",
              description: "iOS, Android",
              features: ["Mobile optimized", "Camera sharing", "Touch controls"]
            },
            {
              icon: Tablet,
              name: "Tablet",
              description: "iPad, Android tablets",
              features: ["Large screen support", "Pen annotations", "Multi-touch gestures"]
            }
          ],
          finalCtaTitle: "Transform Your Communication Today",
          finalCtaSubtitle: "Experience the power of seamless video conferencing and take your team's communication to the next level"
        }
      }
    ]
  },
  'instant-messaging': {
    sections: [
      {
        component: DynamicHero,
        props: {
          bannerText: "New Instant Messaging Premium - AI-powered collaboration for intelligent chat",
          title: "Instant Messaging",
          subtitle: "Real-time communication for teams with advanced features, file sharing, and seamless integration across all devices.",
          primaryCtaText: "Start Chatting",
          secondaryCtaText: "Watch Demo",
          stats: [
            { value: "100M+", label: "Messages Sent" },
            { value: "Real-time", label: "Delivery" },
            { value: "99.9%", label: "Reliability" },
            { value: "24/7", label: "Support" }
          ]
        }
      },
      {
        component: DynamicFeatures,
        props: {
          title: "Express More with",
          subtitle: "Transform your team communication with powerful instant messaging features designed for modern teams and professionals.",
          features: [
            {
              icon: MessageCircle,
              title: "Real-time Chat",
              description: "Instant messaging with read receipts, typing indicators, and real-time notifications."
            },
            {
              icon: FileText,
              title: "File Sharing",
              description: "Share documents, images, and files instantly with drag-and-drop functionality."
            },
            {
              icon: Shield,
              title: "Secure Messaging",
              description: "End-to-end encryption and security features to protect your sensitive conversations."
            },
            {
              icon: Zap,
              title: "Instant Delivery",
              description: "Messages are delivered instantly with push notifications across all devices."
            },
            {
              icon: Users,
              title: "Group Chats",
              description: "Create unlimited group chats with team members for better collaboration."
            },
            {
              icon: Search,
              title: "Message Search",
              description: "Find any message with powerful search capabilities and filters."
            },
            {
              icon: Settings,
              title: "Advanced Controls",
              description: "Manage conversations, control permissions, and customize your chat experience."
            },
            {
              icon: BarChart3,
              title: "Chat Analytics",
              description: "Track engagement, response times, and communication effectiveness."
            }
          ],
          demoTitle: "See Instant Messaging in Action",
          demoDescription: "Experience the power of our instant messaging technology with this interactive demo.",
          demoFeatures: ["Real-time delivery", "File sharing", "Advanced security"]
        }
      },
      {
        component: DynamicBenefits,
        props: {
          title: "How Instant Messaging Can",
          subtitle: "Discover the powerful benefits that instant messaging brings to modern businesses and how it can revolutionize your team's communication.",
          benefits: [
            {
              icon: TrendingUp,
              title: "Increased Efficiency",
              description: "Instant messaging enables quick communication and decision-making, boosting team efficiency by up to 30%."
            },
            {
              icon: Globe,
              title: "Global Communication",
              description: "Connect with team members worldwide instantly, regardless of time zones or locations."
            },
            {
              icon: Users,
              title: "Better Collaboration",
              description: "Real-time messaging fosters better collaboration and keeps everyone informed and connected."
            },
            {
              icon: Clock,
              title: "Time Savings",
              description: "Quick questions and answers save time compared to emails or phone calls."
            },
            {
              icon: DollarSign,
              title: "Cost Reduction",
              description: "Reduce communication costs while maintaining high-quality team collaboration."
            },
            {
              icon: Target,
              title: "Improved Engagement",
              description: "Instant messaging increases team engagement and participation in discussions."
            }
          ],
          statsTitle: "Instant Messaging Impact",
          statsSubtitle: "Real numbers from businesses using our instant messaging technology",
          useCasesTitle: "Popular Use Cases",
          useCases: [
            { title: "Team Communication", description: "Daily team communication with instant messaging for quick updates and discussions." },
            { title: "Project Collaboration", description: "Project teams using instant messaging for real-time collaboration and updates." },
            { title: "Customer Support", description: "Quick customer support with instant messaging and file sharing capabilities." },
            { title: "Remote Work", description: "Remote teams staying connected with instant messaging and video calls." },
            { title: "Sales Teams", description: "Sales teams using instant messaging for quick updates and client communication." },
            { title: "Emergency Communication", description: "Emergency communication with instant messaging for urgent updates." }
          ]
        }
      },
      {
        component: DynamicFAQ,
        props: {
          subtitle: "Get answers to common questions about instant messaging technology, features, and how it can benefit your team.",
          faqs: [
            {
              question: "What is instant messaging?",
              answer: "Instant messaging is a form of real-time communication that allows users to send and receive text messages instantly over the internet. It enables quick, efficient communication between team members."
            },
            {
              question: "Can I search through old messages?",
              answer: "Yes, our powerful search feature lets you find any message instantly. You can search by keywords, date, sender, or conversation."
            },
            {
              question: "Are messages encrypted?",
              answer: "All messages are end-to-end encrypted for maximum security. We implement enterprise-grade encryption to protect your conversations."
            },
            {
              question: "Can I create group chats?",
              answer: "Yes, you can create unlimited group chats with team members. Group chats support file sharing, reactions, and advanced moderation features."
            },
            {
              question: "What devices support instant messaging?",
              answer: "Our instant messaging solution works across all major platforms including Windows, macOS, Linux, iOS, and Android."
            }
          ]
        }
      },
      {
        component: DynamicGetStarted,
        props: {
          title: "Get Started with Instant Messaging Today",
          subtitle: "Join millions of users who are already transforming their communication with our powerful instant messaging technology.",
          mainCtaTitle: "Ready to Start Chatting?",
          mainCtaSubtitle: "Download our app and begin your first conversation in minutes",
          primaryCtaText: "Download App",
          platforms: [
            {
              icon: Monitor,
              name: "Desktop",
              description: "Windows, macOS, Linux",
              features: ["Full messaging features", "File sharing", "Advanced controls"]
            },
            {
              icon: Smartphone,
              name: "Mobile",
              description: "iOS, Android",
              features: ["Mobile optimized", "Push notifications", "Touch controls"]
            },
            {
              icon: Tablet,
              name: "Tablet",
              description: "iPad, Android tablets",
              features: ["Large screen support", "Pen annotations", "Multi-touch gestures"]
            }
          ],
          finalCtaTitle: "Transform Your Communication Today",
          finalCtaSubtitle: "Experience the power of seamless instant messaging and take your team's communication to the next level"
        }
      }
    ]
  },
  'custom-backgrounds': {
    sections: [
      {
        component: DynamicHero,
        props: {
          bannerText: "New Custom Backgrounds Premium - AI-powered backgrounds for professional meetings",
          title: "Custom Backgrounds",
          subtitle: "Transform your video calls with professional, AI-powered custom backgrounds that enhance your presence and maintain privacy.",
          primaryCtaText: "Try Backgrounds",
          secondaryCtaText: "Watch Demo",
          stats: [
            { value: "1000+", label: "Backgrounds" },
            { value: "AI", label: "Powered" },
            { value: "99.9%", label: "Reliability" },
            { value: "24/7", label: "Support" }
          ]
        }
      },
      {
        component: DynamicFeatures,
        props: {
          title: "Express More with",
          subtitle: "Transform your video calls with powerful custom background features designed for modern professionals.",
          features: [
            {
              icon: Eye,
              title: "AI Background Removal",
              description: "Advanced AI technology automatically removes and replaces your background with professional alternatives."
            },
            {
              icon: Settings,
              title: "Custom Uploads",
              description: "Upload your own images or company logos to create personalized backgrounds for your brand."
            },
            {
              icon: Shield,
              title: "Privacy Protection",
              description: "Keep your personal space private with automatic background blurring and replacement."
            },
            {
              icon: Zap,
              title: "Real-time Processing",
              description: "Instant background changes with no lag or delay during your video calls."
            },
            {
              icon: Users,
              title: "Professional Appearance",
              description: "Maintain a professional appearance regardless of your physical environment."
            },
            {
              icon: CheckCircle,
              title: "Easy Setup",
              description: "One-click background selection and automatic optimization for your lighting conditions."
            }
          ],
          demoTitle: "See Custom Backgrounds in Action",
          demoDescription: "Experience the power of our custom background technology with this interactive demo.",
          demoFeatures: ["AI background removal", "Custom uploads", "Real-time processing"]
        }
      },
      {
        component: DynamicBenefits,
        props: {
          title: "How Custom Backgrounds Can",
          subtitle: "Discover the powerful benefits that custom backgrounds bring to modern professionals and how they can enhance your video presence.",
          benefits: [
            {
              icon: TrendingUp,
              title: "Professional Image",
              description: "Maintain a professional appearance regardless of your physical environment or location."
            },
            {
              icon: Shield,
              title: "Privacy Protection",
              description: "Keep your personal space private and protect sensitive information visible in your background."
            },
            {
              icon: Users,
              title: "Brand Consistency",
              description: "Use company-branded backgrounds to maintain consistent brand presence across all video calls."
            },
            {
              icon: Target,
              title: "Better Focus",
              description: "Eliminate distractions and keep participants focused on your content and message."
            },
            {
              icon: CheckCircle,
              title: "Confidence Boost",
              description: "Feel more confident and professional during important video calls and presentations."
            },
            {
              icon: Globe,
              title: "Global Accessibility",
              description: "Join professional meetings from anywhere while maintaining a consistent, professional appearance."
            }
          ],
          statsTitle: "Custom Backgrounds Impact",
          statsSubtitle: "Real numbers from professionals using our custom background technology",
          useCasesTitle: "Popular Use Cases",
          useCases: [
            { title: "Remote Work", description: "Maintain professional appearance while working from home or remote locations." },
            { title: "Client Meetings", description: "Use branded backgrounds for client presentations and meetings." },
            { title: "Job Interviews", description: "Create a professional environment for remote job interviews." },
            { title: "Team Meetings", description: "Use consistent backgrounds for internal team meetings and presentations." },
            { title: "Webinars", description: "Enhance webinar presentations with professional, branded backgrounds." },
            { title: "Sales Calls", description: "Maintain professional appearance during sales calls and demos." }
          ]
        }
      },
      {
        component: DynamicFAQ,
        props: {
          subtitle: "Get answers to common questions about custom backgrounds, features, and how they can enhance your video calls.",
          faqs: [
            {
              question: "What are custom backgrounds?",
              answer: "Custom backgrounds are virtual backgrounds that replace your real background during video calls. They can be professional images, company logos, or any image you choose to upload."
            },
            {
              question: "How does AI background removal work?",
              answer: "Our AI technology analyzes your video feed in real-time, identifies your person, and automatically removes the background, replacing it with your chosen custom background."
            },
            {
              question: "Can I upload my own backgrounds?",
              answer: "Yes, you can upload your own images, company logos, or any image you want to use as a background. We support common image formats like JPG, PNG, and GIF."
            },
            {
              question: "Do custom backgrounds work on all devices?",
              answer: "Custom backgrounds work on desktop computers and laptops. Mobile devices may have limited support depending on the device capabilities and operating system."
            },
            {
              question: "Are custom backgrounds secure?",
              answer: "Yes, all background processing happens locally on your device, and we don't store or transmit your background images to our servers."
            }
          ]
        }
      },
      {
        component: DynamicGetStarted,
        props: {
          title: "Get Started with Custom Backgrounds Today",
          subtitle: "Join millions of professionals who are already enhancing their video presence with our powerful custom background technology.",
          mainCtaTitle: "Ready to Transform Your Background?",
          mainCtaSubtitle: "Download our app and start using custom backgrounds in minutes",
          primaryCtaText: "Download App",
          platforms: [
            {
              icon: Monitor,
              name: "Desktop",
              description: "Windows, macOS, Linux",
              features: ["Full background features", "Custom uploads", "AI processing"]
            },
            {
              icon: Smartphone,
              name: "Mobile",
              description: "iOS, Android",
              features: ["Basic backgrounds", "Built-in options", "Touch controls"]
            },
            {
              icon: Tablet,
              name: "Tablet",
              description: "iPad, Android tablets",
              features: ["Large screen support", "Touch controls", "Portrait mode"]
            }
          ],
          finalCtaTitle: "Transform Your Video Presence Today",
          finalCtaSubtitle: "Experience the power of professional custom backgrounds and take your video calls to the next level"
        }
      }
    ]
  },
  'webinars': {
    sections: [
      {
        component: DynamicHero,
        props: {
          bannerText: "New Webinars Premium - AI-powered hosting for intelligent webinars",
          title: "Webinars",
          subtitle: "Host professional webinars with advanced features, interactive tools, and seamless audience engagement for up to 10,000 participants.",
          primaryCtaText: "Start Webinar",
          secondaryCtaText: "Watch Demo",
          stats: [
            { value: "10K+", label: "Participants" },
            { value: "4K", label: "Quality" },
            { value: "99.9%", label: "Reliability" },
            { value: "24/7", label: "Support" }
          ]
        }
      },
      {
        component: DynamicFeatures,
        props: {
          title: "Express More with",
          subtitle: "Transform your webinars with powerful hosting features designed for modern businesses and educators.",
          features: [
            {
              icon: Users,
              title: "Large Audience Support",
              description: "Host webinars with up to 10,000 participants with advanced moderation and management tools."
            },
            {
              icon: Video,
              title: "HD Video Quality",
              description: "Crystal clear video with adaptive quality that works perfectly for large audiences."
            },
            {
              icon: Shield,
              title: "Secure Webinars",
              description: "Bank-level encryption and security features to protect your webinar content."
            },
            {
              icon: BarChart3,
              title: "Advanced Analytics",
              description: "Track attendance, engagement, and webinar effectiveness with detailed analytics."
            },
            {
              icon: Settings,
              title: "Moderation Tools",
              description: "Advanced moderation tools to manage large audiences and maintain webinar quality."
            },
            {
              icon: CheckCircle,
              title: "Recording & Playback",
              description: "Record your webinars automatically with cloud storage and easy sharing capabilities."
            }
          ],
          demoTitle: "See Webinars in Action",
          demoDescription: "Experience the power of our webinar technology with this interactive demo.",
          demoFeatures: ["Large audience support", "HD video quality", "Advanced analytics"]
        }
      },
      {
        component: DynamicBenefits,
        props: {
          title: "How Webinars Can",
          subtitle: "Discover the powerful benefits that webinars bring to modern businesses and how they can revolutionize your audience engagement.",
          benefits: [
            {
              icon: TrendingUp,
              title: "Increased Reach",
              description: "Reach thousands of participants simultaneously without geographical limitations."
            },
            {
              icon: Globe,
              title: "Global Audience",
              description: "Connect with audiences worldwide and expand your reach beyond local markets."
            },
            {
              icon: Users,
              title: "Better Engagement",
              description: "Interactive features and visual content improve audience engagement and retention."
            },
            {
              icon: DollarSign,
              title: "Cost Savings",
              description: "Eliminate venue costs, travel expenses, and infrastructure costs while reaching larger audiences."
            },
            {
              icon: Target,
              title: "Lead Generation",
              description: "Generate leads and build your audience through professional webinar presentations."
            },
            {
              icon: BarChart3,
              title: "Measurable Results",
              description: "Track attendance, engagement, and conversion rates with detailed analytics."
            }
          ],
          statsTitle: "Webinar Impact",
          statsSubtitle: "Real numbers from businesses using our webinar technology",
          useCasesTitle: "Popular Use Cases",
          useCases: [
            { title: "Product Launches", description: "Launch new products to large audiences with interactive demonstrations." },
            { title: "Training Programs", description: "Conduct training sessions for employees, partners, or customers." },
            { title: "Thought Leadership", description: "Establish thought leadership through educational and informative webinars." },
            { title: "Sales Presentations", description: "Present to prospects and customers with interactive sales content." },
            { title: "Educational Content", description: "Share educational content and knowledge with your audience." },
            { title: "Customer Onboarding", description: "Onboard new customers with comprehensive product training webinars." }
          ]
        }
      },
      {
        component: DynamicFAQ,
        props: {
          subtitle: "Get answers to common questions about webinar technology, features, and how it can benefit your business.",
          faqs: [
            {
              question: "What is a webinar?",
              answer: "A webinar is a web-based seminar that allows you to present to a large audience online. It combines video, audio, and interactive features to engage participants remotely."
            },
            {
              question: "How many people can attend a webinar?",
              answer: "You can host webinars with up to 10,000 participants depending on your plan. Free users can host webinars with up to 1,000 participants."
            },
            {
              question: "Can I record webinars?",
              answer: "Yes, you can record your webinars for later viewing, sharing, or repurposing. Recordings are saved securely and can be shared with participants."
            },
            {
              question: "What features are available for webinars?",
              answer: "Webinar features include HD video, screen sharing, audience polls, Q&A sessions, chat functionality, and advanced analytics."
            },
            {
              question: "Is webinar hosting secure?",
              answer: "Our webinar platform uses enterprise-grade encryption and security features. You can set passwords, waiting rooms, and control participant access."
            }
          ]
        }
      },
      {
        component: DynamicGetStarted,
        props: {
          title: "Get Started with Webinars Today",
          subtitle: "Join thousands of businesses who are already transforming their audience engagement with our powerful webinar technology.",
          mainCtaTitle: "Ready to Host Your First Webinar?",
          mainCtaSubtitle: "Download our app and begin your first webinar in minutes",
          primaryCtaText: "Download App",
          platforms: [
            {
              icon: Monitor,
              name: "Desktop",
              description: "Windows, macOS, Linux",
              features: ["Full webinar features", "Screen sharing", "Advanced controls"]
            },
            {
              icon: Smartphone,
              name: "Mobile",
              description: "iOS, Android",
              features: ["Mobile viewing", "Touch controls", "Push notifications"]
            },
            {
              icon: Tablet,
              name: "Tablet",
              description: "iPad, Android tablets",
              features: ["Large screen support", "Touch controls", "Portrait mode"]
            }
          ],
          finalCtaTitle: "Transform Your Audience Engagement Today",
          finalCtaSubtitle: "Experience the power of seamless webinars and take your audience engagement to the next level"
        }
      }
    ]
  },
  'file-sharing': {
    sections: [
      {
        component: DynamicHero,
        props: {
          bannerText: "New File Sharing Premium - AI-powered collaboration for intelligent file management",
          title: "File Sharing",
          subtitle: "Share files securely and collaborate in real-time with advanced features, version control, and seamless integration across all devices.",
          primaryCtaText: "Start Sharing",
          secondaryCtaText: "Watch Demo",
          stats: [
            { value: "1TB+", label: "Files Shared" },
            { value: "Real-time", label: "Sync" },
            { value: "99.9%", label: "Reliability" },
            { value: "24/7", label: "Support" }
          ]
        }
      },
      {
        component: DynamicFeatures,
        props: {
          title: "Express More with",
          subtitle: "Transform your file sharing with powerful collaboration features designed for modern teams and professionals.",
          features: [
            {
              icon: FileText,
              title: "Secure File Sharing",
              description: "Share files securely with end-to-end encryption and advanced access controls."
            },
            {
              icon: Users,
              title: "Real-time Collaboration",
              description: "Collaborate on files in real-time with multiple team members simultaneously."
            },
            {
              icon: Shield,
              title: "Version Control",
              description: "Track file versions and changes with automatic backup and recovery."
            },
            {
              icon: Zap,
              title: "Instant Sync",
              description: "Files sync instantly across all devices with cloud storage integration."
            },
            {
              icon: Search,
              title: "Advanced Search",
              description: "Find any file instantly with powerful search capabilities and filters."
            },
            {
              icon: Settings,
              title: "Access Controls",
              description: "Set permissions and control who can view, edit, or share your files."
            }
          ],
          demoTitle: "See File Sharing in Action",
          demoDescription: "Experience the power of our file sharing technology with this interactive demo.",
          demoFeatures: ["Secure sharing", "Real-time collaboration", "Version control"]
        }
      },
      {
        component: DynamicBenefits,
        props: {
          title: "How File Sharing Can",
          subtitle: "Discover the powerful benefits that file sharing brings to modern teams and how it can revolutionize your collaboration.",
          benefits: [
            {
              icon: TrendingUp,
              title: "Increased Productivity",
              description: "Efficient file sharing eliminates delays and enables faster collaboration, boosting team productivity."
            },
            {
              icon: Globe,
              title: "Global Collaboration",
              description: "Share files with team members worldwide instantly, regardless of location or time zone."
            },
            {
              icon: Users,
              title: "Better Communication",
              description: "File sharing improves communication by providing easy access to shared resources and documents."
            },
            {
              icon: Clock,
              title: "Time Savings",
              description: "Save time with instant file sharing and real-time collaboration capabilities."
            },
            {
              icon: DollarSign,
              title: "Cost Reduction",
              description: "Reduce storage costs and eliminate the need for physical file sharing methods."
            },
            {
              icon: Target,
              title: "Improved Organization",
              description: "Keep files organized with advanced folder structures and search capabilities."
            }
          ],
          statsTitle: "File Sharing Impact",
          statsSubtitle: "Real numbers from teams using our file sharing technology",
          useCasesTitle: "Popular Use Cases",
          useCases: [
            { title: "Document Collaboration", description: "Collaborate on documents, presentations, and spreadsheets in real-time." },
            { title: "Project Files", description: "Share project files and resources with team members and stakeholders." },
            { title: "Media Sharing", description: "Share images, videos, and other media files with clients and team members." },
            { title: "Backup & Storage", description: "Use cloud storage for secure backup and access to important files." },
            { title: "Client Deliverables", description: "Share deliverables and project files with clients securely." },
            { title: "Team Resources", description: "Share templates, guidelines, and resources with team members." }
          ]
        }
      },
      {
        component: DynamicFAQ,
        props: {
          subtitle: "Get answers to common questions about file sharing technology, features, and how it can benefit your team.",
          faqs: [
            {
              question: "What is file sharing?",
              answer: "File sharing is the practice of distributing or providing access to digital files, such as documents, images, videos, and other data, to multiple users or systems."
            },
            {
              question: "How secure is file sharing?",
              answer: "Our file sharing platform uses end-to-end encryption and advanced security features to protect your files. You can set permissions and control access to ensure security."
            },
            {
              question: "Can I collaborate on files in real-time?",
              answer: "Yes, you can collaborate on files in real-time with multiple team members. Changes are synced instantly across all devices."
            },
            {
              question: "What file types are supported?",
              answer: "We support all common file types including documents, images, videos, audio files, and compressed archives."
            },
            {
              question: "How much storage do I get?",
              answer: "Storage limits depend on your plan. Free users get 5GB, while premium plans offer up to 1TB or more of storage space."
            }
          ]
        }
      },
      {
        component: DynamicGetStarted,
        props: {
          title: "Get Started with File Sharing Today",
          subtitle: "Join millions of users who are already transforming their collaboration with our powerful file sharing technology.",
          mainCtaTitle: "Ready to Start Sharing?",
          mainCtaSubtitle: "Download our app and begin sharing files in minutes",
          primaryCtaText: "Download App",
          platforms: [
            {
              icon: Monitor,
              name: "Desktop",
              description: "Windows, macOS, Linux",
              features: ["Full file features", "Real-time sync", "Advanced controls"]
            },
            {
              icon: Smartphone,
              name: "Mobile",
              description: "iOS, Android",
              features: ["Mobile access", "Camera upload", "Touch controls"]
            },
            {
              icon: Tablet,
              name: "Tablet",
              description: "iPad, Android tablets",
              features: ["Large screen support", "Touch controls", "Multi-touch gestures"]
            }
          ],
          finalCtaTitle: "Transform Your Collaboration Today",
          finalCtaSubtitle: "Experience the power of seamless file sharing and take your team's collaboration to the next level"
        }
      }
    ]
  },
} 