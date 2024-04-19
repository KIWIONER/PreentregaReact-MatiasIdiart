const Button =({callback}) => {
    
    return(
        <div>
        <Button onClick={callback}>agregar al carrito</Button>
        <Button onClick={callback}>quitar del carrito</Button>
        </div>
        
    )
}
export default Button