import "./footer.css"
import orangeLogo from "../../imgs/orangelogo.png";
import whatsapp from "../../imgs/whatsapp2.png";
import youtube from "../../imgs/youtube2.png";
import instagram from "../../imgs/instagram2.png";
import facebook from "../../imgs/facebook2.png";
import appstore from "../../imgs/appstore.png"
import googleplay from "../../imgs/googleplay.png"
import { Link } from "react-router-dom";

interface FooterProps{
  color: string;
}

const Footer = ({color}: FooterProps) =>{

  return(
    <div className={"footer " + color}>
      <div className="footer-top">
        <div className="logo">
          <img className="img-logo2" src={orangeLogo} />
          <div className="logo-text">O melhor sistema de gerenciamento para o seu condomínio</div>
          <div className="logo-text">Tenha o máximo de conforto para suas atividades condominais com o mínimo de dor de cabeça necessário</div>
        </div>
        <div className="footer-menu">
          <div className="navigation">
            <span className="nav-title">Navegação</span>
            <Link className="footer-links" to="/Sobre">Sobre</Link>
            <Link className="footer-links" to="/Plataforma">Plataforma</Link>
            <Link className="footer-links" to="/Planos">Planos</Link>
          </div>
          <div className="doubts">
            <span className="doubts-title">Dúvidas</span>
            <Link className="footer-links" to="/FaleConosco">Fale Conosco</Link>
            <Link className="footer-links" to="/">Contato</Link>
          </div>
          <div className="system">
            <span className="system-title">Sistema</span>
            <Link className="footer-links" to="/">Suporte</Link>
            <Link className="footer-links" to="/Sobre">7devs</Link>
          </div>
        </div>
        <div className="download">
          <img className="img-download" src={appstore} />
          <img className="img-download" src={googleplay} />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="contacts">
            <img className="contact-icon" src={whatsapp} />
            <img className="contact-icon" src={youtube} />
            <img className="contact-icon" src={instagram} />
            <img className="contact-icon" src={facebook} />
        </div>
        <div className="terms">Termos de uso - Política de privacidade</div>
        <div className="terms">© 2023 Liv.in</div>
      </div>
    </div>
  )
}
export default Footer