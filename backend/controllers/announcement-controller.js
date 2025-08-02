import Announcement from "../models/announcement.js"

// Get all announcements
export const getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find().sort({ publish_date: -1 })
    res.status(200).json({
      success: true,
      count: announcements.length,
      data: announcements,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    })
  }
}

// Get single announcement
export const getAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.findById(req.params.id)

    if (!announcement) {
      return res.status(404).json({
        success: false,
        message: "Announcement not found",
      })
    }

    res.status(200).json({
      success: true,
      data: announcement,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    })
  }
}

// Create new announcement
export const createAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.create(req.body)

    res.status(201).json({
      success: true,
      data: announcement,
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


// export const createAnnouncement = async (req, res) => {
//   console.log("req.body", req.body);
//   console.log("req.file", req.file);

//   try {
//     const announcement = await Announcement.create({
//       ...req.body,
//       image: req.file?.path || "", // save uploaded image path
//     });

//     res.status(201).json({
//       success: true,
//       data: announcement,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };


// Update announcement


export const updateAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    if (!announcement) {
      return res.status(404).json({
        success: false,
        message: "Announcement not found",
      })
    }

    res.status(200).json({
      success: true,
      data: announcement,
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

// Delete announcement
export const deleteAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.findByIdAndDelete(req.params.id)

    if (!announcement) {
      return res.status(404).json({
        success: false,
        message: "Announcement not found",
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
