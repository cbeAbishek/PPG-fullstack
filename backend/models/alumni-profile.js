import mongoose from "mongoose"

const alumniProfileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    department: {
      type: String,
      required: [true, "Department is required"],
      trim: true,
    },
    description: {
      type: String,
      required: false,
    },
    batch: {
      type: String,
      required: [true, "Batch is required"],
      trim: true,
    },
    feedback: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
)

const AlumniProfile = mongoose.model("AlumniProfile", alumniProfileSchema)

export default AlumniProfile
