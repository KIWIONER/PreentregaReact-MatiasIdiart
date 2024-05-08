import "./Footer.css"

import Links from "../Links/Links";
import Adress from"../Adress/Adress";
const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer--inner">
                <Links className="Links"/>
                <Adress className="Adress"/>
                
            </div>
            <p>Hecho con amor por KIWI, todos los derechos reservados 2024</p>
        </div>
        
    )
}

export default Footer;