const formBusqueda=document.querySelector("#form-busqueda");
const inputName=document.querySelector("#inputNombre");
const inputAnio=document.querySelector("#inputAnio");
const inputCategoria=document.querySelector("#inputCategoria");
const boxPeliculas=document.querySelector("#box-peliculas");


let datosPelicula={
    nombre:'',
    anio:'',
    categoria:'',
}

document.addEventListener('DOMContentLoaded',()=>{
    rellenarSelects();
    mostrarHTML(peliculas);
});


formBusqueda.addEventListener('submit',(e)=>{
    e.preventDefault();
    datosPelicula.nombre=inputName.value.toLowerCase();
    datosPelicula.anio=inputAnio.value;
    datosPelicula.categoria=inputCategoria.value;
    filtrarPeliculas();
    formBusqueda.reset();
});

function rellenarSelects(){
    var categorias=[];
    var anios=[];
    peliculas.forEach(pelicula => {
        const{nombre,anio,categoria,descripcion,image}=pelicula;
     if(!categorias.includes(categoria)){
            categorias.push(categoria);
            var option = document.createElement("option");
            option.text = categoria;
            option.value=categoria;
            inputCategoria.add(option);
        }
        if(!anios.includes(anio)){
            anios.push(anio);
        }
    });
    //ORDENA LOS AÑOS DEL SELECT
    anios.sort(function(a, b) {return a - b;});
    anios.forEach(anio => {
        var option = document.createElement("option");
            option.text = anio;
            option.value=anio;
            inputAnio.add(option);
    });
}

function mostrarHTML(peliculas){
    peliculas.forEach(pelicula => {
        const{nombre,anio,categoria,descripcion,image}=pelicula;
        const cardPelicula=document.createElement('div');
        cardPelicula.classList.add('col-12','col-xl-6','col-lg-6','col-md-12','mb-3','d-flex');
        cardPelicula.innerHTML=`<div  class="card cardPeliculas flex-row rounded-3">
        <div class="w-50">
            <img src="${image}" class="img-fluid object-fit">
        </div>
        <div class="card-body w-50">
            <h2 class="card-text m-0 text-capitalize">${nombre}</h2>
            <p class="card-text m-2 text-capitalize">${anio}</p>
            <p class="card-text m-2 text-capitalize">${categoria}</p>
            <p class="card-text m-0">${descripcion}</p>
        </div>
    </div>`
        boxPeliculas.appendChild(cardPelicula);
    });
}

function filtrarPeliculas(){
    limpiarHTML();
    const result=peliculas.filter(filtrarNombre).filter(filtrarAnio).filter(filtrarCategoria); 
    if(result.length) mostrarHTML(result);
    else sinResultado('No hay elementos que contengan tu busqueda :(');

    const hayContenido=Object.values(datosPelicula).filter((e)=>e);
    if(!hayContenido.length)sinResultado('Busqueda vacia:(');;
}

function sinResultado(mensaje){
    limpiarHTML();
    const sinResultado=document.createElement('div');
    sinResultado.classList.add('bg-danger','text-white','border-danger','p-4','text-center','w-100');
    sinResultado.textContent=mensaje;
    //lo añadimos a la caja
    boxPeliculas.appendChild(sinResultado);
}

function limpiarHTML(){
    //si nuestra caja tiene un hijo lo borra hasta que no exista ninguno
    while(boxPeliculas.firstChild){
        boxPeliculas.firstChild.remove();
    }
}

function filtrarNombre(pelicula){
    const{nombre}=datosPelicula;
    if(nombre){
        return pelicula.nombre==nombre;
    }

    return pelicula;
}

function filtrarAnio(pelicula){
    const{anio}=datosPelicula;
    if(anio){
        return pelicula.anio==anio;
    }

    return pelicula;
}
function filtrarCategoria(pelicula){
    const{categoria}=datosPelicula;
    if(categoria){
        return pelicula.categoria==categoria;
    }

    return pelicula;
}