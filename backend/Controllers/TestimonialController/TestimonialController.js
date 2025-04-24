// controllers/testimonialController.js
import Testimonial from "../../Models/Testimonial.js";

// Get all testimonials
export const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a testimonial by ID
export const getTestimonialById = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    testimonial
      ? res.json(testimonial)
      : res.status(404).json({ error: "Testimonial not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new testimonial
export const createTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.create(req.body);
    res.status(201).json({ data: testimonial });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a testimonial by ID
export const updateTestimonialById = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    testimonial
      ? res.json({ data: testimonial })
      : res.status(404).json({ error: "Testimonial not found" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a testimonial by ID
export const deleteTestimonialById = async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
    testimonial
      ? res.json({ data: "Testimonial deleted" })
      : res.status(404).json({ error: "Testimonial not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
