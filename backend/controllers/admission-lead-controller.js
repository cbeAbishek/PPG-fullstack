import AdmissionLead from "../models/admission-lead.js"

// Get all admission leads
export const getAdmissionLeads = async (req, res) => {
  try {
    const admissionLeads = await AdmissionLead.find().sort({ created_at: -1 })
    res.status(200).json({
      success: true,
      count: admissionLeads.length,
      data: admissionLeads,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    })
  }
}

// Get single admission lead
export const getAdmissionLead = async (req, res) => {
  try {
    const admissionLead = await AdmissionLead.findById(req.params.id)

    if (!admissionLead) {
      return res.status(404).json({
        success: false,
        message: "Admission lead not found",
      })
    }

    res.status(200).json({
      success: true,
      data: admissionLead,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    })
  }
}

// Create new admission lead
export const createAdmissionLead = async (req, res) => {
  try {
    const admissionLead = await AdmissionLead.create(req.body)

    res.status(201).json({
      success: true,
      data: admissionLead,
    })
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message)

      return res.status(400).json({
        success: false,
        message: messages,
      })
    }

    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    })
  }
}

// Update admission lead
export const updateAdmissionLead = async (req, res) => {
  try {
    const admissionLead = await AdmissionLead.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    if (!admissionLead) {
      return res.status(404).json({
        success: false,
        message: "Admission lead not found",
      })
    }

    res.status(200).json({
      success: true,
      data: admissionLead,
    })
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message)

      return res.status(400).json({
        success: false,
        message: messages,
      })
    }

    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    })
  }
}

// Delete admission lead
export const deleteAdmissionLead = async (req, res) => {
  try {
    const admissionLead = await AdmissionLead.findByIdAndDelete(req.params.id)

    if (!admissionLead) {
      return res.status(404).json({
        success: false,
        message: "Admission lead not found",
      })
    }

    res.status(200).json({
      success: true,
      data: {},
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    })
  }
}
