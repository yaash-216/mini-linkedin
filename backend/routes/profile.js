import express from "express";
const router = express.Router();
import { getProfile } from "../controllers/profileController.js";

router.get("/:id", getProfile);
export default router;
