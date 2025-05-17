# Shinka

Shinka - Evolve Your Life
Overview
Shinka is a life-tracking and personal growth app designed to help you evolve, improve, and level up your daily life. Whether you’re focused on building better habits, improving productivity, or fostering mental well-being, Shinka empowers you to track your journey of self-evolution in a personalized and intuitive way. Inspired by the concept of "evolution" (進化), Shinka is your partner in growth, providing the tools to help you progress day by day.

Key Features
Track Your Progress: Log your goals, habits, and milestones to measure personal development.

Daily Challenges & Reminders: Stay on track with daily prompts, challenges, and reminders tailored to your growth goals.

Personalized Insights: Get feedback based on your habits, productivity, and well-being to optimize your journey.

Habit Tracker: Stay consistent with habit-building tools and track your daily streaks.

Growth Reports: Visual reports showing your evolution over time, providing insights into your personal development.

Motivational Quotes & Tips: Get inspired with handpicked quotes, tips, and techniques to boost your progress.

## Features
- Add new todos
- Remove existing todos
- Toggle completion status of todos
- Responsive design with Tailwind CSS

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/shinka-app.git
   ```
2. Navigate to the project directory:
   ```
   cd shinka-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm run dev
```
The application will be available at `http://localhost:5173`.

### Building for Production
To create a production build, run:
```
npm run build
```
This will generate a `dist` folder with the optimized application.

### Deploying to GitHub Pages
1. Install the `gh-pages` package if you haven't already:
   ```
   npm install --save-dev gh-pages
   ```
2. Add the following scripts to your `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Deploy the application:   ```
   npm run deploy
   ```

## License
This project is licensed under the MIT License. See the LICENSE file for details.