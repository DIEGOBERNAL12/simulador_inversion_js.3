function simulador(){
    const contPre = document.getElementById("pre_simulation");
    const contPost = document.getElementById("post_simulation");

    contPost.classList.remove('disabled');
    contPre.classList.add('disabled');

    // variables que capturan los valores de los campos
    let Nombres = document.getElementById('cNombres').value;
    let Telefono = document.getElementById('cTelefono').value;
    let Email = document.getElementById('cEmail').value;
    let Monto = document.getElementById('cMonto').value;
    let Tiempo = document.getElementById('cTiempo').value;

    //constantes que capturan y muestran los valores por eso la s de show
    const sTiempo = document.getElementById('sTiempo');
    const sInteres = document.getElementById('sInteres');
    const sTotal = document.getElementById('sTotal');
    const sGanancias = document.getElementById('sGanancias');
    const sNombre = document.getElementById('sNombre');
    const sCorreo = document.getElementById('sCorreo');

    // variabls para realizarlos calculos 
    let ganancia = 0;
    let total = 0;

    switch (Tiempo) {
        case "1":
            // en este case haremos el claculo si el tiempo corresponde a un año
            ganancia = (cMonto * 0.008)*12;
            total = parseInt(cMonto) + parseInt(ganancia);
            sInteres.textContent = '0.8%';
            sTiempo.textContent = '12 MESES';
            break;
        case "2":
            ganancia = (cMonto * 0.013)*24;
            total = parseInt(cMonto) + parseInt(ganancia);
            sInteres.textContent = '1.3%';
            sTiempo.textContent = '24 MESES';
            break;
        case "3":
            ganancia = (cMonto * 0.017)*36;
            total = parseInt(cMonto) + parseInt(ganancia);
            sInteres.textContent = '1.7%';
            sTiempo.textContent = '36 MESES';
            break;
    }
    sTotal.textContent = total;
    sGanancias.textContent = ganancia;
    sNombre.textContent = Nombres;
    sCorreo.textContent = Email;


 
}

document.addEventListener('DOMContentLoaded', function (){
    document.getElementById('calcular').addEventListener('click', simulador);

});