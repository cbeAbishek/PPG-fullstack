# PPG Fullstack Project

A modern fullstack web application for college management, featuring a Node.js backend and a Next.js frontend. The project delivers essential UI pages and a seamless end-to-end user experience for administrators, students, and alumni.

## Tech Stack
- **Backend:** Node.js, Express.js
- **Frontend:** Next.js, React, Tailwind CSS
- **UI Library:** Shadcn UI, Lucide Icons
- **Package Manager:** pnpm

## Features
### Admin Panel
- Dashboard: Overview of college website stats
- Documents: Upload and manage documents
- Events: Create and manage events
- Gallery: Upload and manage gallery images
- Settings: Configure website settings
- Authentication: Secure admin login

### Public Pages
- Home: College introduction and highlights
- About: Information about the institution
- Academics: Department and course details
- Admissions: Application and lead management
- Alumni: Alumni profiles and achievements
- Campus: Campus life and facilities
- Careers: Job and placement opportunities
- Incubation: Startup and innovation hub
- Media: Social media and news
- Placements: Placement statistics and recruiter info

## UI/UX Highlights
- Responsive design for desktop and mobile
- Animated backgrounds, counters, and banners
- Parallax sections and reveal-on-scroll effects
- Accessible navigation and sidebar
- Toast notifications and modals for feedback
- Preloader for smooth page transitions

## Getting Started
### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
```bash
npm install
```

### Running the Project
#### Development
```bash
npm run dev
```
- Starts both backend and frontend servers concurrently.

#### Frontend Only
```bash
cd frontend
npm run dev
```

#### Backend Only
```bash
cd backend
npm run dev
```

## Folder Structure
```
backend/      # Node.js API, controllers, models, routes
frontend/     # Next.js app, UI components, pages, hooks
```

## Customization
- Update Tailwind config for branding
- Add new pages/components in `frontend/components` and `frontend/app`
- Extend backend APIs in `backend/controllers` and `backend/routes`

## Contributing
1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Open a pull request

