class APIResponse {
  constructor(status, message = "Success", data) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.success = status < 400;
  }
}

export { APIResponse };
