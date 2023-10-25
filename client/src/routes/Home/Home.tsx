// import "./home.css"
import "./home1.css"
import iPhone13 from "../../imgs/iPhone13.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import advItem1 from "../../imgs/advantageitem1.png"
import advItem2 from "../../imgs/advantageitem2.png"
import advItem3 from "../../imgs/advantageitem3.png"
import advItem4 from "../../imgs/advantageitem4.png"
import advItem5 from "../../imgs/advantageitem5.png"

const Home = () => {

  const advantages_items = [advItem1, advItem2, advItem3, advItem4, advItem5]
  const advantages_texts = [
    "Economia de tempo ao resolver demandas a qualquer hora e em qualquer lugar",
    "Gestão digital com acesso às informações do condomínio disponíveis 24h",
    "Praticidade para atividades do dia a dia, como entregas e chamados para o síndico",
    "Transparência na gestão financeira, com prestação de contas disponível para todos",
    "Reservem e paguem antecipadamente as comodidades do condomínio."
  ]

  return (
    <>
      <Navbar />
      <div className="home-body">
        <div className="screen welcome">
          <div className="text-area">
            <div className="title">Viva o melhor da vida no seu condomínio com a <span className="orange"> Liv.In!</span></div>
            <div className="text">O melhor sistema de gerenciamento para o seu condomínio</div>
            <div className="text">Tenha o máximo de conforto para suas atividades condominais com o mínimo de dor de cabeça possível</div>
          </div>
          <div className="image-area">
            <div className="circle"><img src={iPhone13} className="cellphone-img" /></div>
          </div>
        </div>

        <div className="divisor-top blue"><div className="divisor-bottom blue-light"></div></div>

        <div className="screen advantages">
          <div className="title">
            Uma nova <span className="orange">Startup </span>
            Uma nova <span className="orange">vida</span>
          </div>
          <div className="portrait">
            <div className="list">
              {advantages_items.map((item) => (
                <div className={"items item-" + (advantages_items.indexOf(item) + 1)}>
                  <img src={item} className="items-image"/>
                  {advantages_texts[advantages_items.indexOf(item)]}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="divisor-top blue-light"><div className="divisor-bottom blue"></div></div>

        <div className=" screen communication">
          <div className="title">
            Comunicação Eficiente
          </div>
          <div className="forum">
            <div className="image-area"></div>
            <div className="text-area">
              <div className="title">Fórum para reclamações anônimas</div>
              <div className="text">
                Sugestões, reclamações, dúvidas, manutenções e solicitações são abertos de forma anônima, eliminando confusões entre os condôminos.
              </div>
            </div>
          </div>
        </div>
        <div className="divisor-top blue"><div className="divisor-bottom blue-light"></div></div>
        <Footer color="blue"/>
      </div>
    </>
  );
};
export default Home;
