# PituChat

PituChat is a modern chat application built with React and TypeScript.
This project was developed as part of the Paragon Group hiring qualification process.
The project uses ESLint and Prettier for code quality and formatting.

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Routing**: React Router v6
- **Deployment**: Netlify
- **Version Control**: Git/GitHub
- **Code Quality**: ESLint, Prettier

## Getting Started

### Prerequisites

- Node.js (v20 or later)
- npm (v9 or later)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/hanscahya/pituchat.git
   cd pituchat
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── assets/              # Static assets
├── components/          # Reusable UI components
├── context/             # React context providers
├── hooks/               # Custom React hooks
├── pages/               # Page components
├── services/            # API services
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
├── App.tsx              # Main App component
└── main.tsx             # Entry point
```

## License

[MIT](LICENSE)
