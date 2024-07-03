import { Router } from "express";
import { HealthCheck } from "../controllers/healthCheck.controller.js";

const router = Router();

router.route("/").get(HealthCheck);

/**
 * or
 * router.get("/", HealthCheck);
 */

export default HealthCheckRouter;
