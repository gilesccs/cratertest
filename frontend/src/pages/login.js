import React from "react";

// Header/Footer imports
import Header from "../components/shared/header";
import Search from "../components/shared/search";
import NavBar from "../components/shared/navbar";
import Footer from "../components/shared/footer";
import BreadCrumb from "../components/shared/breadcrumb";

// Page specific imports
import LoginForm from "../components/login/loginForm";

function Login() {
  return (
    <div>
      <Header></Header>
      <Search></Search>
      <NavBar></NavBar>
      <BreadCrumb></BreadCrumb>
      <LoginForm></LoginForm>
      <Footer></Footer>
    </div>
  );
}

export default Login;
