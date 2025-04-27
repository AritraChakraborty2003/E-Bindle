import Service from "../../Models/services.js";

// Get all services
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get service by title
export const getServiceByTitle = async (req, res) => {
  try {
    const service = await Service.findOne({ title: req.params.title });
    service
      ? res.json({ data: service })
      : res.status(404).json({ error: "Service not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new service (handles multiple subimages)
export const createService = async (req, res) => {
  try {
    const { title, description, subservice } = req.body;
    if (!title) return res.status(400).json({ error: "Title is required" });

    // Handle multiple subimages upload
    const subimages = req.files?.map((file) => file.filename) || [];
    // subservice can be a JSON string or array
    const subserviceArr =
      typeof subservice === "string" ? JSON.parse(subservice) : subservice;

    const newService = await Service.create({
      title,
      description,
      subimages,
      subservice: subserviceArr || [],
    });

    res.status(201).json({ data: newService });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update service by title (can add more subimages)
export const updateServiceByTitle = async (req, res) => {
  try {
    const { title: newTitle, ...updateData } = req.body;
    const filter = { title: req.params.title };

    // Handle new subimages
    if (req.files?.length) {
      const existing = await Service.findOne(filter);
      const newSubimages = req.files.map((file) => file.filename);
      updateData.subimages = [...(existing?.subimages || []), ...newSubimages];
    }

    // Handle subservice updates
    if (updateData.subservice) {
      updateData.subservice =
        typeof updateData.subservice === "string"
          ? JSON.parse(updateData.subservice)
          : updateData.subservice;
    }

    // Allow title change
    if (newTitle) updateData.title = newTitle;

    const updated = await Service.findOneAndUpdate(
      filter,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    updated
      ? res.json({ data: updated })
      : res.status(404).json({ error: "Service not found" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete service by title
export const deleteServiceByTitle = async (req, res) => {
  try {
    const deleted = await Service.findOneAndDelete({ title: req.params.title });
    deleted
      ? res.json({ data: "Service deleted" })
      : res.status(404).json({ error: "Service not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
