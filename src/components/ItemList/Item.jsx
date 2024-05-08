import useCount from "../../hooks/useCount.js";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";

function Item({item}) {
    const {count, increment, decrement} = useCount(0);

    const onAdd = (nombreDeItem, cantidadaLlevar) => {
        console.log('nombreDeItem: ', nombreDeItem);
        console.log('cantidadaLlevar: ', cantidadaLlevar);
    }

    console.log({count, item});

    return(
        <div className="item--container">
            <div className="item--img__container">
                <img className="item--img" src={item.imagen} />
            </div>
            <h2 className="item--title">{item.nombre}</h2>
            <p className="item--description">{item.descripcion}</p>
            <p className="item--price">{item.precio}€</p>
            <div className="item--counter__container">
                <ItemCount stock={item.stock} count={count} 
                    increment={increment} 
                    decrement={decrement}/>
            </div>
            <div className="item--cart__container">
                <button className="item--cart__button" 
                    onClick={() => onAdd(item,count)}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
} 
export default Item;