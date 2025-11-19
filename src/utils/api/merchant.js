/**
 * Merchant API endpoints
 * Base URL: https://dev_api.replyway.com/api/v1
 */

const API_BASE_URL = "https://api.replyway.com/api/v1";

/**
 * Create a merchant workspace
 * @param {Object} data - Workspace creation data
 * @param {string} data.firstName - First name of the user
 * @param {string} data.lastName - Last name of the user
 * @param {string} data.email - Work email address
 * @param {string} data.company - Company name
 * @returns {Promise<Object>} API response
 */
export async function createMerchantWorkspace(data) {
  try {
    const response = await fetch(`${API_BASE_URL}/merchant/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Custom-Origin": "https://app.replyway.com",
      },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        company: data.company,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message ||
          `API error: ${response.status} ${response.statusText}`
      );
    }

    const result = await response.json();
    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error("Error creating merchant workspace:", error);
    return {
      success: false,
      error: error.message || "Failed to create workspace. Please try again.",
    };
  }
}

/**
 * Approve a merchant
 * @param {string} merchantId - The ID of the merchant to approve
 * @returns {Promise<Object>} API response
 */
export async function approveMerchant(merchantId) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/merchant/approve-merchant?merchantId=${merchantId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Custom-Origin": "https://dev.replyway.com",
        },
      }
    );

    const result = await response.json();

    // Check if merchant is already approved (statusCode 201 with success: false)
    if (
      result.success === false &&
      result.message === "Merchant Has Already Approved" &&
      result.statusCode === 201
    ) {
      return {
        success: false,
        alreadyApproved: true,
        message: result.message,
        data: result,
      };
    }

    if (!response.ok) {
      throw new Error(
        result.message || `API error: ${response.status} ${response.statusText}`
      );
    }

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error("Error approving merchant:", error);
    return {
      success: false,
      error: error.message || "Failed to approve merchant. Please try again.",
    };
  }
}
