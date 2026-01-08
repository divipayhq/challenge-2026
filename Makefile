.PHONY: install install-backend install-frontend migrate run backend frontend clean

# Install all dependencies
install: install-backend install-frontend migrate

# Install backend dependencies
install-backend:
	cd backend && python3 -m venv venv && . venv/bin/activate && pip install -r requirements.txt

# Install frontend dependencies
install-frontend:
	cd frontend && npm install

# Run database migrations
migrate:
	cd backend && . venv/bin/activate && python manage.py migrate

# Run both servers (backend and frontend)
run:
	@echo "Starting backend on http://localhost:8000"
	@echo "Starting frontend on http://localhost:5173"
	@make backend & make frontend

# Run backend server only
backend:
	cd backend && . venv/bin/activate && python manage.py runserver

# Run frontend server only
frontend:
	cd frontend && npm run dev

# Clean generated files
clean:
	rm -rf backend/venv backend/db.sqlite3 backend/__pycache__
	rm -rf frontend/node_modules frontend/dist
