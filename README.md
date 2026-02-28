# GTRHub Bar Manager

## Description

GTRHub Bar Manager is a simple and scalable web application for managing a personal bar. It allows users to track beverage stocks, manage cocktail recipes, record consumption history with dates and quantities, and generate basic reports (e.g., low-stock alerts, monthly stats). Built with a modern stack: React for the frontend, Node.js/Express for the backend, and MongoDB for the database. The app is responsive, secured with basic authentication, and deployable on platforms like Vercel or Heroku.

This project was developed through a collaborative squad-based approach using AI agents, ensuring comprehensive planning, design, coding, testing, and documentation.

## Features

- **Stock Tracking**: Add, update, and monitor beverage inventory with low-stock alerts.
- **Recipe Management**: Create, edit, and search cocktail recipes linked to stock.
- **Consumption History**: Log drinks served with timestamps and automatic stock deduction.
- **Reports**: Generate insights like usage stats and alerts.
- **Authentication**: Basic login for secure access.
- **Responsive UI**: Works on mobile and desktop.

## Prerequisites

- Node.js v16+ installed.
- MongoDB instance (local or cloud like MongoDB Atlas).
- Git for cloning the repo.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/guygtr/gtrhub-bar-manager.git
   cd gtrhub-bar-manager
   ```

2. **Backend Setup**:
   - Navigate to `/backend`.
   - Install dependencies: `npm install`.
   - Create a `.env` file with:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     ```
   - Start the backend: `npm start`.

3. **Frontend Setup**:
   - Navigate to `/frontend`.
   - Install dependencies: `npm install`.
   - Start the frontend: `npm start` (runs on http://localhost:3000).

4. Access the app in your browser and login (default credentials for testing: admin/admin – change in production).

## Usage

- **Stock Management**: Go to /stock to add/view/update items.
- **Recipes**: Go to /recipes to create/search recipes.
- **History & Reports**: Access via dashboard for logs and insights.

For detailed docs, see backend/README.md and frontend/PLAN.md.

## Contributing

Fork the repo, create a branch, and submit a PR. Follow the code style in existing files.

## License

MIT License. See LICENSE for details.

---

*Project initiated by Guy via Jarvis AI. Last updated: 2026-02-26.*
