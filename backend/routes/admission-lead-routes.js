import express from "express"
import {
  getAdmissionLeads,
  getAdmissionLead,
  createAdmissionLead,
  updateAdmissionLead,
  deleteAdmissionLead,
} from "../controllers/admission-lead-controller.js"

const router = express.Router()

router.route("/").get(getAdmissionLeads).post(createAdmissionLead) // GET ALL, POST working

router.route("/:id").get(getAdmissionLead).put(updateAdmissionLead).delete(deleteAdmissionLead) // GET SINGLE, PUT, DELETE working

export default router
