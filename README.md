# Ctrl Threats - Cybersecurity Intelligence Platform

A modern SaaS platform for threat intelligence, cybersecurity monitoring, and threat management. Built with React, Vite, and Firebase, providing a comprehensive dashboard for security professionals and organizations.

## Overview

Ctrl Threats is a full-stack SaaS application designed to help organizations monitor, analyze, and respond to cybersecurity threats in real-time. The platform combines advanced threat detection capabilities with an intuitive user interface built on modern web technologies.

## Architecture

The project is structured as a full-stack application with two main components:

```
ctrl-threats-new/
├── vite-project/          # Frontend application (React + Vite)
└── Backend/               # Backend services (to be populated)
```

### Technology Stack

#### Frontend (vite-project)
- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.3.1
- **Styling**: Tailwind CSS 3.4.19 + PostCSS
- **Routing**: React Router DOM 7.13.0
- **3D Graphics**: Three.js 0.182.0
- **Animations**: Framer Motion 12.34.2
- **Backend**: Firebase 12.9.0
- **Linting**: ESLint + React plugins

#### Backend
- Node.js/Express (recommended)
- Firebase (authentication, database)
- Additional services TBD

## Features

- **User Authentication**: Secure login and registration system powered by Firebase
- **Interactive Dashboard**: Real-time threat monitoring and analytics
- **Threat Intelligence**: Comprehensive threat data visualization
- **3D Visualizations**: Advanced Three.js-powered visualizations
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Modern UI Components**: Glass morphism cards and custom UI elements

## Project Structure

### Frontend (`vite-project/`)

```
src/
├── components/           # Reusable React components
│   ├── layout/          # Layout components (Navbar, Footer)
│   ├── sections/        # Page sections (Hero, Features, Benefits, etc.)
│   └── ui/              # UI primitives (Button, Card, Container, etc.)
├── pages/               # Full page components
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Contact.jsx
│   └── Beta.jsx
├── constants/           # Application constants (navLinks, etc.)
├── assets/              # Static assets
├── App.jsx              # Main App component
├── App.css              # Global styles
├── firebase.js          # Firebase configuration
└── main.jsx             # Application entry point
```

### Configuration Files

- **vite.config.js**: Vite build configuration
- **tailwind.config.js**: Tailwind CSS theming
- **postcss.config.js**: PostCSS plugins configuration
- **eslint.config.js**: ESLint rules configuration

## Prerequisites

- Node.js 18+ and npm
- Git
- Firebase account and credentials
- Modern web browser

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-org/ctrl-threats-new.git
cd ctrl-threats-new
```

### 2. Install Frontend Dependencies

```bash
cd vite-project
npm install
```

### 3. Configure Firebase

Create a `.env` file in the `vite-project` directory with your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4. Backend Setup

Backend setup instructions will be added once services are configured in the `Backend/` directory.

## Getting Started

### Development Server

Run the development server with hot module replacement (HMR):

```bash
cd vite-project
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
cd vite-project
npm run build
```

This generates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
cd vite-project
npm run preview
```

## Available Scripts

**In `vite-project/` directory:**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Component Architecture

### Layout Components
- **Navbar**: Main navigation component
- **Footer**: Footer component

### Section Components
- **HeroSection**: Landing page hero
- **FeaturesSection**: Product features showcase
- **BenefitsSection**: Key benefits
- **FAQSection**: Frequently asked questions
- **TestimonialsSection**: User testimonials
- **IntegrationsSection**: Third-party integrations
- **MobileAppSection**: Mobile application information
- **ProductsSection**: Product offerings
- **CTASection**: Call-to-action section

### UI Components
- **Button**: Customizable button component
- **GlassCard**: Glass morphism card component
- **Container**: Layout container
- **SectionWrapper**: Section layout wrapper
- **CircuitBackground**: Decorative circuit board background

## Pages

- **Home** (`/`): Landing page with product overview
- **Dashboard** (`/dashboard`): Main user dashboard for threat monitoring
- **Login** (`/login`): User authentication
- **Register** (`/register`): New user registration
- **Contact** (`/contact`): Contact form
- **Beta** (`/beta`): Beta program information

## Development Guidelines

### Code Quality

- Run ESLint before committing: `npm run lint`
- Follow React best practices and hooks conventions
- Use Tailwind CSS for styling (avoid inline CSS when possible)
- Keep components modular and reusable

### Component Development

- Use functional components and React hooks
- Maintain proper prop validation
- Keep components focused on single responsibility
- Use Framer Motion for animations when needed

### Styling

- Utilize Tailwind CSS utility classes
- Maintain consistent spacing and colors
- Use responsive design patterns
- Follow mobile-first approach

## Deployment

### Frontend Deployment Options
- Vercel (recommended for Vite/React apps)
- Netlify
- Firebase Hosting
- AWS Amplify
- GitHub Pages

### Environment Variables
Ensure all Firebase credentials and API keys are securely configured in production environment variables.

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -am 'Add new feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit a pull request

## Performance Optimization

- Vite provides fast development with HMR
- Tailwind CSS is optimized for production with PurgeCSS
- React 19.2.0 provides performance improvements
- Three.js visualizations are GPU-accelerated

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will use the next available port. Check the terminal output for the actual URL.

### Firebase Connection Issues
- Verify Firebase credentials in `.env`
- Check Firebase console for any errors
- Ensure CORS is properly configured

### Build Errors
- Clear `node_modules` and `dist` directories
- Reinstall dependencies: `npm install`
- Check for TypeScript/ESLint errors: `npm run lint`

## Support

For issues, feature requests, or questions:
- Create an issue on GitHub
- Contact the development team
- Check existing documentation

## License

[Add your license information here]

## Changelog

### Version 0.0.0 (Initial Release)
- Initial project setup
- Core landing page structure
- Dashboard placeholder
- Authentication pages
- Firebase integration

---

**Last Updated**: February 2026  
**Status**: In Development
