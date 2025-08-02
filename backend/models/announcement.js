import mongoose from "mongoose"

const announcementSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
    publish_date: {
      type: Date,
      default: Date.now,
    },
    time: {
      type: String,
      required: false,
    },
    redirect_link: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
)

const Announcement = mongoose.model("Announcement", announcementSchema)

export default Announcement
