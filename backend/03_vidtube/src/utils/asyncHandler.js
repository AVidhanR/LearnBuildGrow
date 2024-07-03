// Higher-order function to wrap asynchronous request handlers

const AsyncHandler = (reqHandler) => {
  // Returns a middleware function that handles asynchronous request handlers

  return (req, res, next) => {
    // Resolve the promise returned by the request handler (or an empty promise)
    Promise.resolve(reqHandler(req, res, next))
      // Catch any errors thrown by the request handler
      .catch((error) => {
        // Pass the caught error to the next error handling middleware
        next(error);
      });
  };
};

export { AsyncHandler };
