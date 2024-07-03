// Class representing an error specifically for API responses
class APIError extends Error {
  constructor(
    // Default error message
    message = "Something went wrong",
    // Default status code (internal server error)
    status = 500,
    // Array to hold additional error details (optional)
    errors = [],
    // Optional stack trace for debugging
    stack = ""
  ) {
    // Call the parent Error constructor with the provided message
    super(message);

    // Assign the provided status code
    this.status = status;

    // Data property remains unassigned by default (can be set later)
    this.data = null;

    // Set the error message (can be overridden in the constructor)
    this.message = message;

    // Assign the provided error details array
    this.errors = errors;

    // Indicate error status (always false for APIError)
    this.success = false;

    // If a stack trace is provided, use it directly
    if (stack) {
      this.stack = stack;
    } else {
      // Otherwise, generate a stack trace for debugging purposes
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

// Export the APIError class to be used in other modules
export { APIError };

// comments by Gemini
