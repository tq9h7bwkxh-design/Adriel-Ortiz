# FC 25-style Soccer Game

This project is a complete soccer game built with a Node.js/Express backend and a React frontend. It includes multiplayer and single-player modes, AI opponents, player management, and more.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Directory Structure](#directory-structure)
- [Game Mechanics](#game-mechanics)
- [Contributing](#contributing)
- [License](#license)

## Features
- Real-time multiplayer with WebSocket support
- Single-player mode with AI opponents
- Player management and team customization
- Career progression system
- Complete gaming mechanics
- Match statistics and replay system

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/tq9h7bwkxh-design/Adriel-Ortiz.git
   cd Adriel-Ortiz
   ```
2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

## Usage
### Starting the server
1. Navigate to the `backend` directory and run:
   ```bash
   npm start
   ```

### Starting the frontend
1. Navigate to the `frontend` directory and run:
   ```bash
   npm start
   ```

## Directory Structure
```
Adriel-Ortiz/
├── backend/
│   ├── server.js             # Main server file
│   ├── routes/                # API routes
│   ├── models/                # Database models
│   └── public/                # Static files
├── frontend/
│   ├── src/
│   │   ├── components/       # React Components
│   │   ├── game/              # Game logic and Three.js setup
│   │   ├── App.js             # Main app file
│   │   └── index.js           # Entry point
└── README.md
```

## Game Mechanics
- **Passing**: Players can pass the ball to teammates.
- **Shooting**: Players can shoot the ball at the goal.
- **Dribbling**: Players can maneuver the ball while running.
- **Formations**: Set team formations before matches.

## Contributing
Contributions are welcome! Please create a pull request or submit an issue.

## License
This project is licensed under the MIT License.