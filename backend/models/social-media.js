import mongoose from "mongoose"

const socialMediaSchema = new mongoose.Schema(
  {
    platform: {
      type: String,
      required: [true, "Platform is required"],
      trim: true,
    },
    url: {
      type: String,
      required: [true, "URL is required"],
      trim: true,
    },
    profile_name: {
      type: String,
      required: [true, "Profile name is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  },
)

const SocialMedia = mongoose.model("SocialMedia", socialMediaSchema)

export default SocialMedia
