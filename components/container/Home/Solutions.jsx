import React from 'react'
import Image from 'next/image'
import Container from '../../common/Container'
import { Users, Phone, Users2, MessageCircle, FolderKanban, CheckSquare } from 'lucide-react'

export default function Solutions() {

  const solutions = [
    {
      id: 'meet',
      title: 'Meet',
      description: 'Make meetings more impactful with features like PowerPoint Live, Microsoft Whiteboard, and AI-generated meeting notes.',
      image: '/st-images/meet.avif',
      icon: Users
    },
    {
      id: 'call',
      title: 'Call',
      description: 'Stay connected with crystal-clear audio and video calls, screen sharing, and advanced calling features.',
      image: '/st-images/call.avif',
      icon: Phone
    },
    {
      id: 'collaborate',
      title: 'Collaborate',
      description: 'Work together seamlessly with real-time document editing, file sharing, and team collaboration tools.',
      image: '/st-images/collaborate.avif',
      icon: Users2
    },
    {
      id: 'chat',
      title: 'Chat',
      description: 'Communicate instantly with team chat, channels, and integrated messaging across all your devices.',
      image: '/st-images/chat.avif',
      icon: MessageCircle
    },
    {
      id: 'project-management',
      title: 'Project Management',
      description: 'Organize projects, set goals, and track progress seamlessly.',
      image: '/st-images/meet.avif',
      icon: FolderKanban
    },
    {
      id: 'task-management',
      title: 'Task Management',
      description: 'Manage tasks efficiently with deadlines, priorities, and collaboration tools.',
      image: '/st-images/call.avif',
      icon: CheckSquare
    }
  ]

  

  return (
    <>
      
      
      <section id='solutions' className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
              Solutions
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
              Comprehensive tools for
              <span className="block text-transparent bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 bg-clip-text animate-gradient">
                every workflow
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light mt-6">
              From instant messaging to project management, we've got all the tools your team needs 
              to collaborate effectively and achieve more together.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={solution.id} className="card group">
                  {/* Solution Image */}
                  <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Solution Content */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/40 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-heading-4 text-gray-900 dark:text-white">
                        {solution.title}
                      </h3>
                    </div>
                    <p className="text-body text-gray-600 dark:text-gray-300 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  )
}
