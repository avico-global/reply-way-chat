import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { createMerchantWorkspace } from "../src/utils/api/merchant";
import { workspaceValidationSchema } from "../src/utils/validation/workspaceSchema";

export default function Register() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [showWorkspaceForm, setShowWorkspaceForm] = useState(false);
  const [workspaceCreated, setWorkspaceCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setShowWorkspaceForm(true);
  };

  const handleWorkspaceSubmit = async (values, { setSubmitting }) => {
    setIsLoading(true);
    setApiError(null);

    try {
      // Call the API
      const result = await createMerchantWorkspace({
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        email: values.workEmail.trim(),
        company: values.companyName.trim(),
      });

      if (result.success) {
        // Show success message
        setWorkspaceCreated(true);
        console.log("Workspace created successfully:", result.data);
      } else {
        // Show error message
        setApiError(
          result.error || "Failed to create workspace. Please try again."
        );
      }
    } catch (err) {
      setApiError(
        err.message || "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
      setSubmitting(false);
    }
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    workEmail: "",
    companyName: "",
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 dark:from-slate-900 dark:via-slate-900/95 dark:to-blue-950/20 transition-colors duration-300">
        {/* Role Selection Modal - Normal page flow */}
        {!showWorkspaceForm && (
          <div className="py-16 px-4">
            <div className="max-w-md mx-auto">
              {/* Modal Content */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-8">
                {/* Title */}
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  Who are you signing up as?
                </h1>

                {/* Description */}
                <p className="text-base text-gray-600 dark:text-gray-300 mb-8 text-center leading-relaxed">
                  Choose the type that best describes your role. This helps us
                  tailor your workspace setup and options.
                </p>

                {/* Role Options */}
                <div className="space-y-4">
                  {/* Agency Option */}
                  {/* <button
                    onClick={() => handleRoleSelect("agency")}
                    className={`w-full p-6 rounded-xl border-2 transition-all duration-200 text-left ${
                      selectedRole === "agency"
                        ? "border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20"
                        : "border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Agency
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Manage multiple clients, projects, and workflows
                      efficiently.
                    </p>
                  </button> */}

                  {/* Merchant Option */}
                  <button
                    onClick={() => handleRoleSelect("merchant")}
                    className={`w-full p-6 rounded-xl border-2 transition-all duration-200 text-left ${
                      selectedRole === "merchant"
                        ? "border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20"
                        : "border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Merchant
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Focus on your own business operations and client support.
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Workspace Created Success Message */}
        {workspaceCreated && (
          <div className="py-16 px-4">
            <div className="max-w-lg mx-auto">
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
                  Workspace Created!
                </h1>

                {/* Message */}
                <p className="text-base text-gray-600 dark:text-gray-300 mb-8">
                  Account created successfully. Please verify your email to
                  activate your account.
                </p>

                {/* Verify Email Button */}
                {/* <a
                  href={`/verifyEmail?email=${encodeURIComponent(
                    formData.workEmail
                  )}`}
                  className="inline-block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  Verify My Account
                </a> */}
              </div>
            </div>
          </div>
        )}

        {/* Workspace Creation Form - shown below Navbar when role is selected */}
        {showWorkspaceForm && !workspaceCreated && (
          <div className="py-16 px-4">
            <div className="max-w-lg mx-auto">
              {/* Modal Content */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-8">
                {/* Title */}
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                  Create your company workspace
                </h1>

                {/* Subtitle */}
                <p className="text-base text-gray-600 dark:text-gray-300 mb-8 text-center">
                  One secure place for your team and clients.
                </p>

                {/* Admin Account Section */}
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Admin Account
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                    Create your admin account
                  </p>

                  {/* Form */}
                  <Formik
                    initialValues={initialValues}
                    validationSchema={workspaceValidationSchema}
                    onSubmit={handleWorkspaceSubmit}
                  >
                    {({ isSubmitting, touched, errors }) => (
                      <Form className="space-y-4">
                        {/* First Name and Last Name Row */}
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="firstName"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            >
                              First Name
                            </label>
                            <Field
                              type="text"
                              id="firstName"
                              name="firstName"
                              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                                touched.firstName && errors.firstName
                                  ? "border-red-300 dark:border-red-600 bg-white dark:bg-gray-700"
                                  : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                              } text-gray-900 dark:text-gray-100`}
                              placeholder="Your first name"
                            />
                            <ErrorMessage
                              name="firstName"
                              component="div"
                              className="mt-1 text-sm text-red-600 dark:text-red-400"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="lastName"
                              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                            >
                              Last Name
                            </label>
                            <Field
                              type="text"
                              id="lastName"
                              name="lastName"
                              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                                touched.lastName && errors.lastName
                                  ? "border-red-300 dark:border-red-600 bg-white dark:bg-gray-700"
                                  : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                              } text-gray-900 dark:text-gray-100`}
                              placeholder="Your last name"
                            />
                            <ErrorMessage
                              name="lastName"
                              component="div"
                              className="mt-1 text-sm text-red-600 dark:text-red-400"
                            />
                          </div>
                        </div>

                        {/* Work Email */}
                        <div>
                          <label
                            htmlFor="workEmail"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                          >
                            Work Email
                          </label>
                          <Field
                            type="email"
                            id="workEmail"
                            name="workEmail"
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                              touched.workEmail && errors.workEmail
                                ? "border-red-300 dark:border-red-600 bg-white dark:bg-gray-700"
                                : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                            } text-gray-900 dark:text-gray-100`}
                            placeholder="your.email@company.com"
                          />
                          <ErrorMessage
                            name="workEmail"
                            component="div"
                            className="mt-1 text-sm text-red-600 dark:text-red-400"
                          />
                        </div>

                        {/* Company Name */}
                        <div>
                          <label
                            htmlFor="companyName"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                          >
                            Company Name
                          </label>
                          <Field
                            type="text"
                            id="companyName"
                            name="companyName"
                            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                              touched.companyName && errors.companyName
                                ? "border-red-300 dark:border-red-600 bg-white dark:bg-gray-700"
                                : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                            } text-gray-900 dark:text-gray-100`}
                            placeholder="Your company name"
                          />
                          <ErrorMessage
                            name="companyName"
                            component="div"
                            className="mt-1 text-sm text-red-600 dark:text-red-400"
                          />
                        </div>

                        {/* API Error Message */}
                        {apiError && (
                          <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                            <p className="text-sm text-red-600 dark:text-red-400">
                              {apiError}
                            </p>
                          </div>
                        )}

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={isLoading || isSubmitting}
                          className={`w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] ${
                            isLoading || isSubmitting
                              ? "opacity-70 cursor-not-allowed"
                              : ""
                          }`}
                        >
                          {isLoading || isSubmitting ? (
                            <span className="flex items-center justify-center">
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Creating Workspace...
                            </span>
                          ) : (
                            "Create Workspace"
                          )}
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
