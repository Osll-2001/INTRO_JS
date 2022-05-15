let imagen=document.querySelector('img');
let titulo=document.querySelector('h1');
let parrafo=document.querySelector('p');
let botones=document.getElementsByClassName('btn');

const imagenes=[
    {
        nombre:'imagen uno',
        descripcion:'Esta es la imagen 1',
        src:'./img1.jpg'
    },
    {
        nombre:'imagen dos',
        descripcion:'Esta es la imagen 2',
        src:'./img2.jpg'
    },
    {
        nombre:'imagen tres',
        descripcion:'Esta es la imagen 3',
        src:'./img3.jpg'
    }
]

function cambiar(e){
    /*if(e.target.outerText==1){
        imagen.setAttribute('src',imagenes[0].src);
        titulo.innerHTML=imagenes[0].nombre;
        parrafo.innerHTML=imagenes[0].descripcion;
    }
    else if(e.target.outerText==2){
        imagen.setAttribute('src',imagenes[1].src);
        titulo.innerHTML=imagenes[1].nombre;
        parrafo.innerHTML=imagenes[1].descripcion;
    }
    else if(e.target.outerText==3){
        imagen.setAttribute('src',imagenes[2].src);
        titulo.innerHTML=imagenes[2].nombre;
        parrafo.innerHTML=imagenes[2].descripcion;
    }*/
    switch (e.target.outerText) {
        case '1':
            imagen.setAttribute('src',imagenes[0].src);
            titulo.innerHTML=imagenes[0].nombre;
            parrafo.innerHTML=imagenes[0].descripcion;
        break;
        case '2':
            imagen.setAttribute('src',imagenes[1].src);
            titulo.innerHTML=imagenes[1].nombre;
            parrafo.innerHTML=imagenes[1].descripcion;
        break;
        case '3':
            imagen.setAttribute('src',imagenes[2].src);
            titulo.innerHTML=imagenes[2].nombre;
            parrafo.innerHTML=imagenes[2].descripcion;
        break;
        default:
        break;
    }
}

botones[0].addEventListener("click",cambiar);
botones[1].addEventListener("click",cambiar);
botones[2].addEventListener("click",cambiar);