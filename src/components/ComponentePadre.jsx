

const ComponentePadre= ({text}) =>{
    
    const handleCLick= () =>{
        alert(text)
    }

    return (
        <div>
            <img src="#"></img>
            <button callback={handleCLick} />
        </div>
    )
}
export default ComponentePadre;