import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet"

import mongoose from "mongoose"
// Import routes
import announcementRoutes from "./routes/announcement-routes.js"
import eventRoutes from "./routes/event-routes.js"
import documentRoutes from "./routes/document-routes.js"
import galleryRoutes from "./routes/gallery-routes.js"
import alumniProfileRoutes from "./routes/alumni-profile-routes.js"
import admissionLeadRoutes from "./routes/admission-lead-routes.js"
import socialMediaRoutes from "./routes/social-media-routes.js"
import accountSettingRoutes from "./routes/account-setting-routes.js"
import userRoutes from "./routes/user-routes.js"

// Load environment variables
dotenv.config()

// Initialize express app
const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())

// Connect to MongoDB
// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("MongoDB connection error:", err))
async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('Missing MONGO_URI environment variable');
  }

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('MongoDB connected');
}
connectDB()




// Routes
app.use("/api/announcements", announcementRoutes)
app.use("/api/events", eventRoutes)
app.use("/api/documents", documentRoutes)
app.use("/api/gallery", galleryRoutes) // Verified this route use form-data
app.use("/api/alumni-profiles", alumniProfileRoutes) // Verified this route
app.use("/api/admission-leads", admissionLeadRoutes) //Verified this route
app.use("/api/social-media", socialMediaRoutes) //Verified this route
app.use("/api/account-settings", accountSettingRoutes) //Verified this route
app.use("/api/users", userRoutes) // Verified this route

// Root route
app.get("/", (req, res) => {
  res.send("API is running...")
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    success: false,
    message: "Server Error",
    error: process.env.NODE_ENV === "development" ? err.message : "An unexpected error occurred",
  })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export default app
