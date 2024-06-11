function generarTablas() {
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

function leerTablas() {
    let numProcesos = document.getElementById('filas').value
    let numRecursos = document.getElementById('columnas').value;
    let asignacion = leerMatrizAsignacion();
    let solicitud = leerMatrizSolicitud();
    let disponibilidad = leerVectorDisponibilidad();
    let existencia = leerVectorExistencia();

    console.log("Cantidad de Procesos:", numProcesos);
    console.log("Cantidad de Recursos:", numRecursos);
    console.log("Matriz de Asignación:", asignacion);
    console.log("Matriz de Solicitud:", solicitud);
    console.log("Vector de Disponibilidad:", disponibilidad);
    console.log("Vector de Existencia:", existencia);
}

// Crear MA vacia
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

// Crear MS vacia
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

// Crear VD vacio
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

// Crear VE vacio
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

// Leer datos VD
function leerVectorDisponibilidad() {
    let vectorD = [];
    let tablaVD = document.getElementById("vectorDisponibilidad");
    let fila = tablaVD.rows[0];

    for (let i = 0; i < fila.cells.length; i++) {
        let celda = fila.cells[i];
        let valor = parseInt(celda.querySelector('input').value);
        vectorD.push(valor);
    }

    return vectorD;
}

// Leer datos VE
function leerVectorExistencia() {
    let vectorE = [];
    let tablaVE = document.getElementById("vectorExistencia");
    let fila = tablaVE.rows[0];

    for (let i = 0; i < fila.cells.length; i++) {
        let celda = fila.cells[i];
        let valor = parseInt(celda.querySelector('input').value);
        vectorE.push(valor);
    }

    return vectorE;
}

function simularSLI() {
    // Función para leer los valores de la SLI


    // Función para liberar un proceso
    function liberarProceso(proceso) {
        for (let i = 0; i < numRecursos; i++) {
            disponibilidad[i] += asignacion[proceso][i];
        }
    }

    // Función para calcular la disponibilidad inicial
    function calcularDisponibilidadInicial() {
        let asignacionTotal = new Array(numRecursos).fill(0);
        for (let j = 0; j < numRecursos; j++) {
            for (let i = 0; i < numProcesos; i++) {
                asignacionTotal[j] += asignacion[i][j];
            }
        }
        for (let i = 0; i < numRecursos; i++) {
            disponibilidad[i] = existencia[i] - asignacionTotal[i];
        }
    }

    // Función para verificar si un proceso puede ser liberado
    function puedeSerLiberado(proceso) {
        for (let i = 0; i < numRecursos; i++) {
            if (solicitud[proceso][i] > disponibilidad[i]) {
                return false;
            }
        }
        return true;
    }

    // Simulamos la secuencia libre de interbloqueo
    let procesosLiberados = 0;
    let resultados = document.getElementById("resultados");
    resultados.innerHTML = ''; // Limpia los resultados anteriores

    calcularDisponibilidadInicial();

    while (procesosLiberados < numProcesos) {
        let procesoLiberado = false;
        for (let i = 0; i < numProcesos; i++) {
            if (puedeSerLiberado(i)) {
                liberarProceso(i);
                procesosLiberados++;
                procesoLiberado = true;
                let parrafo = document.createElement("p");
                parrafo.innerHTML = `Proceso ${i} liberado`;
                resultados.appendChild(parrafo);
                break;
            }
        }
        if (!procesoLiberado) {
            let parrafo = document.createElement("p");
            parrafo.innerHTML = "No se puede liberar ningún proceso";
            resultados.appendChild(parrafo);
            break;
        }
    }

    let parrafoFinal = document.createElement("p");
    parrafoFinal.innerHTML = "Secuencia libre de interbloqueo terminada";
    resultados.appendChild(parrafoFinal);

    let parrafoDisponibilidad = document.createElement("p");
    parrafoDisponibilidad.innerHTML = `Disponibilidad final: ${disponibilidad.join(", ")}`;
    resultados.appendChild(parrafoDisponibilidad);

}
