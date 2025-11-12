import * as Yup from "yup";

/**
 * Validation schema for workspace creation form
 */
export const workspaceValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must not exceed 50 characters")
    .required("First name is required")
    .matches(
      /^[a-zA-Z\s'-]+$/,
      "First name can only contain letters, spaces, hyphens, and apostrophes"
    ),
  lastName: Yup.string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must not exceed 50 characters")
    .required("Last name is required")
    .matches(
      /^[a-zA-Z\s'-]+$/,
      "Last name can only contain letters, spaces, hyphens, and apostrophes"
    ),
  workEmail: Yup.string()
    .trim()
    .email("Please enter a valid email address")
    .required("Work email is required")
    .max(100, "Email must not exceed 100 characters")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please enter a valid email address"
    ),
  companyName: Yup.string()
    .trim()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must not exceed 100 characters")
    .required("Company name is required")
    .matches(
      /^[a-zA-Z0-9\s&.,'-]+$/,
      "Company name contains invalid characters"
    ),
});
