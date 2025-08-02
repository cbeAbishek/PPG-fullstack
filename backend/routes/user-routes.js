import express from "express"
import {
  getUsers,
  getUser,
  registerUser,
  loginUser,
  updateUser,
  changePassword,
  deleteUser,
} from "../controllers/user-controller.js"

const router = express.Router()

router.route("/").get(getUsers) // working

router.route("/register").post(registerUser) // working

router.route("/login").post(loginUser) // working

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser)  // working

router.route("/:id/change-password").put(changePassword) // working

export default router
