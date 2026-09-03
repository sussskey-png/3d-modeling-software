# Backend Setup

## Installation

```bash
cd backend
npm install
```

## Environment Variables

Create a `.env` file:

```
PORT=5000
NODE_ENV=development
MAX_FILE_SIZE=50000000
```

## Running the Server

```bash
npm start          # Production mode
npm run dev        # Development with auto-reload
```

## API Endpoints

### Files
- `POST /api/files/upload` - Upload 3D model file
- `GET /api/files/list` - List uploaded files
- `GET /api/files/download/:filename` - Download file

### Analysis
- `POST /api/analysis/analyze` - Analyze model for 3D printing
- `POST /api/analysis/wall-thickness` - Check wall thickness
- `POST /api/analysis/generate-supports` - Generate support structure

### Projects
- `POST /api/projects/create` - Create new project
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get project by ID
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project
- `POST /api/projects/:id/objects` - Save objects to project

## Health Check

```bash
curl http://localhost:5000/api/health
```