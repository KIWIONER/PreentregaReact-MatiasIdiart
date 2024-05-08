import CardWidget from"../cardWidget/cardWidget"
import Categorylist from "../CategoryList/CategoryList";
import "./NavBar.css"
const NavBar = () => {
    return (
    <div className="navbar__wrapper">
        <Categorylist/>
        <CardWidget/>
    </div>

    )
}
export default NavBar;