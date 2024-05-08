import CardIcon from "../CardIcon/CardIcon"
import{useState} from"react";
import"../CardIcon/CardIcon.css"

const CardWidget = () => {
    const[cardItems, setCardItems]=useState(0);


    return(
        <div className="card--container">
            <CardIcon ancho={50} alto={50}/>
            <span>{cardItems}</span>
        </div>
    )
}
export default CardWidget;