# Simple Task Manager Using Redis

_A simple web application that allows users to manage tasks with the help of **Redis** for data storage. This project provides basic functionality to add, display, and remove tasks._

**Demo Video**

<video controls>
  <source src="./demo.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Features

- **Add Tasks:** Users can add new tasks to their task list.
- **Task List:** View the list of tasks with the ability to mark them as completed.
- **Remove Tasks:** Remove tasks from the list.

## Technologies Used

- Node.js (Express) [*must be installed in your machine*]
- Redis for database [*must be installed in your machine*]

## Installation

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mdawoud27/RedisTasks.git
   ```

2. Navigate to the project directory:

   ```bash
   cd RedisTasks/
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start Redis server: Make sure Redis is installed and running on your machine.

5. Run the application:

   ```bash
   npm start
   ```

_The application will be available at_ `http://localhost:6380`.

## Usage

1. **Add a Task**:

   - Enter the task description in the input field and click "Submit".

2. **Task List**:

   - View tasks in the list. Use the checkbox to mark tasks as completed. Completed tasks will be crossed out.

3. **Remove Tasks**:
   - Select the tasks you want to remove and click "Remove".
