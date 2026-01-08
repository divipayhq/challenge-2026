# Weel Coding Challenge
## Overview

This application allows users to log expense reports and view them in a table. Users can add new expenses with a title, amount, and date, and delete existing entries.

## Tech Stack

**Backend**
- Python 3.11+
- Django 5.x
- Django REST Framework
- SQLite

**Frontend**
- React 18
- TypeScript
- Vite

## Prerequisites

- Python 3.11 or higher
- Node.js 18 or higher
- npm

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd challenge-2026
   ```

2. Install dependencies:
   ```bash
   make install
   ```
   This will:
   - Create a Python virtual environment
   - Install backend dependencies
   - Install frontend dependencies
   - Run database migrations

## Running the Application

Start both the backend and frontend servers:
```bash
make run
```

- Backend: http://localhost:8000
- Frontend: http://localhost:5173

Open http://localhost:5173 in your browser to use the application.

## Available Commands

| Command | Description |
|---------|-------------|
| `make install` | Install all dependencies and run migrations |
| `make run` | Start both backend and frontend servers |
| `make backend` | Run backend server only |
| `make frontend` | Run frontend server only |
| `make migrate` | Run database migrations |
| `make clean` | Remove generated files (venv, node_modules, db) |

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/expenses/` | List all expenses |
| POST | `/api/expenses/` | Create a new expense |
| GET | `/api/expenses/{id}/` | Get a single expense |
| DELETE | `/api/expenses/{id}/` | Delete an expense |

## Project Structure

```
challenge-2026/
├── Makefile
├── backend/
│   ├── requirements.txt
│   ├── manage.py
│   └── expenses/
│       ├── settings.py
│       ├── urls.py
│       └── api/
│           ├── models.py
│           ├── serializers.py
│           ├── views.py
│           └── urls.py
└── frontend/
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    └── src/
        ├── App.tsx
        ├── App.css
        ├── types.ts
        └── components/
            ├── ExpenseForm.tsx
            └── ExpenseTable.tsx
```
