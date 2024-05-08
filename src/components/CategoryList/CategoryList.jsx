import"./CategoryList.css"
import{NavLink}from "react-router-dom"
const Categorylist= () =>{
    return (
        <nav>
            <ul className="category__List">
                <li><NavLink className={({isActive})=> isActive ? 'active-link': '' } to={'/'}>Inicio</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? 'active-link': '' } to={'/recetas'}>Recetas</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? 'active-link': '' } to={'/nosotros'}>Nosotros</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? 'active-link': '' } to={'/contacto'}>Contacto</NavLink></li>
            </ul>
        </nav>
        
    );
}
export default Categorylist;