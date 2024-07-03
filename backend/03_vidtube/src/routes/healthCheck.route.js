import { Router } from "express";
import { HealthCheck } from "../controllers/healthCheck.controller.js";

const router = Router();

router.get("/", HealthCheck);

/**
 * or
 * router.route("/").get(HealthCheck);
 */

export default HealthCheckRouter;
