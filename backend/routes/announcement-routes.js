import express from "express"
import {
  getAnnouncements,
  getAnnouncement,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
} from "../controllers/announcement-controller.js"

const router = express.Router()

router.route("/").get(getAnnouncements).post(createAnnouncement)
router.route("/:id").get(getAnnouncement).put(updateAnnouncement).delete(deleteAnnouncement)

export default router
