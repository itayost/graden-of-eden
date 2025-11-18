# Garden of Eden

A React application with Privacy Policy and Terms of Service pages.

## Features

- Home page with navigation to legal documents
- Privacy Policy page with comprehensive privacy information
- Terms of Service page with detailed terms and conditions
- Responsive design that works on all devices
- Modern UI with clean styling

## Tech Stack

- React 18
- React Router DOM for navigation
- Vite for fast development and building
- CSS for styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build the application for production:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
garden-of-eden/
├── src/
│   ├── pages/
│   │   ├── Home.jsx          # Home page component
│   │   ├── Home.css          # Home page styles
│   │   ├── PrivacyPolicy.jsx # Privacy Policy page
│   │   ├── TermsOfService.jsx # Terms of Service page
│   │   └── Page.css          # Shared page styles
│   ├── App.jsx               # Main app component with routing
│   ├── App.css               # App styles
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
└── package.json              # Project dependencies
```

## Routes

- `/` - Home page
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service

## License

This project is private and proprietary.
