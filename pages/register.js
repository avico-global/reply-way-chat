import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function Register() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [showWorkspaceForm, setShowWorkspaceForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    companyName: "",
  });

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setShowWorkspaceForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWorkspaceSubmit = (e) => {
    e.preventDefault();
    // Additional logic will be added later
    console.log("Workspace creation:", { role: selectedRole, ...formData });
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
                  <button
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
                  </button>

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

        {/* Workspace Creation Form - shown below Navbar when role is selected */}
        {showWorkspaceForm && (
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
                  <form onSubmit={handleWorkspaceSubmit} className="space-y-4">
                    {/* First Name and Last Name Row */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your first name"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          placeholder="Your last name"
                          required
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
                      <input
                        type="email"
                        id="workEmail"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="your.email@company.com"
                        required
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
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your company name"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                    >
                      Create Workspace
                    </button>
                  </form>
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
