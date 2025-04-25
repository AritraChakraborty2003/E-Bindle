import About from "../../Models/about.js";

// Get all About entries
export const getAllAbout = async (req, res) => {
  try {
    const aboutEntries = await About.find();
    res.status(200).json(aboutEntries);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get About entry by section
export const getAboutBySection = async (req, res) => {
  try {
    const about = await About.findOne({ section: req.query.section });
    if (!about) {
      return res
        .status(404)
        .json({ success: false, error: "Section not found" });
    }
    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Create About entry
export const createAbout = async (req, res) => {
  try {
    if (!req.body.section) {
      return res
        .status(400)
        .json({ success: false, error: "Section is required" });
    }

    const { section, title, descr, mainTitle } = req.body;

    const image = req.file.filename;
    const about = new About({
      section: section,
      image: image,
      title: title,
      descr: descr,
      mainTitle: mainTitle,
    });

    about.save();
    res.status(201).json({ success: true, data: about });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
  }
};

// Patch (update) About entry by section (cannot update section itself)
export const patchAboutBySection = async (req, res) => {
  try {
    // Prevent section modification
    if ("section" in req.body) delete req.body.section;

    // Build update object
    const updateData = { ...req.body };

    // If a new image file is uploaded, update the image field
    if (req.file && req.file.filename) {
      updateData.image = req.file.filename;
    }

    const updatedAbout = await About.findOneAndUpdate(
      { section: req.params.section },
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updatedAbout) {
      return res
        .status(404)
        .json({ success: false, error: "Section not found" });
    }
    res.status(200).json({ success: true, data: updatedAbout });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete About entry by section
export const deleteAboutBySection = async (req, res) => {
  try {
    const deletedAbout = await About.findOneAndDelete({
      section: req.params.section,
    });
    if (!deletedAbout) {
      return res
        .status(404)
        .json({ success: false, error: "Section not found" });
    }
    res.status(200).json({ success: true, data: deletedAbout });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
