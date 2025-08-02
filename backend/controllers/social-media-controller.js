import SocialMedia from "../models/social-media.js"

// Get all social media
export const getSocialMedias = async (req, res) => {
  try {
    const socialMedias = await SocialMedia.find()
    res.status(200).json({
      success: true,
      count: socialMedias.length,
      data: socialMedias,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    })
  }
}

// Get single social media
export const getSocialMedia = async (req, res) => {
  try {
    const socialMedia = await SocialMedia.findById(req.params.id)

    if (!socialMedia) {
      return res.status(404).json({
        success: false,
        message: "Social media not found",
      })
    }

    res.status(200).json({
      success: true,
      data: socialMedia,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    })
  }
}

// Create new social media
export const createSocialMedia = async (req, res) => {
  try {
    const socialMedia = await SocialMedia.create(req.body)

    res.status(201).json({
      success: true,
      data: socialMedia,
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

// Update social media
export const updateSocialMedia = async (req, res) => {
  try {
    const socialMedia = await SocialMedia.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

    if (!socialMedia) {
      return res.status(404).json({
        success: false,
        message: "Social media not found",
      })
    }

    res.status(200).json({
      success: true,
      data: socialMedia,
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

// Delete social media
export const deleteSocialMedia = async (req, res) => {
  try {
    const socialMedia = await SocialMedia.findByIdAndDelete(req.params.id)

    if (!socialMedia) {
      return res.status(404).json({
        success: false,
        message: "Social media not found",
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
