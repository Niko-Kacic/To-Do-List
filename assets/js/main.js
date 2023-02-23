
const to_dos = [];//arreglo de <li> a agregar

const form = document.getElementById('to-do-form');
form.onsubmit = (e) => {
    e.preventDefault();//detiene comportamiento formulario el refrescar la pagina
    const to_do = document.getElementById('to-do');//captura del input y su valor
    const to_do_text = to_do.value;
    to_do.value = '';//una vez ingresado, remplazar por un vacio
    
    to_dos.push(to_do_text);//agregando <li> al arreglo vacio
    
    const to_do_list = document.getElementById('to-do-list');//se captura la lista
    to_do_list.innerHTML = '';//Se vacia el elemento <li> por cada iteración no se repita por cada iteración
        
        for(let i = 0; i < to_dos.length ; i++) {
            to_do_list.innerHTML += `<li>${to_dos[i]} </li>`//se agregan elementos a la lista
        }
}
