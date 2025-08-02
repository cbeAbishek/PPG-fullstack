import express from "express"
import {
  getAccountSettings,
  getAccountSetting,
  getAccountSettingByUserId,
  createAccountSetting,
  updateAccountSetting,
  deleteAccountSetting,
} from "../controllers/account-setting-controller.js"

const router = express.Router()

router.route("/").get(getAccountSettings).post(createAccountSetting)

router.route("/:id").get(getAccountSetting).put(updateAccountSetting).delete(deleteAccountSetting)

router.route("/user/:userId").get(getAccountSettingByUserId)

export default router
