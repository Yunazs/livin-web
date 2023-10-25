import Navbar from "../../components/Navbar/Navbar";
import "./faleconosco.css"
import chat from "../../imgs/chat.png"
import telephone from "../../imgs/telephone.png"
const FaleConosco = () => {
  return (
    <>    
      <div className="talk-body">
        <Navbar />
        <div className="title">Fale com a Liv.in</div>
        <div className="talk-box">
          <div className="chat">
            <div className="subtitle">
              <img src={chat} />
              Chat
            </div>
            <div className="text details">
              Precisa de ajuda agora? <br />
              Fale de seg à sex das 09:30h às 12:00h e das 13:30h às 17:30h no chat - 
              balão no canto inferior a direita
            </div>
            <div className="text">&#62; Abrir Chat</div>
          </div>
          <div className="divisor2"></div>
          <div className="telephone">
            <div className="subtitle">
              <img src={telephone} />
              Telephone
            </div>
            <div className="text details">
              Você pode ligar para o Liv.in<br /> 
              de seg à sex das 09:30h às 12:00h e das 13:30h às 17:30h no número abaixo
            </div>
            <div className="text">
              +55 (11) 932914407
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaleConosco;
