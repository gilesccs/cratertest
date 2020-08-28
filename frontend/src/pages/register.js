import React from "react";

// Header/Footer imports
import Header from "../components/shared/header";
import Search from "../components/shared/search";
import NavBar from "../components/shared/navbar";
import Footer from "../components/shared/footer";
import BreadCrumb from "../components/shared/breadcrumb";

// Page specific imports
import LoginForm from "../components/login/loginForm";
import RegisterForm from "../components/register/registerForm";

function Register() {
  return (
    <div>
      <Header></Header>
      <Search></Search>
      <NavBar></NavBar>
      <BreadCrumb></BreadCrumb>
      <RegisterForm></RegisterForm>
      <Footer></Footer>
    </div>
  );
}

export default Register;
