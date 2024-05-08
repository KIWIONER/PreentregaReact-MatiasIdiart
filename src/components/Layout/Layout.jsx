import Brand from "../Brand/Brand";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import"./Layout.css";
export default function Layout({children}){
    return ( 
        <div className="layout--container">
            <div className="header__wrapper">
                <Brand />
                <NavBar />
            </div>
            <main className="main--container">{children}</main>
            <Footer />
        </div>
    );
}