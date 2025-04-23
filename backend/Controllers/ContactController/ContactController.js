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
    const contact = await Contact.findOneAndUpdate(
      { level: req.params.level },
      req.body,
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

// Update a specific social entry by its text
export const updateSocialByText = async (req, res) => {
  try {
    const { level, socialText } = req.params;
    const contact = await Contact.findOne({ level });
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    const idx = contact.socials.findIndex(
      (social) => social.text === socialText
    );
    if (idx === -1) {
      return res.status(404).json({ error: "Social entry not found" });
    }
    contact.socials[idx] = { ...contact.socials[idx]._doc, ...req.body };
    await contact.save();
    res.json({ data: contact.socials[idx] });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
