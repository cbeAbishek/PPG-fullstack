import mongoose from "mongoose"

const accountSettingSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },
    reset_password_token: {
      type: String,
      required: false,
    },
    preferences: {
      type: Object,
      default: {},
    },
    notifications: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  },
)

const AccountSetting = mongoose.model("AccountSetting", accountSettingSchema)

export default AccountSetting
