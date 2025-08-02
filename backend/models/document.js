import mongoose from "mongoose"

const documentSchema = new mongoose.Schema(
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
    document_file: {
      type: String,
      required: [true, "Document file is required"],
    },
    description: {
      type: String,
      required: false,
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

const Document = mongoose.model("Document", documentSchema)

export default Document
