import { APIResponse } from "../utils/apiResponse.js";
import { AsyncHandler } from "../utils/asyncHandler.js";

const HealthCheck = AsyncHandler(async (req, res) => {
  // Send a successful response
  return res
    .status(200)
    .json(new APIResponse(200, "OK", "Server is up and running"));
});

export { HealthCheck };
