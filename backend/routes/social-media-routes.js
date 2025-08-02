import express from "express"
import {
  getSocialMedias,
  getSocialMedia,
  createSocialMedia,
  updateSocialMedia,
  deleteSocialMedia,
} from "../controllers/social-media-controller.js"

const router = express.Router()

router.route("/").get(getSocialMedias).post(createSocialMedia)

router.route("/:id").get(getSocialMedia).put(updateSocialMedia).delete(deleteSocialMedia)

export default router
