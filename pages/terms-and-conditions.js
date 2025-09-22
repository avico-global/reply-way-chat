import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Container from "../components/common/Container";

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Terms & Conditions
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Understand the rules for using ReplyWay and your responsibilities.
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
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Introduction
                </h3>
                <p>
                  These Terms & Conditions govern your use of Replyway and any
                  related services, applications, or features. By creating an
                  account or using Replyway, you agree to comply with these
                  terms.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Eligibility & Account
                </h3>
                <p>
                  You must be of legal age in your jurisdiction or have
                  appropriate authorization to use Replyway. You are responsible
                  for maintaining accurate account information and protecting
                  your login credentials.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  User Responsibilities
                </h3>
                <p>
                  You are responsible for maintaining accurate account
                  information and protecting your login credentials. You agree
                  to use the service lawfully and to respect the rights and
                  privacy of others while collaborating on Replyway.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Prohibited Activities
                </h3>
                <p>
                  You may not engage in activities that harm, disrupt, or
                  degrade the service, including but not limited to unauthorized
                  access, data scraping, distribution of malware, or harassment
                  of other users.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Intellectual Property
                </h3>
                <p>
                  All trademarks, logos, and content provided by Replyway are
                  the property of their respective owners and may not be used
                  without permission. You retain rights to content you create,
                  subject to licenses granted for service functionality.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Limitation of Liability
                </h3>
                <p>
                  Replyway is provided on an "as is" and "as available" basis.
                  To the fullest extent permitted by law, we disclaim all
                  warranties and are not liable for any indirect, incidental, or
                  consequential damages arising from your use of the service.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Termination
                </h3>
                <p>
                  We may suspend or terminate accounts that violate these terms
                  or engage in harmful activities. You may request account
                  deletion at any time, subject to applicable data retention
                  obligations.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Governing Law
                </h3>
                <p>
                  These terms are governed by the laws of the applicable
                  jurisdiction where Replyway operates, without regard to
                  conflict of law principles. Any disputes shall be resolved in
                  the competent courts of that jurisdiction.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Contact Us
                </h3>
                <p>
                  If you have questions about these Terms & Conditions, please
                  contact our support team.
                </p>
              </div>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
