// routes/adminRoutes.js
import express from "express";
import {
  registerInitialAdmin,
  loginAdmin,
  logoutAdmin,
  protect,
  updateAdminByEmail,
  updateAdminPassword,
} from "../../Controllers/AdminController/AdminController.js";

const AdminRouter = express.Router(); // Public routes
AdminRouter.post("/register", registerInitialAdmin);
AdminRouter.post("/login", loginAdmin);
AdminRouter.get("/isLoggedin", protect, (req, res) => {
  res.json({
    status: 200,
    isLoggedIn: true,
    message: "user logged In",
  });
});
AdminRouter.post("/logout", logoutAdmin);
AdminRouter.patch("/update/:email", protect, updateAdminByEmail);
AdminRouter.patch("/update-password", protect, updateAdminPassword);

export default AdminRouter;
