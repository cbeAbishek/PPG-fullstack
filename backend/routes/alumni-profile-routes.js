import express from "express"
import {
  getAlumniProfiles,
  getAlumniProfile,
  createAlumniProfile,
  updateAlumniProfile,
  deleteAlumniProfile,
} from "../controllers/alumni-profile-controller.js"

const router = express.Router()

router.route("/").get(getAlumniProfiles).post(createAlumniProfile)

router.route("/:id").get(getAlumniProfile).put(updateAlumniProfile).delete(deleteAlumniProfile)

export default router
