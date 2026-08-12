# Jatin Hirapara Portfolio

A portfolio website built with React to showcase mobile app development work, technical skills, projects, experience, and contact details.

## PR Description

### Title
Fix portfolio app startup/build issues and merge project into main

### Summary
This PR fixes the portfolio project so it installs, runs, and builds successfully in a fresh environment.

### What changed
- Fixed the invalid `react-scripts` dependency version in `package.json`
- Removed the incompatible Jest ESLint preset that prevented Create React App from starting
- Resolved merge conflicts between the project branch and the repository’s `main` branch
- Verified the app compiles successfully in production mode

### Verification
- `npm install` completed successfully
- `npm run build` completed successfully with the message: `Compiled successfully.`
- Local runtime checks returned HTTP 200 on the app port

### Notes
- This resolves the startup and build blockers for the portfolio app
- There are still some non-blocking dependency warnings and `npm audit` advisories from older packages, but they do not stop the app from running or building

## Features
- Profile summary and introduction
- Work experience and qualifications
- Skills and achievements overview
- Project showcase section
- Blog and testimonials sections
- Contact details and social links

## Tech Stack
- React
- JavaScript
- Styled Components
- React Scroll
- Slick Carousel
- Axios

## Getting Started

### Install dependencies
```bash
npm install
```

### Run locally
```bash
npm start
```

The app will be available at:
```text
http://localhost:3000
```

### Production build
```bash
npm run build
```

## Deployment Note
The project was built successfully for production using Create React App and is ready to be deployed to a static hosting platform.

## Repository
- GitHub: https://github.com/JatinJD14296/My-Portfolio
