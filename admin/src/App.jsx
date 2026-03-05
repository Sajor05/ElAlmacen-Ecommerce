import "./App.css";
import { Home } from "./pages/Home";
import { Inventory } from "./pages/inventory/Inventory";
import { AuthProvider } from "./context/AuthContext";
import { LoginForm } from "./components/auth/LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/inventario" element={<Inventory />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:_id" element={<Inventory />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
