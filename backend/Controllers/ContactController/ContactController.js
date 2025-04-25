import Contact from "../../Models/contact.js";

// Get all contacts
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a contact by level
export const getContactByLevel = async (req, res) => {
  try {
    const contact = await Contact.findOne({ level: req.params.level });
    contact
      ? res.json(contact)
      : res.status(404).json({ error: "Contact not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new contact
export const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({ data: contact });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a contact by level
export const updateContactByLevel = async (req, res) => {
  try {
    // 1. Remove level from body to prevent accidental changes
    const { level, ...rest } = req.body;

    // 2. Filter out empty strings and undefined values
    const updateData = Object.entries(rest).reduce((acc, [key, value]) => {
      if (value !== undefined && value !== "") {
        acc[key] = value;
      }
      return acc;
    }, {});

    // 3. Update only specified fields using $set
    const contact = await Contact.findOneAndUpdate(
      { level: req.params.level },
      { $set: updateData },
      { new: true, runValidators: true }
    );

    contact
      ? res.json({ data: contact })
      : res.status(404).json({ error: "Contact not found" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a contact by level
export const deleteContactByLevel = async (req, res) => {
  try {
    const contact = await Contact.findOneAndDelete({ level: req.params.level });
    contact
      ? res.json({ data: "Contact deleted" })
      : res.status(404).json({ error: "Contact not found" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
