const InTouch = [{}];

// Get all InTouch entries
export const getAllInTouch = async (req, res) => {
  try {
    const entries = await InTouch.find();
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single InTouch entry by ID
export const getInTouchById = async (req, res) => {
  try {
    const entry = await InTouch.findById(req.params.id);
    entry
      ? res.json(entry)
      : res.status(404).json({ error: "InTouch entry not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new InTouch entry
export const createInTouch = async (req, res) => {
  try {
    const entry = await InTouch.create(req.body);
    res.status(201).json({ data: entry });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update an InTouch entry by ID
export const updateInTouchById = async (req, res) => {
  try {
    const entry = await InTouch.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    entry
      ? res.json({ data: entry })
      : res.status(404).json({ error: "InTouch entry not found" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete an InTouch entry by ID
export const deleteInTouchById = async (req, res) => {
  try {
    const entry = await InTouch.findByIdAndDelete(req.params.id);
    entry
      ? res.json({ data: "InTouch entry deleted" })
      : res.status(404).json({ error: "InTouch entry not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
