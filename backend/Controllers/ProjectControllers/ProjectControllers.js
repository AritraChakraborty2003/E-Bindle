import Project from "../../Models/projects.js";
// Controllers
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

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

export const createProject = async (req, res) => {
  try {
    const { pname, title, descr, techstack, category, time, link } = req.body;
    // Just use file.filename
    const images = req.files?.map((file) => file.filename) || [];

    const project = await Project.create({
      pname,
      title,
      descr,
      techstack: JSON.parse(techstack),
      category,
      time,
      images,
      link,
    });

    res.status(201).json({ data: project });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateProjectByTitle = async (req, res) => {
  try {
    const { title: newTitle, ...updateData } = req.body;
    const filter = { title: req.params.title };

    // Handle image updates
    if (req.files?.length) {
      const newImages = req.files.map((file) => file.filename);
      const existing = await Project.findOne(filter);
      updateData.images = [...existing.images, ...newImages];
    }

    // Handle techstack updates
    if (updateData.techstack) {
      updateData.techstack = JSON.parse(updateData.techstack);
    }

    const project = await Project.findOneAndUpdate(
      filter,
      { $set: newTitle ? { ...updateData, title: newTitle } : updateData },
      { new: true, runValidators: true }
    );

    project
      ? res.json({ data: project })
      : res.status(404).json({ error: "Project not found" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

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
