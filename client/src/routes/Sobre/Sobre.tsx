import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import orangelogo from "../../imgs/orangelogo.png"
import "./sobre.css"
const Sobre = () => {
  return (
    <>
      <Navbar></Navbar>
        <div className="about-us-body">
          <div className="about-us-box">
            <div className="about-us">
              <div className="title">
                Sobre Nós
              </div>
              <div className="text">
                A Liv.in é uma empresa de tecnologia que fornece um sistema para administração de condomínios, com o objetivo de transformar e criar condomínios inteligentes.
              </div>
              <div className="text">
                O aplicativo, além de intuitivo, é eficiente e ágil para resolver vários problemas do dia a dia. E tudo isso de forma digital, sem precisar bater de porta em porta, 
                fazendo com o síndico possa abrir mão da papelada e reduzir a burocracia que a função envolve.
              </div>
            </div>
            <div className="company-creation">
              <div className="title">Como a <span className="orange">Liv.in</span> surgiu</div>
              <div className="content">
                <div className="text-area">
                  <div className="text">
                    A Liv.in é uma empresa de tecnologia que fornece um sistema para administração de condomínios, com o objetivo de transformar e criar condomínios inteligentes.
                  </div>
                  <div className="text">
                    O aplicativo, além de intuitivo, é eficiente e ágil para resolver vários problemas do dia a dia. E tudo isso de forma digital, sem precisar bater de porta em 
                    porta, fazendo com o síndico possa abrir mão da papelada e reduzir a burocracia que a função envolve.
                  </div>
                </div>
                <div className="image-area">

                </div>
              </div>
            </div>
              <div className="product">
                <div className="livin">
                  <div className="title">
                    <img src={orangelogo}/>
                    Liv.in
                  </div>
                  <div className="subtitle">Conheça nosso aplicativo</div>
                  <div className="text">
                    A Liv.in oferece uma solução completa para a gestão de vários condomínios de forma simples e rápida. O sistema conecta síndicos, porteiros, condôminos e 
                    administradoras, em um aplicativo e software 100% digital.
                  </div>
                  <div className="text">
                    <span className="underline">Conheça as funcionalidades da Liv.in ➝</span>
                  </div>
                </div>
              </div>
          </div>
          <Footer color=""/>
        </div>
    </>
  );
};
export default Sobre;
