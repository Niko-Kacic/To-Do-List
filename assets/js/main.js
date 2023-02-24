
const to_dos = [];//arreglo de <li> a agregar

const form = document.getElementById('to-do-form');
form.onsubmit = (e) => {
    e.preventDefault();//detiene comportamiento formulario el refrescar la pagina
    const to_do = document.getElementById('to-do');//captura del input y su valor
    const to_do_text = to_do.value;
    to_do.value = '';//una vez ingresado, remplazar por un vacio
    
    to_dos.push(to_do_text);//agregando <li> al arreglo vacio
    
    const to_do_list = document.getElementById('to-do-list');//se captura la lista
    
    const to_dos_template = to_dos.map(t =>  `<li>${t}</li>` );//con map se devuelve el template de li
 
    to_do_list.innerHTML = to_dos_template.join('');//se agrega html y se les hace join(con strings);
        
}
