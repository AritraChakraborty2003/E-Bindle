import Message from "../../Models/Message.js";

// Get all messages
export const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a message by ID
export const getMessageById = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    message
      ? res.json(message)
      : res.status(404).json({ error: "Message not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new message
export const createMessage = async (req, res) => {
  try {
    const message = await Message.create(req.body);
    res.status(201).json({ data: message });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a message by ID
export const updateMessageById = async (req, res) => {
  try {
    const message = await Message.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    message
      ? res.json({ data: message })
      : res.status(404).json({ error: "Message not found" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a message by ID
export const deleteMessageById = async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    message
      ? res.json({ data: "Message deleted" })
      : res.status(404).json({ error: "Message not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
