import "./navbar.css";
import orangelogo from "../../imgs/orangelogo.png";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState} from "react";
// import React from "react"

const Navbar = () => {
  const [active, setActive] = useState(false);
  const links = ["Sobre", "Plataforma", "Fale Conosco"];

  const navigate = useNavigate();
  const navigateHome = () => {
    return navigate("/");
  };
  
  // class menu extends React.Component{
  //   render(){
  //     return (<div></div>)
  //   }
  // }

  const menu = document.querySelector('.navbar-menu');
  const toggleMenu = () =>{
    setActive(!active);
    console.log(menu?.className)
  }

  const [logged, setLogged] = useState(false)
  const toggleLogged = () =>{
    setLogged(!logged);
    console.log(logged);
  }

  return (
    <div className="navbar">
      <div className="clog" onClick={toggleLogged}></div>
      <div className="navbar-brand" onClick={navigateHome}>
        <img src={orangelogo} className="img-logo" />
        <span className="brand-name">Livin</span>
      </div>
      <div className="navbar-links">
        {links.map((item) => (
          <Link to={"/" + item.replace(" ", "")} className="links">{item}</Link>
        ))}
      </div>
      <div className="navbar-login">
      {logged && (
          <>
          
          </>
        )}
        {!logged && (
          <>
            <Button onClick="navigate" text="Login" className="btn-login"></Button>
            <Button onClick="navigate" text="Comece Agora" className="btn-signin"></Button>
          </>
        )}
      </div>
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        <div className="bars"></div>
        <div className="bars"></div>
        <div className="bars"></div>
      </div>
      <div className={!active ? "navbar-menu" : "navbar-menu active"}>
        <div className="navbar-menu-close-icon" onClick={toggleMenu}>
          <div className="bars curved1"></div> 
          <div className="bars curved2"></div> 
        </div>
        <div className="menu-links">
          {links.map((item) => (
            <Link to={"/" + item.replace(" ", "")} className="links">
              {item}
            </Link>          
          ))}
          <Button onClick="navigate" text="Login" className="btn-login"></Button>
          <Button onClick="navigate" text="Comece Agora" className="btn-signin"></Button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
