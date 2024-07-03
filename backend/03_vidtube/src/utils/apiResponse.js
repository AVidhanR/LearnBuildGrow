// Class representing a structured response for an API endpoint
class APIResponse {
  constructor(
    // HTTP status code for the response
    status,
    // Optional message to be included in the response (defaults to "Success")
    message = "Success",
    // Optional data object to be included in the response
    data
  ) {
    this.status = status;
    this.message = message;
    this.data = data;

    // Determine success status based on the status code (true for codes below 400)
    this.success = status < 400;
  }
}

// Export the APIResponse class to be used in other modules
export { APIResponse };
