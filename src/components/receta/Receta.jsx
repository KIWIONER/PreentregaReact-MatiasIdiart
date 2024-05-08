import{useParams} from "react-router-dom"

export default function Receta(){
    const {recetaId} = useParams();
    return <div>Receta nº {recetaId}</div>


}