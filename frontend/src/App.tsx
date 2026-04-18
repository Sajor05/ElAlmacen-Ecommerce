import "./App.css";
import Home from "./pages/home/Home";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginFormPage } from "./pages/auth/login/LoginFormPage";
import { ProductViewCard } from "./models/productView/ProductView";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/zas/login-service-form" element={<LoginFormPage />} />
          <Route
            path="/zas/register-service-form"
            element={<LoginFormPage />}
          />
          <Route path="/zs/product/:_id" element={<ProductViewCard />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
