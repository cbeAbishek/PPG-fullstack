import mongoose from "mongoose"

const gallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    caption: {
      type: String,
      required: false,
    },
    is_featured: {
      type: Boolean,
      default: false,
    },
    added_time_date: {
      type: Date,
      default: Date.now,
    },
    added_by: {
      type: String,
      required: [true, "Added by is required"],
    },
  },
  {
    timestamps: true,
  },
)

const Gallery = mongoose.model("Gallery", gallerySchema)

export default Gallery
