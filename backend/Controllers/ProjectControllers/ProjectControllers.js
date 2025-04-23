import Project from "../../Models/projects.js";

// Get all projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json({ data: projects });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a project by title
export const getProjectByTitle = async (req, res) => {
  try {
    const project = await Project.findOne({ title: req.params.title });
    project
      ? res.json({ data: project })
      : res.status(404).json({ error: "Project not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new project
export const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json({ data: project });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a project by title
export const updateProjectByTitle = async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { title: req.params.title },
      req.body,
      { new: true, runValidators: true }
    );
    project
      ? res.json({ data: project })
      : res.status(404).json({ error: "Project not found" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a project by title
export const deleteProjectByTitle = async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ title: req.params.title });
    project
      ? res.json({ data: "Project deleted" })
      : res.status(404).json({ error: "Project not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
