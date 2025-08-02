import mongoose from "mongoose"

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },
    start_date: {
      type: Date,
      required: [true, "Start date is required"],
    },
    end_date: {
      type: Date,
      required: [true, "End date is required"],
    },
    image: {
      type: String,
      required: false,
    },
    redirect_link_text: {
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

const Event = mongoose.model("Event", eventSchema)

export default Event
