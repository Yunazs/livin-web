import "./termos.css"
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Termos = () =>{
    return(
        <div className="terms-main">
            <Navbar />
            <a>Termos de uso</a><br />
            <a>Tenha bom çenço :D</a>
        </div>
    )
}

export default Termos;