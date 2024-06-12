
function generarTablas() {
    let matrizAsignacion = crearMatrizAsignacion();
    let matrizSolicitud = crearMatrizSolicitud();
    let vectorDisponibilidad = crearVectorDisponibilidad();
    let vectorExistencia = crearVectorExistencia();

    console.log("Matriz de Asignación:", matrizAsignacion);
    console.log("Matriz de Solicitud:", matrizSolicitud);
    console.log("Vector de Disponibilidad:", vectorDisponibilidad);
    console.log("Vector de Existencia:", vectorExistencia);
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

// Crear VD vacio
function crearVectorDisponibilidad() {
    let columnas = parseInt(document.getElementById("columnas").value);
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
    let columnas = parseInt(document.getElementById("columnas").value);
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
    let numProcesos = document.getElementById('filas').value;
    let numRecursos = document.getElementById('columnas').value;
    let asignacion = leerMatrizAsignacion();
    let solicitud = leerMatrizSolicitud();
    let disponibilidad = leerVectorDisponibilidad();
    let existencia = leerVectorExistencia();
    let secuenciaProcesos = [];

    console.log("Cantidad de Procesos:", numProcesos);
    console.log("Cantidad de Recursos:", numRecursos);
    console.log("Matriz de Asignación:", asignacion);
    console.log("Matriz de Solicitud:", solicitud);
    console.log("Vector de Disponibilidad:", disponibilidad);
    console.log("Vector de Existencia:", existencia);

    function calcularDisponibilidadInicial() {
        let vectorAsignacion = [];
        for (let j = 0; j < numRecursos; j++) {
            for (let i = 0; i < numProcesos; i++) {
                vectorAsignacion[j] += asignacion[i][j];
            }
        }

        for (let i = 0; i < numRecursos; i++) {
            disponibilidad[i] = existencia[i] - vectorAsignacion[i];
        }

        return disponibilidad;
    }

    function puedeSerLiberado(proceso) {
        for (let i = 0; i < numRecursos; i++) {
            if (solicitud[proceso][i] > disponibilidad[i]) {
                return false;
            }
        }
        return true;
    }

    function fueLiberado(proceso) {
        for (let i = 0; i < numProcesos; i++) {
            if (secuenciaProcesos[i] === proceso) {
                return true;
            }
        }
        return false;
    }

    function calcularNuevaDisponibilidad(proceso) {
        for (let i = 0; i < numRecursos; i++) {
            disponibilidad[i] += asignacion[proceso][i];
        }
        return disponibilidad;
    }

    if (disponibilidad === 0) {
        calcularDisponibilidadInicial();
    }

    while (secuenciaProcesos.length < numProcesos) {
        for (let i = 0; i < numProcesos; i++) {
            if (!fueLiberado(i) && puedeSerLiberado(i)) {
                secuenciaProcesos.push(i);
                disponibilidad = calcularNuevaDisponibilidad(i);
            }
        }
    }

    let sl = secuenciaProcesos.map(num => `P${num}`);
    let secuencia = sl.join(", ");
    console.log("Una Posible Secuencia Libre de Interbloqueo es: " + secuencia);

    let parrafoDisponibilidad = document.createElement("p");
    parrafoDisponibilidad.innerHTML = `Una Posible Secuencia Libre de Interbloqueo es: ${secuencia}`;
    resultados.appendChild(parrafoDisponibilidad);
}