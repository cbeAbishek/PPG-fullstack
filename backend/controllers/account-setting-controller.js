import AccountSetting from "../models/account-setting.js"

// Get all account settings
export const getAccountSettings = async (req, res) => {
  try {
    const accountSettings = await AccountSetting.find().populate("user_id")
    res.status(200).json({
      success: true,
      count: accountSettings.length,
      data: accountSettings,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    })
  }
}

// Get single account setting
export const getAccountSetting = async (req, res) => {
  try {
    const accountSetting = await AccountSetting.findById(req.params.id).populate("user_id")

    if (!accountSetting) {
      return res.status(404).json({
        success: false,
        message: "Account setting not found",
      })
    }

    res.status(200).json({
      success: true,
      data: accountSetting,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    })
  }
}

// Get account setting by user ID
export const getAccountSettingByUserId = async (req, res) => {
  try {
    const accountSetting = await AccountSetting.findOne({ user_id: req.params.userId }).populate("user_id")

    if (!accountSetting) {
      return res.status(404).json({
        success: false,
        message: "Account setting not found for this user",
      })
    }

    res.status(200).json({
      success: true,
      data: accountSetting,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    })
  }
}

// Create new account setting
export const createAccountSetting = async (req, res) => {
  try {
    const accountSetting = await AccountSetting.create(req.body)

    res.status(201).json({
      success: true,
      data: accountSetting,
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

// Update account setting
export const updateAccountSetting = async (req, res) => {
  try {
    const accountSetting = await AccountSetting.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    if (!accountSetting) {
      return res.status(404).json({
        success: false,
        message: "Account setting not found",
      })
    }

    res.status(200).json({
      success: true,
      data: accountSetting,
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

// Delete account setting
export const deleteAccountSetting = async (req, res) => {
  try {
    const accountSetting = await AccountSetting.findByIdAndDelete(req.params.id)

    if (!accountSetting) {
      return res.status(404).json({
        success: false,
        message: "Account setting not found",
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
