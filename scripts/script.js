
function generarMS() {
    let matrizAsignacion = crearMatrizAsignacion();
    let vectorDisponibilidad = crearVectorDisponibilidad();
    let vectorExistencia = crearVectorExistencia();
    let secuenciaProcesos = crearSecuenciaProcesos();

    // Puedes hacer más con los datos generados, como calcular resultados o mostrarlos en la interfaz de usuario
    console.log("Matriz de Asignación:", matrizAsignacion);
    console.log("Vector de Disponibilidad:", vectorDisponibilidad);
    console.log("Vector de Existencia:", vectorExistencia);
    console.log("Secuencia de Procesos:", secuenciaProcesos);
}

function generarDM() {
    let matrizAsignacion = crearMatrizAsignacion();
    let matrizSolicitud = crearMatrizSolicitud();
    let secuenciaProcesos = crearSecuenciaProcesos();

    // Puedes hacer más con los datos generados, como calcular resultados o mostrarlos en la interfaz de usuario
    console.log("Matriz de Asignación:", matrizAsignacion);
    console.log("Matriz de Solicitud:", matrizSolicitud);
    console.log("Secuencia de Procesos:", secuenciaProcesos);
}

function generarAR() {
    let matrizAsignacion = crearMatrizAsignacion();
    let matrizSolicitud = crearMatrizSolicitud();
    let vectorDisponibilidad = crearVectorDisponibilidad();
    let vectorExistencia = crearVectorExistencia();

    // Puedes hacer más con los datos generados, como calcular resultados o mostrarlos en la interfaz de usuario
    console.log("Matriz de Asignación:", matrizAsignacion);
    console.log("Matriz de Solicitud:", matrizSolicitud);
    console.log("Vector de Disponibilidad:", vectorDisponibilidad);
    console.log("Vector de Existencia:", vectorExistencia);
}

// Función para crear una matriz de asignación
function crearMatrizAsignacion() {
    var filas = parseInt(document.getElementById('filas').value);
    var columnas = parseInt(document.getElementById('columnas').value);
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

// Función para crear una matriz de solicitud
function crearMatrizSolicitud() {
    var filas = parseInt(document.getElementById("filas").value);
    var columnas = parseInt(document.getElementById("columnas").value);
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

// Función para crear un vector de disponibilidad
function crearVectorDisponibilidad() {
    var columnas = parseInt(document.getElementById("columnas").value);
    let tablaVD = document.getElementById("vectorDisponibilidad");
    let vectorD = [];

    // Validar entrada
    if (isNaN(columnas) || columnas <= 0) {
        console.error("Número de columnas debe ser un entero positivo.");
        return null; // Retornar null en caso de error
    }

    tablaVD.innerHTML = '';

    let fila = document.createElement('tr');

    for (let i = 0; i < columnas; i++) {
        let celda = document.createElement('td');
        let input = document.createElement('input');
        input.type = 'number';
        celda.appendChild(input);
        fila.appendChild(celda);
    }

    tablaVD.appendChild(fila);

    return vectorD;
}

// Función para crear un vector de existencia
function crearVectorExistencia() {
    var columnas = parseInt(document.getElementById("columnas").value);
    let tablaVE = document.getElementById("vectorExistencia");
    let vectorE = [];

    // Validar entrada
    if (isNaN(columnas) || columnas <= 0) {
        console.error("Número de columnas debe ser un entero positivo.");
        return null; // Retornar null en caso de error
    }

    tablaVE.innerHTML = '';

    let fila = document.createElement('tr');

    for (let i = 0; i < columnas; i++) {
        let celda = document.createElement('td');
        let input = document.createElement('input');
        input.type = 'number';
        celda.appendChild(input);
        fila.appendChild(celda);
    }

    tablaVE.appendChild(fila);

    return vectorE;
}

// Función para crear una secuencia de procesos
function crearSecuenciaProcesos() {
    var columnas = parseInt(document.getElementById("columnas").value);
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



