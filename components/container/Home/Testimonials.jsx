import React from 'react'
import Container from '../../common/Container'
import { Star } from 'lucide-react'
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
        {
          rating: 5,
          quote: "Replyway has transformed how our team collaborates. The seamless integration and intuitive interface have boosted our productivity by 40%.",
          name: "Sarah Johnson",
          role: "Product Manager",
          company: "TechCorp",
          avatar: "/st-images/sara.jpeg"
        },
    {
      rating: 5,
      quote: "The video conferencing quality is exceptional, and the screen sharing features make remote collaboration feel natural and efficient.",
      name: "Michael Chen",
      role: "Engineering Lead",
      company: "InnovateLab",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      rating: 5,
      quote: "Replyway's AI-powered features have revolutionized our workflow. The intelligent automation saves us hours every week.",
      name: "David Kim",
      role: "Operations Director",
      company: "SmartFlow",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      rating: 5,
      quote: "The chat functionality is incredibly smooth and reliable. Our global team stays connected seamlessly across all time zones.",
      name: "Lisa Wang",
      role: "Global Communications Lead",
      company: "WorldConnect",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      rating: 5,
      quote: "Replyway's security features give us peace of mind while maintaining the flexibility our distributed team needs to stay connected.",
      name: "Emily Rodriguez",
      role: "CTO",
      company: "SecureFlow",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
    }
  ]

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800/50 transition-colors">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
            Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
            Trusted by teams
            <span className="block text-transparent bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 bg-clip-text animate-gradient">
              worldwide
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mt-6">
            See what our customers have to say about their experience with ReplyWay.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-feature group flex flex-col">
                {/* Star Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 italic leading-relaxed mb-6 flex-1">
                  "{testimonial.quote}"
                </blockquote>

                {/* Customer Profile */}
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
