import Gallery from "../models/gallery.js";

// Get all gallery items
export const getGalleryItems = async (req, res) => {
  try {
    const galleryItems = await Gallery.find().sort({ added_time_date: -1 });
    res.status(200).json({
      success: true,
      count: galleryItems.length,
      data: galleryItems,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// Get single gallery item
export const getGalleryItem = async (req, res) => {
  try {
    const galleryItem = await Gallery.findById(req.params.id);
    if (!galleryItem) {
      return res.status(404).json({
        success: false,
        message: "Gallery item not found",
      });
    }
    res.status(200).json({
      success: true,
      data: galleryItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// Create new gallery item (with file upload)
export const createGalleryItem = async (req, res) => {
  try {
    const { title, category, caption, is_featured, added_by } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    if (!image) {
      return res.status(400).json({
        success: false,
        message: "Image file is required",
      });
    }

    const newGalleryItem = await Gallery.create({
      title,
      category,
      image,
      caption,
      is_featured: is_featured === "true", // if coming from form-data
      added_by,
    });

    res.status(201).json({
      success: true,
      data: newGalleryItem,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ success: false, message: messages });
    }
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// Update gallery item (optional image upload)
export const updateGalleryItem = async (req, res) => {
  try {
    const updates = req.body;

    if (req.file) {
      updates.image = `/uploads/${req.file.filename}`;
    }

    // Ensure is_featured is boolean if sent via form-data
    if (updates.is_featured !== undefined) {
      updates.is_featured = updates.is_featured === "true";
    }

    const updatedGalleryItem = await Gallery.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedGalleryItem) {
      return res.status(404).json({
        success: false,
        message: "Gallery item not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedGalleryItem,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ success: false, message: messages });
    }

    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// Delete gallery item
export const deleteGalleryItem = async (req, res) => {
  try {
    const galleryItem = await Gallery.findByIdAndDelete(req.params.id);
    if (!galleryItem) {
      return res.status(404).json({
        success: false,
        message: "Gallery item not found",
      });
    }

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};
