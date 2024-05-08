import Item from "./Item";
import "./Item.css"

export default function ItemList ({products}) {
    return ( 
        <div className='Item'>
            {products.map((product) =>(
                <Item key={product.id} item={product}/>
            ))}
        </div>
    );
}