import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { approveMerchant } from "../src/utils/api/merchant";

export default function VerifyEmail() {
  const router = useRouter();
  const [isVerifying, setIsVerifying] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(null);
  const [isAlreadyVerified, setIsAlreadyVerified] = useState(false);
  const [chatDomain, setChatDomain] = useState(null);
  const { email, token, merchantId } = router.query;

  useEffect(() => {
    // Call approve merchant API when merchantId is present
    if (merchantId) {
      const approveMerchantAccount = async () => {
        try {
          const result = await approveMerchant(merchantId);

          if (result.success) {
            console.log("Merchant approved successfully:", result.data);
            // Extract chatDomain from the response
            if (result.data?.message?.chatDomain) {
              setChatDomain(result.data.message.chatDomain);
            }
            // Show verified state after successful approval
            setTimeout(() => {
              setIsVerifying(false);
              setIsVerified(true);
            }, 1000);
          } else if (result.alreadyApproved) {
            // Handle already approved case
            console.log("Merchant already approved:", result.data);
            // Extract chatDomain from the response if available
            if (result.data?.message?.chatDomain) {
              setChatDomain(result.data.message.chatDomain);
            }
            setTimeout(() => {
              setIsVerifying(false);
              setIsAlreadyVerified(true);
            }, 1000);
          } else {
            // Show error if approval fails
            setError(result.error || "Failed to approve merchant account.");
            setIsVerifying(false);
          }
        } catch (err) {
          setError(err.message || "An error occurred during verification.");
          setIsVerifying(false);
        }
      };

      approveMerchantAccount();
    } else if (token || email) {
      // Fallback: Simulate email verification process for old flow
      const timer = setTimeout(() => {
        setIsVerifying(false);
        setIsVerified(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [merchantId, token, email]);

  const handleProceedToLogin = () => {
    if (chatDomain) {
      // Open the chat domain in a new tab/window
      const domainUrl = chatDomain.startsWith("http")
        ? chatDomain
        : `https://${chatDomain}`;
      window.open(domainUrl, "_blank");
    } else {
      // Fallback to signin if chatDomain is not available
      router.push("/signin");
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 dark:from-slate-900 dark:via-slate-900/95 dark:to-blue-950/20 transition-colors duration-300">
        <div className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            {/* Verifying State */}
            {isVerifying && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-8 text-center">
                {/* Loading Spinner */}
                <div className="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin mx-auto mb-6"></div>

                {/* Title */}
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Verifying your email...
                </h1>

                {/* Message */}
                <p className="text-base text-gray-600 dark:text-gray-300">
                  Please wait while we verify your email address.
                </p>
              </div>
            )}

            {/* Already Verified State */}
            {isAlreadyVerified && !isVerifying && !isVerified && !error && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-8 text-center">
                {/* Error Icon */}
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-red-600 dark:text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Verification Failed
                </h1>

                {/* Error Message */}
                <p className="text-base text-red-600 dark:text-red-400 mb-8">
                  Merchant is already verified.
                </p>
              </div>
            )}

            {/* Error State */}
            {error && !isVerifying && !isVerified && !isAlreadyVerified && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-8 text-center">
                {/* Error Icon */}
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-red-600 dark:text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Verification Failed
                </h1>

                {/* Error Message */}
                <p className="text-base text-red-600 dark:text-red-400 mb-8">
                  {error}
                </p>

                {/* Retry Button */}
                <button
                  onClick={() => {
                    setError(null);
                    setIsVerifying(true);
                    if (merchantId) {
                      approveMerchant(merchantId)
                        .then((result) => {
                          if (result.success) {
                            // Extract chatDomain from the response
                            if (result.data?.message?.chatDomain) {
                              setChatDomain(result.data.message.chatDomain);
                            }
                            setIsVerifying(false);
                            setIsVerified(true);
                          } else if (result.alreadyApproved) {
                            // Handle already approved case
                            if (result.data?.message?.chatDomain) {
                              setChatDomain(result.data.message.chatDomain);
                            }
                            setIsVerifying(false);
                            setIsAlreadyVerified(true);
                          } else {
                            setError(result.error);
                            setIsVerifying(false);
                          }
                        })
                        .catch((err) => {
                          setError(err.message);
                          setIsVerifying(false);
                        });
                    }
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  Try Again
                </button>
              </div>
            )}

            {/* Verified Success State */}
            {isVerified && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-8 text-center">
                {/* Success Icon */}
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Email Verified!
                </h1>

                {/* Message */}
                <p className="text-base text-gray-600 dark:text-gray-300 mb-8">
                  Your email has been successfully verified.
                </p>

                {/* Instructions */}
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 mb-6 text-left">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    You may now proceed to login
                  </p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                    Your account is ready to use
                  </p>
                  <div className="border-t border-gray-200 dark:border-gray-600 my-4"></div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    Login credentials sent to your email
                  </p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    Username and password included
                  </p>
                </div>

                {/* Proceed to Login Button */}
                <button
                  onClick={handleProceedToLogin}
                  className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] mb-4"
                >
                  Proceed to Login
                </button>

                {/* Additional Info */}
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Check your email inbox for your login credentials if you
                  haven't received them yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
