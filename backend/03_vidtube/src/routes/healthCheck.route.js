import { Router } from "express";
import { HealthCheck } from "../controllers/healthCheck.controller.js";

const HealthCheckRouter = Router();

HealthCheckRouter.route("/").get(HealthCheck);

/**
 * or
 * HealthCheckRouter.get("/", HealthCheck);
 */

export default HealthCheckRouter;
