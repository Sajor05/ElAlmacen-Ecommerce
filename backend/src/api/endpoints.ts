import { Router } from "express";
import { login } from "../controllers/loginController.js";
import { logout } from "../controllers/logoutController.js";
import { register } from "../controllers/registerController.js";
import { verifyToken } from "../controllers/tokenController.js";
import { getQuickaccess } from "../controllers/jsonControllers.js";
import { loginAdmin } from "../controllers/loginAdminController.js";
import { verifyAdminToken } from "../controllers/tokenController.js";
import { createCategory } from "../controllers/inventoryController.js";
import {
  getCategories,
  getParentCategories,
  getChildrenCategories,
} from "../controllers/jsonControllers.js";

const router = Router();

//P O S T
router.post("/login", login);
router.post("/logout", logout);
router.post("/register", register);
router.post("/verify", verifyToken);
router.post("/loginAdmin", loginAdmin);
router.post("/createCategory", createCategory);
router.post("/verifyAdminToken", verifyAdminToken);

//G E T
router.get("/categories", getCategories);
router.get("/quickaccess", getQuickaccess);
router.get("/parent-categories", getParentCategories);
router.get("/children-categories", getChildrenCategories);

export default router;
