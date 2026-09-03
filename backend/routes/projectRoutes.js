const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// In-memory project storage (in production, use a database)
const projectsFile = path.join(__dirname, '../data/projects.json');

// Ensure data directory exists
const dataDir = path.join(__dirname, '../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const loadProjects = () => {
  try {
    if (fs.existsSync(projectsFile)) {
      const data = fs.readFileSync(projectsFile, 'utf8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error loading projects:', err);
  }
  return [];
};

const saveProjects = (projects) => {
  try {
    fs.writeFileSync(projectsFile, JSON.stringify(projects, null, 2));
  } catch (err) {
    console.error('Error saving projects:', err);
  }
};

// Create new project
router.post('/create', (req, res) => {
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Project name is required' });
  }

  const projects = loadProjects();
  const newProject = {
    id: Date.now().toString(),
    name,
    description: description || '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    objects: [],
    settings: {
      layerHeight: 0.2,
      infillDensity: 20,
      nozzleTemp: 200,
      bedTemp: 60,
    },
  };

  projects.push(newProject);
  saveProjects(projects);

  res.status(201).json({
    success: true,
    project: newProject,
  });
});

// Get all projects
router.get('/', (req, res) => {
  const projects = loadProjects();
  res.json({ projects });
});

// Get project by ID
router.get('/:id', (req, res) => {
  const projects = loadProjects();
  const project = projects.find(p => p.id === req.params.id);

  if (!project) {
    return res.status(404).json({ error: 'Project not found' });
  }

  res.json({ project });
});

// Update project
router.put('/:id', (req, res) => {
  const projects = loadProjects();
  const projectIndex = projects.findIndex(p => p.id === req.params.id);

  if (projectIndex === -1) {
    return res.status(404).json({ error: 'Project not found' });
  }

  projects[projectIndex] = {
    ...projects[projectIndex],
    ...req.body,
    id: projects[projectIndex].id,
    createdAt: projects[projectIndex].createdAt,
    updatedAt: new Date().toISOString(),
  };

  saveProjects(projects);
  res.json({ success: true, project: projects[projectIndex] });
});

// Delete project
router.delete('/:id', (req, res) => {
  const projects = loadProjects();
  const filteredProjects = projects.filter(p => p.id !== req.params.id);

  if (filteredProjects.length === projects.length) {
    return res.status(404).json({ error: 'Project not found' });
  }

  saveProjects(filteredProjects);
  res.json({ success: true, message: 'Project deleted' });
});

// Save objects to project
router.post('/:id/objects', (req, res) => {
  const { objects } = req.body;
  const projects = loadProjects();
  const projectIndex = projects.findIndex(p => p.id === req.params.id);

  if (projectIndex === -1) {
    return res.status(404).json({ error: 'Project not found' });
  }

  projects[projectIndex].objects = objects;
  projects[projectIndex].updatedAt = new Date().toISOString();
  saveProjects(projects);

  res.json({ success: true, project: projects[projectIndex] });
});

module.exports = router;