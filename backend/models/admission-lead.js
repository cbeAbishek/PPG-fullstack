import mongoose from "mongoose"

const admissionLeadSchema = new mongoose.Schema(
  {
    student_full_name: {
      type: String,
      required: [true, "Student full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"],
    },
    phone_number: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    preferred_program: {
      type: String,
      required: [true, "Preferred program is required"],
      trim: true,
    },
    highest_education_level: {
      type: String,
      required: [true, "Highest education level is required"],
      trim: true,
    },
    additional_information: {
      type: String,
      required: false,
    },
    lead_status: {
      type: String,
      required: [true, "Lead status is required"],
      trim: true,
      enum: ["New", "Contacted", "Qualified", "Converted", "Closed"],
    },
    lead_source: {
      type: String,
      required: false,
      trim: true,
    },
    assigned_to: {
      type: String,
      required: false,
      trim: true,
    },
    call_notes: {
      type: String,
      required: false,
    },
    call_status: {
      type: String,
      required: false,
      trim: true,
    },
    follow_up_date: {
      type: Date,
      required: false,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
    remarks: {
      type: String,
      required: false,
    },
    priority_level: {
      type: String,
      required: false,
      enum: ["Low", "Medium", "High"],
    },
    last_contacted: {
      type: Date,
      required: false,
    },
    next_action: {
      type: String,
      required: false,
    },
    report_tags: {
      type: [String],
      required: false,
    },
  },
  {
    timestamps: true,
  },
)

const AdmissionLead = mongoose.model("AdmissionLead", admissionLeadSchema)

export default AdmissionLead
