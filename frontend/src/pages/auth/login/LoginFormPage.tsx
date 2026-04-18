import { Navbar } from "../../../components/extends/navbar/Navbar";
import { Footer } from "../../../components/extends/footer/Footer";
import { LoginForm } from "../../../components/forms/LoginForm";

export const LoginFormPage = () => {
  return (
    <>
      <Navbar />
      <LoginForm />
      <Footer />
    </>
  );
};
