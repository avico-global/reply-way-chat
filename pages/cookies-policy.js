import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Container from '../components/common/Container'

export default function CookiesPolicy() {
  return (
    <>
      <Navbar />
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Cookies Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Learn how and why we use cookies to improve your experience.
            </p>
          </div>
        </Container>
      </section>
      <main className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Last updated: {new Date().getFullYear()}
              </p>
            </div>

            <section className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Introduction</h3>
                <p>
                  This Cookies Policy explains what cookies are, the types we use on Replyway, and how you can control cookies through your browser or device settings.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">What Are Cookies?</h3>
                <p>
                  Cookies are small text files stored on your device by websites you visit. They allow websites to remember your actions and preferences over time for a better, more consistent experience.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Types of Cookies We Use</h3>
                <p>
                  We may use essential cookies (required for core features), performance cookies (analytics and usage), and preference cookies (remembering settings like language and theme). Third-party analytics cookies may also be used.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">How We Use Cookies</h3>
                <p>
                  Cookies help us keep you signed in, remember preferences, measure performance, and enhance overall usability. We use aggregated data to understand trends and improve Replyway.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Managing Cookies Preferences</h3>
                <p>
                  Most browsers let you control cookies through settings. You can accept, reject, or delete cookies. Note that disabling certain cookies may affect functionality and your experience on Replyway.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Third-Party Cookies</h3>
                <p>
                  Some features may rely on third-party cookies (for example, analytics providers) to help us understand usage patterns and improve the product. These third parties have their own privacy and cookies policies.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Updates to This Policy</h3>
                <p>
                  We may update this policy from time to time to reflect changes in technology, legislation, or our practices. Material changes will be communicated through the service.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h3>
                <p>
                  If you have questions about this Cookies Policy, please contact our support team.
                </p>
              </div>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}


