import "./App.css"
//import Brand from "./components/Brand";
//import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Layout from "./components/Layout/Layout";
import Receta from "./components/receta/Receta";

const App =()=> {
  
    return (
      <BrowserRouter>
        <Layout>
            <ItemListContainer saludo={"Esta mi tienda online de recetas a domicilio."} />
            <Routes>
                <Route exact path="/" element={<h1>Inicio</h1>} />
                <Route exact path="/recetas" element={<h1>Recetas</h1>} />
                <Route exact path="/nosotros" element={<h1>Nosotros</h1>} />
                <Route exact path="/contacto" element={<h1>Contacto</h1>} />
                <Route exact path="/category/:id" element={<h1>Categoria de recetas</h1>} />
                <Route exact path="/receta/:recetaId" element={<Receta/>} />
                <Route path="/recetas/*" element={<h1>Not Found</h1>} />
            </Routes>
        </Layout>
      </BrowserRouter>
  );
}
export default App;
