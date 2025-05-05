import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Admin from "../../Models/admin.js";

// Cookie configuration
const getCookieOptions = () => ({
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
  maxAge: 3600000, // 1 hour
});

// Initial admin registration (run once)
export const registerInitialAdmin = async (req, res) => {
  try {
    const existingAdmin = await Admin.findOne();
    if (existingAdmin) {
      return res.status(400).json({ error: "Initial admin already exists" });
    }

    // Hash the password here
    const saltRounds = parseInt(process.env.SALT_ROUNDS) || 12;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const admin = new Admin({
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role,
    });

    await admin.save();
    res.status(201).json({
      data: {
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Admin login
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email }).select("+password");

    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: admin._id, email: admin.email, role: admin.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    res
      .cookie("adminToken", token, getCookieOptions())
      .json({ data: { email: admin.email, role: admin.role } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Admin logout
export const logoutAdmin = (req, res) => {
  res
    .clearCookie("adminToken", getCookieOptions())
    .json({ data: "Logged out successfully" });
};
// Protected middleware
export const protect = async (req, res, next) => {
  const token = req.cookies?.adminToken;

  if (!token) return res.status(401).json({ error: "Not authenticated" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = await Admin.findById(decoded.id);
    next();
  } catch (err) {
    res
      .clearCookie("adminToken", getCookieOptions())
      .status(401)
      .json({ isLoggedIn: false });
  }
};

// Update admin by email (protected)
export const updateAdminByEmail = async (req, res) => {
  try {
    // If password is being updated, hash it
    if (req.body.password) {
      const saltRounds = parseInt(process.env.SALT_ROUNDS) || 12;
      req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    }

    const admin = await Admin.findOneAndUpdate(
      { email: req.params.email },
      req.body,
      { new: true, runValidators: true }
    ).select("-password");

    if (!admin) return res.status(404).json({ error: "Admin not found" });

    res.json({ data: admin });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update admin password (protected)
export const updateAdminPassword = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id).select("+password");

    if (!(await bcrypt.compare(req.body.oldPassword, admin.password))) {
      return res.status(401).json({ error: "Invalid current password" });
    }

    const saltRounds = parseInt(process.env.SALT_ROUNDS) || 12;
    admin.password = await bcrypt.hash(req.body.newPassword, saltRounds);
    await admin.save();

    res.json({ data: "Password updated successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
