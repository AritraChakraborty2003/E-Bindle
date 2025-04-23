import Service from "../../Models/services.js";

// Get all services
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get service by title
export const getServiceByTitle = async (req, res) => {
  try {
    const service = await Service.findOne({ title: req.params.title });
    if (!service) return res.status(404).json({ error: "Service not found" });
    res.json(service);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new service
export const createService = async (req, res) => {
  try {
    const newService = await Service.create(req.body);
    res.status(201).json({ data: newService });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update service by title
export const updateServiceByTitle = async (req, res) => {
  try {
    const updated = await Service.findOneAndUpdate(
      { title: req.params.title },
      req.body,
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

// Update a subservice by its title
export const updateSubserviceByTitle = async (req, res) => {
  try {
    const { serviceTitle, subserviceTitle } = req.params;
    const service = await Service.findOne({ title: serviceTitle });
    if (!service) return res.status(404).json({ error: "Service not found" });

    const idx = service.subservice.findIndex(
      (s) => s.title === subserviceTitle
    );
    if (idx === -1)
      return res.status(404).json({ error: "Subservice not found" });

    // Only update provided fields
    service.subservice[idx] = { ...service.subservice[idx]._doc, ...req.body };
    await service.save();

    res.json({ data: service.subservice[idx] });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a subservice by its title
export const deleteSubserviceByTitle = async (req, res) => {
  try {
    const { serviceTitle, subserviceTitle } = req.params;
    const service = await Service.findOne({ title: serviceTitle });
    if (!service) return res.status(404).json({ error: "Service not found" });

    const idx = service.subservice.findIndex(
      (s) => s.title === subserviceTitle
    );
    if (idx === -1)
      return res.status(404).json({ error: "Subservice not found" });

    service.subservice.splice(idx, 1);
    await service.save();

    res.json({ data: "Subservice deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
