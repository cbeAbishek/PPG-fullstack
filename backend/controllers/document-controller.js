import Document from "../models/document.js"

// Get all documents
export const getDocuments = async (req, res) => {
  try {
    const documents = await Document.find().sort({ added_time_date: -1 })
    res.status(200).json({
      success: true,
      count: documents.length,
      data: documents,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    })
  }
}

// Get single document
export const getDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id)

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found",
      })
    }

    res.status(200).json({
      success: true,
      data: document,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    })
  }
}

// Create new document
export const createDocument = async (req, res) => {
  try {
    const document = await Document.create(req.body)

    res.status(201).json({
      success: true,
      data: document,
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

// Update document
export const updateDocument = async (req, res) => {
  try {
    const document = await Document.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found",
      })
    }

    res.status(200).json({
      success: true,
      data: document,
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

// Delete document
export const deleteDocument = async (req, res) => {
  try {
    const document = await Document.findByIdAndDelete(req.params.id)

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found",
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
