import AlumniProfile from "../models/alumni-profile.js"

// Get all alumni profiles
export const getAlumniProfiles = async (req, res) => {
  try {
    const alumniProfiles = await AlumniProfile.find().sort({ createdAt: -1 })
    res.status(200).json({
      success: true,
      count: alumniProfiles.length,
      data: alumniProfiles,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    })
  }
}

// Get single alumni profile
export const getAlumniProfile = async (req, res) => {
  try {
    const alumniProfile = await AlumniProfile.findById(req.params.id)

    if (!alumniProfile) {
      return res.status(404).json({
        success: false,
        message: "Alumni profile not found",
      })
    }

    res.status(200).json({
      success: true,
      data: alumniProfile,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    })
  }
}

// Create new alumni profile
export const createAlumniProfile = async (req, res) => {
  try {
    const alumniProfile = await AlumniProfile.create(req.body)

    res.status(201).json({
      success: true,
      data: alumniProfile,
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

// Update alumni profile
export const updateAlumniProfile = async (req, res) => {
  try {
    const alumniProfile = await AlumniProfile.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    if (!alumniProfile) {
      return res.status(404).json({
        success: false,
        message: "Alumni profile not found",
      })
    }

    res.status(200).json({
      success: true,
      data: alumniProfile,
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

// Delete alumni profile
export const deleteAlumniProfile = async (req, res) => {
  try {
    const alumniProfile = await AlumniProfile.findByIdAndDelete(req.params.id)

    if (!alumniProfile) {
      return res.status(404).json({
        success: false,
        message: "Alumni profile not found",
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
