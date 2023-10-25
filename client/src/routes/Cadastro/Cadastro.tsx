
import "./cadastro1.css";
import orangeLogo from "../../imgs/orangelogo.png";
import whatsapp from "../../imgs/whatsapp2.png";
import youtube from "../../imgs/youtube2.png";
import instagram from "../../imgs/instagram2.png";
import facebook from "../../imgs/facebook2.png";
import { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Validation from "./RegisterValidation";


interface FormValues {
  name: string;
  email: string;
  password: string;
}

const Cadastro = () => {

      const [values, setValues] = useState<FormValues>({
        name:'',
        email:'',
        password:''
    })

    const navigate = useNavigate()

    const [errors, setErrors] = useState({
      name:"",
      email: "",
      password: ""
    })

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setErrors(Validation(values))
      if(errors.name === "" && errors.email === "" && errors.password === ""){
          axios.post('http://localhost:3300/signup', values)
          .then(res => {
              navigate('/Login')
          })
          .catch(err => {console.log(err)})
      }
  }

  const navigateHome = () => (
    navigate("/")
  )

  return (
    // <div className="signin-main">
    //   <div className="logo-box" onClick={navigateHome}>
    //     <img src={orangeLogo} className="signin-logo-img" />
    //   </div>
    //   <div className="signin-box">
    //     <div className="actual">          
    //       <a className="title">Cadastre-se</a>
    //       <form onSubmit={handleSubmit}>
    //       <a className="text">Nome</a>
    //       <input type="text" name="name" className="inputbox" id="name" onChange={handleInput} ></input>
    //       {errors.name && <span className="text-danger">{errors.name}</span>}
    //       <a className="text">Email</a>
    //       <input type="text" name="email" className="inputbox" id="email" onChange={handleInput} ></input>
    //       {errors.email && <span className="text-danger">{errors.email}</span>}
    //       <a className="text">Senha</a>
    //       <input type="password" name="password" className="inputbox" id="password" onChange={handleInput} required></input>
    //       {errors.password && <span className="text-danger">{errors.password}</span>}
    //       <a className="text">Confirme a senha</a>
    //       <input type="password" name="passwordCheck" className="inputbox" id="passwordCheck" required></input>
          
    //       <div className="constrols">
    //         <input type="checkbox" name="useTerms" className="checkBox" id="checkBox" required></input>
    //         <a className="terms">Eu aceito os termos de uso</a>
    //       </div>
    //       <div className="controls">
    //         <input type="submit" value="Cadastrar" className="button" ></input>
    //         <Link to="/Login" className="logue">Login</Link>
    //       </div>
    //       </form>
    //     </div>
    //   </div>
    //   <div className="contact-box">
    //     <img className="contact-icon" src={whatsapp}></img>
    //     <img className="contact-icon" src={youtube}></img>
    //     <img className="contact-icon" src={instagram}></img>
    //     <img className="contact-icon" src={facebook}></img>
    //   </div>
    // </div>
    <>
      <div className="signin-body">
        <div className="logo" onClick={navigateHome}><img src={orangeLogo} /></div>
        <div className="signin-box">
          <div className="title">Log in</div>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nome" className="inputbox" id="name" onChange={handleInput} ></input>
            {errors.name && <span className="text-danger">{errors.name}</span>}

            <input type="text" name="email" placeholder="E-mail" className="inputbox" id="email" onChange={handleInput} ></input>
            {errors.email && <span className="text-danger">{errors.email}</span>}

            <input type="password" name="password" placeholder="Senha" className="inputbox" id="password" onChange={handleInput} required></input>
            {errors.password && <span className="text-danger">{errors.password}</span>}

            <input type="password" name="passwordCheck" placeholder="Confirme a senha" className="inputbox" id="passwordCheck" required></input>
            
            
            <div className="controls">
              <input type="checkbox" name="useTerms" className="checkBox" id="checkBox" required></input>
              <a className="terms">Eu aceito os termos de uso</a>
            </div>
            <div className="controls">
              <button type="submit" className="button">Cadastrar</button>
              <Link to="/Login" className="logbtn">Login</Link>
            </div>
          </form>
        </div>
        <div className="signin-contact-box">
          <img className="contact-icon" src={whatsapp} alt="WhatsApp" />
          <img className="contact-icon" src={youtube} alt="YouTube" />
          <img className="contact-icon" src={instagram} alt="Instagram" />
          <img className="contact-icon" src={facebook} alt="Facebook" />
        </div>
      </div>
    </>
  );
};

export default Cadastro;
