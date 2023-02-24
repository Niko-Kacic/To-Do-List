
/*Se alamcenaran las listas en local storage y se agrega un short circuit para el arregl vacio no devuelva null*/
const to_dos = JSON.parse(localStorage.getItem('to_dos')) || [];//arreglo de <li> a agregar

const form = document.getElementById('to-do-form');


const render = () => {
    const to_do_list = document.getElementById('to-do-list');//se captura la lista
    
    const to_dos_template = to_dos.map(t =>  '<li>'+t+'</li>' );//con map se devuelve el template de li
 
    to_do_list.innerHTML = to_dos_template.join('');//se agrega html y se les hace join(con strings);
 
    const elements = document.querySelectorAll('#to-do-list li'); //llamo a los li de la lista
    elements.forEach((elemento, index)=>{
        elemento.addEventListener('click', ()=> {
            elemento.parentNode.removeChild(elemento);//con parentNode que es el nodo padre tiene capacidad eliminar elementos hijos con el metodo removeChild(elemento a borrar);
            to_dos.splice(index, 1);
            updateToDos(to_dos)
            render()//se renderiza la lista para que se actualice la lista de los array con recursividad
        })
    })
}

render();


const updateToDos = (to_dos) => {
    const to_dos_strings = JSON.stringify(to_dos);
    localStorage.setItem('to_dos', to_dos_strings);
}



form.onsubmit = (e) => {
    e.preventDefault();//detiene comportamiento formulario el refrescar la pagina
    const to_do = document.getElementById('to-do');//captura del input y su valor
    const to_do_text = to_do.value;
    to_do.value = '';//una vez ingresado, remplazar por un vacio
    to_dos.push(to_do_text);//agregando <li> al arreglo vacio
    updateToDos(to_dos);
    render(); 
}
