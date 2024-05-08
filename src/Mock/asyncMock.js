import canelones from "../assets/images/canelones.jpg"
import falafel from"../assets/images/falafel.jpg"
import boniatoFrito from"../assets/images/boniatoFrito.jpg"
import hamburguesa from"../assets/images/hamburguesa.jpg"

const products = [
    {
        id:1,
        nombre:'Canelones veganos de soja',
        stock:10,
        precio:3.99,
        descripcion: 'Canelones rellenos de espinaca, salsa boloñesa y soja texturizada. Un placer tierno para tu paladar con un toque adobado.',
        imagen: canelones
    },
    {
        id:2,
        nombre:'Falafel con salsa de yogurt',
        stock:15,
        precio:4.59,
        descripcion:
        'Tradicional falafel de Marruecos con un toque de especias mediterraneas y salsa de yogurt de coco. Sabor picante y suave',
        imagen: falafel
    },
    {
        id:3,
        nombre:'Boniato frito',
        stock:8,
        precio:6.99,
        descripcion:'Tiras de boniato fritas con salsa de mayonesa y ajo. Con un toque picante para disfrutar de un sabor agridulce.',
        imagen: boniatoFrito
    },
    {
        id:4,
        nombre:'Hamburguesa de bolettus',
        stock:23,
        precio:2.95,
        descripcion:'Pate de soja texturizada salteada con setas Portobello. Acompañada con brotes de remolacha, lechuga y tomate',
        imagen: hamburguesa
    },

]

/*
promise que siempre se resuelve.
const task = new Promise ((resolve, rejected) =>{
    //tarea asincronica 
    resolve(true;)
})
*/

export const getProducts =() => {
    return new Promise((resolve)=>{
        //tarea asincrónica
        setTimeout(()=>{
            resolve(products);
        },2000)
    });
};