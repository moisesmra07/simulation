let numProcesos = document.getElementById('filas').value
let numRecursos = document.getElementById('columnas').value;

function generarTablas() {
    let matrizAsignacion = crearMatrizAsignacion();
    let matrizSolicitud = crearMatrizSolicitud();
    let secuenciaProcesos = crearSecuenciaProcesos();

    console.log("Matriz de Asignación:", matrizAsignacion);
    console.log("Matriz de Solicitud:", matrizSolicitud);
    console.log("Secuencia de Procesos:", secuenciaProcesos);
    
}

function leerTablas() {
    let asignacion = leerMatrizAsignacion();
    let solicitud = leerMatrizSolicitud();
    let secuencia = leerSecuenciaProcesos();

    console.log("Cantidad de Procesos:", numProcesos);
    console.log("Cantidad de Recursos:", numRecursos);
    console.log("Matriz de Asignación:", asignacion);
    console.log("Matriz de Solicitud:", solicitud);
    console.log("Secuencia de Procesos:", secuencia);

}

// Crear MA vacia
function crearMatrizAsignacion() {
    let filas = parseInt(document.getElementById('filas').value);
    let columnas = parseInt(document.getElementById('columnas').value);
    let tablaMA = document.getElementById('matrizAsignacion');
    let matrizA = [];

    // Validar entradas
    if (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
        console.error("Número de filas y columnas debe ser un entero positivo.");
        return null; // Retornar null en caso de error
    }

    tablaMA.innerHTML = '';

    // Crear la tabla
    for (let i = 0; i < filas; i++) {
        let fila = document.createElement('tr');
        let filaArray = [];

        for (let j = 0; j < columnas; j++) {
            let celda = document.createElement('td');
            let input = document.createElement('input');
            input.type = 'number';
            celda.appendChild(input);
            fila.appendChild(celda);
        }

        tablaMA.appendChild(fila);
        matrizA.push(filaArray);
    }

    return matrizA;
}

// Crear MS vacia
function crearMatrizSolicitud() {
    let filas = parseInt(document.getElementById("filas").value);
    let columnas = parseInt(document.getElementById("columnas").value);
    let tablaMS = document.getElementById("matrizSolicitud");
    let matrizS = [];

    // Validar entradas
    if (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
        console.error("Número de filas y columnas debe ser un entero positivo.");
        return null; // Retornar null en caso de error
    }

    tablaMS.innerHTML = '';

    for (let i = 0; i < filas; i++) {
        let fila = document.createElement('tr');
        let filaArray = [];

        for (let j = 0; j < columnas; j++) {
            let celda = document.createElement('td');
            let input = document.createElement('input');
            input.type = 'number';
            celda.appendChild(input);
            fila.appendChild(celda);
        }

        tablaMS.appendChild(fila);
        matrizS.push(filaArray);
    }

    return matrizS;
}

// Crear SP vacio
function crearSecuenciaProcesos() {
    let columnas = parseInt(document.getElementById("columnas").value);
    let tablaSP = document.getElementById("secuenciaProcesos");
    let secuenciaP = [];

    // Validar entrada
    if (isNaN(columnas) || columnas <= 0) {
        console.error("Número de columnas debe ser un entero positivo.");
        return null; // Retornar null en caso de error
    }

    tablaSP.innerHTML = '';

    let fila = document.createElement('tr');

    for (let i = 0; i < columnas; i++) {
        let celda = document.createElement('td');
        let input = document.createElement('input');
        input.type = 'number';
        celda.appendChild(input);
        fila.appendChild(celda);
    }

    tablaSP.appendChild(fila);

    return secuenciaP;
}

// Leer datos MA
function leerMatrizAsignacion() {
    let matrizA = [];
    let tablaMA = document.getElementById("matrizAsignacion");

    for (let i = 0; i < tablaMA.rows.length; i++) {
        let fila = tablaMA.rows[i];
        let filaArray = [];

        for (let j = 0; j < fila.cells.length; j++) {
            let celda = fila.cells[j];
            let valor = parseInt(celda.querySelector('input').value);
            filaArray.push(valor);
        }

        matrizA.push(filaArray);
    }

    return matrizA;
}

// Leer datos MS
function leerMatrizSolicitud() {
    let matrizS = [];
    let tablaMS = document.getElementById("matrizSolicitud");

    for (let i = 0; i < tablaMS.rows.length; i++) {
        let fila = tablaMS.rows[i];
        let filaArray = [];

        for (let j = 0; j < fila.cells.length; j++) {
            let celda = fila.cells[j];
            let valor = parseInt(celda.querySelector('input').value);
            filaArray.push(valor);
        }

        matrizS.push(filaArray);
    }

    return matrizS;
}

// Leer datos SP
function leerSecuenciaProcesos() {
    let secuenciaP = [];
    let tablaSP = document.getElementById("secuenciaProcesos");
    let fila = tablaSP.rows[0];

    for (let i = 0; i < fila.cells.length; i++) {
        let celda = fila.cells[i];
        let valor = parseInt(celda.querySelector('input').value);
        secuenciaP.push(valor);
    }

    return secuenciaP;
}