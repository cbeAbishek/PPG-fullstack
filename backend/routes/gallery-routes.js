import express from "express";
import upload from "../middleware/upload.js";
import {
  getGalleryItems,
  getGalleryItem,
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
} from "../controllers/gallery-controller.js";

const router = express.Router();

router.get("/", getGalleryItems);
router.get("/:id", getGalleryItem);
router.post("/", upload.single("image"), createGalleryItem);
router.put("/:id", upload.single("image"), updateGalleryItem);
router.delete("/:id", deleteGalleryItem);

export default router;
