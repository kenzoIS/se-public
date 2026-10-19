# HappyTails Pet Services Frontend

HappyTails is a React-based pet-care service platform developed to digitize customer-facing workflows for grooming, boarding, party bookings, pet café services, and related pet-service interactions. This repository contains the frontend implementation built with React 19 and Vite, with reusable components, routed user flows, and service-oriented booking interfaces.

## Highlights

- Implements structured customer workflows for pet-service discovery, appointment booking, service selection, scheduling, confirmation, and completion.
- Uses React Router to separate major user journeys and page-level application states.
- Provides reusable React components for navigation, service cards, booking interfaces, forms, and responsive UI elements.
- Includes calendar-based appointment scheduling and booking confirmation flows.
- Applies client-side validation and workflow logic for service selections and booking-related inputs.
- Uses environment-based configuration so API or service endpoints can be changed without hardcoding deployment-specific values.
- Developed with QA-focused validation of core user journeys, including form validation, booking logic, pricing-related interactions, and build/lint checks.

## Project Structure

```text
se-public/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Images and media used by the UI
│   ├── components/         # Reusable React components
│   ├── pages/              # Route-level application screens
│   ├── App.jsx             # Main application routing/layout
│   ├── App.css             # Application-level styles
│   └── main.jsx            # React entry point
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Tech Stack

- React 19
- Vite 7
- JavaScript
- React Router
- Bootstrap 5
- React Bootstrap
- React Bootstrap Icons
- React Icons
- React Calendar
- ESLint

## Main User Flow

A core grooming-booking flow is organized as:

```text
Home
  ↓
Grooming Services
  ↓
Book Appointment
  ↓
Choose Service
  ↓
Schedule Appointment
  ↓
Booking Confirmation
  ↓
Appointment Confirmed
```

Additional screens and assets support the broader HappyTails pet-service experience.

## Environment Setup

The application should use environment variables for configuration that differs between development and deployment environments.

If an API endpoint is required by the application, create a local `.env` file in the project root and define the corresponding Vite variable, for example:

```env
VITE_API_URL=http://localhost:3000
```

Only variables prefixed with `VITE_` are exposed to Vite client code. Do not place passwords, private API keys, database credentials, or server-side secrets in frontend environment variables.

## Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/kenzoIS/se-public.git
cd se-public
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will display the local development URL in the terminal.

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

## Development Notes

- Keep reusable UI logic inside components rather than duplicating it across pages.
- Maintain route-level separation for independent customer workflows.
- Run ESLint before committing significant frontend changes:

```bash
npm run lint
```

- Local environment files, generated build output, caches, and installed dependencies should remain excluded from version control.
