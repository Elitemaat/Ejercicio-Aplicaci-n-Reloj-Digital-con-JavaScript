const mostrarReloj = () =>{

    let fecha = new Date();
    let hr = fecha.getHours();
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());

    // Determinar si es AM o PM
    let ampm = hr >= 12 ? 'PM' : 'AM';

    // Convertir formato de 24 horas a 12 horas
    hr = hr % 12;
    hr = hr ? hr : 12; // Si la hora es 0, se convierte en 12

    hr = formatoHora(hr); // Aplicar formato para mostrar con dos dígitos si es necesario

    // Mostrar la hora con AM/PM
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg} ${ampm}`;

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    
    document.getElementById('fecha').innerHTML = fechaTexto;
    document.getElementById('contenedor').classList.toggle('animar'); //Efecto

}

const formatoHora = (hora)=>{

    if(hora < 10)
        hora = '0' + hora;
    
    return hora;

}

setInterval(mostrarReloj, 1000);