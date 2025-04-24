import Qoute from "../../Models/Qoute.js";

export const getAllQoutes = async (req, res) => {
  try {
    const qoutes = await Qoute.find();
    res.json(qoutes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getQouteById = async (req, res) => {
  try {
    const qoute = await Qoute.findById(req.params.id);
    qoute
      ? res.json(qoute)
      : res.status(404).json({ error: "Qoute not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createQoute = async (req, res) => {
  try {
    const qoute = await Qoute.create(req.body);
    res.status(201).json({ data: qoute });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateQouteById = async (req, res) => {
  try {
    const qoute = await Qoute.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    qoute
      ? res.json({ data: qoute })
      : res.status(404).json({ error: "Qoute not found" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteQouteById = async (req, res) => {
  try {
    const qoute = await Qoute.findByIdAndDelete(req.params.id);
    qoute
      ? res.json({ data: "Qoute deleted" })
      : res.status(404).json({ error: "Qoute not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
