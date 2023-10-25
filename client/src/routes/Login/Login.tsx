// import "./login.css";
import "./login1.css"
import orangeLogo from "../../imgs/orangelogo.png";
import whatsapp from "../../imgs/whatsapp2.png";
import youtube from "../../imgs/youtube2.png";
import instagram from "../../imgs/instagram2.png";
import facebook from "../../imgs/facebook2.png";
import { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Validation from "./LoginValidation";

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  

  const [values, setValues] = useState<FormValues>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (!errors.email && !errors.password) {
      axios
        .post("http://localhost:3300/signin", values)
        .then((res) => {
          if (res.data === "Success") {
            navigate("/");
          } else {
            alert("Credenciais incorretas");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const navigateHome = () => (
    navigate("/")
  )

  return (
    // <div className="login-main">
    //   <div className="login-logo-box" onClick={navigateHome}>
    //     <img src={orangeLogo} className="login-logo-img" alt="Logo" />
    //   </div>
    //   <div className="login-box">
    //     <div className="login-actual">
    //       <a className="login-title">Log in</a>
    //       <form onSubmit={handleSubmit}> {/* Move a função handleSubmit para o onSubmit do formulário */}
    //         <a className="text">E-mail</a>
    //         <input
    //           type="text"
    //           name="email"
    //           placeholder="E-mail"
    //           className="username"
    //           id="username"
    //           required
    //           value={values.email}
    //           onChange={handleInput}
    //         />
    //         <a className="text">Senha</a>
    //         <input
    //           type="password"
    //           name="password"
    //           className="password"
    //           id="password"
    //           required
    //           value={values.password}
    //           onChange={handleInput}
    //         />
            
    //         {errors.email && <span className="text-danger">{errors.email}</span>}

    //         <div className="controls">
    //           <button type="submit" className="button">
    //             Login
    //           </button>
    //           <Link to="/Cadastro" className="cadastre">
    //             Cadastre-se
    //           </Link>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    //   <div className="login-contact-box">
    //     <img className="contact-icon" src={whatsapp} alt="WhatsApp" />
    //     <img className="contact-icon" src={youtube} alt="YouTube" />
    //     <img className="contact-icon" src={instagram} alt="Instagram" />
    //     <img className="contact-icon" src={facebook} alt="Facebook" />
    //   </div>
    // </div>
    <>
      <div className="login-body">
        <div className="logo" onClick={navigateHome}><img src={orangeLogo} /></div>
        <div className="login-box">
          <div className="title">Log in</div>
          <form onSubmit={handleSubmit}> {/* Move a função handleSubmit para o onSubmit do formulário */}

            <input type="text" name="email" placeholder="E-mail" className="username" id="username" required value={values.email} onChange={handleInput} />
            <input type="password" name="password" placeholder="Senha" className="password" id="password" required value={values.password} onChange={handleInput}/>
            
            {errors.email && <span className="text-danger">{errors.email}</span>}

            <div className="controls">
              <button type="submit" className="button">Login</button>
              <Link to="/Cadastro" className="signbtn">Cadastre-se</Link>
            </div>
          </form>
        </div>
        <div className="login-contact-box">
          <img className="contact-icon" src={whatsapp} alt="WhatsApp" />
          <img className="contact-icon" src={youtube} alt="YouTube" />
          <img className="contact-icon" src={instagram} alt="Instagram" />
          <img className="contact-icon" src={facebook} alt="Facebook" />
        </div>
      </div>
    </>
  );
};

export default Login;