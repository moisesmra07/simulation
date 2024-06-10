(function () {

    function simularSecuenciaLibreDeInterbloqueo() {

        // Inicializamos las matrices y vectores
        let numProcesos = document.getElementById("filas");
        let numRecursos = document.getElementById("columnas");
        let tableMA = document.getElementById("matrizA");
        let tableMS = document.getElementById("matrizS");
        let tableVD = document.getElementById("vectorD");
        let tableVE = document.getElementById("vectorE");

        let asignacion = new Array(numProcesos); // filas de MA
        for (let i = 0; i < numProcesos; i++) {
            asignacion[i] = new Array(numRecursos); // columnas de MA
            for (let j = 0; j < numRecursos; j++) {
                asignacion[i][j] = tableMA.rows[i].cells[j].innerHTML; //celda
            }
        }

        let solicitud = new Array(numProcesos); // filas de MS
        for (let i = 0; i < numProcesos; i++) {
            solicitud[i] = new Array(numRecursos); // columnas de MS
            for (let j = 0; j < numRecursos; j++) {
                solicitud[i][j] = tableMS.rows[i].cells[j].innerHTML; //celda
            }
        }

        let disponibilidad = new Array(numRecursos); // columnas del VD
        for (let i = 0; i < numRecursos; i++) {
            disponibilidad[i][j] = tableVD.rows[i].cells[j].innerHTML; //celda
        }

        let existencia = new Array(numRecursos); // columnas del VE
        for (let i = 0; i < numRecursos; i++) {
            existencia[i][j] = tableVE.rows[i].cells[j].innerHTML; //celda
        }

        // Función para liberar un proceso
        function liberarProceso(proceso) {
            if (disponibilidad.length === 0) {
                calcularDisponibilidadInicial();
            }
            for (let i = 0; i < numRecursos; i++) {
                disponibilidad[i] += asignacion[proceso][i];
            }
        }

        // Función para calcular la disponibilidad inicial
        function calcularDisponibilidadInicial() {
            if (disponibilidad.length === 0) {
                let asignacionTotal = new Array(numRecursos);
                for (let i = 0; i < numRecursos; i++) {
                    for (let j = 0; j < numProcesos; j++) {
                        asignacionTotal[i] += asignacion[i][j];
                    }
                }
                disponibilidad = existencia.map((exist, index) => exist - asignacionTotal[index]);
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

        while (procesosLiberados < asignacion.length) {
            let procesoLiberado = false;
            for (let i = 0; i < asignacion.length; i++) {
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
        parrafoDisponibilidad.innerHTML = "Disponibilidad final: " + disponibilidad.join(", ");
        resultados.appendChild(parrafoDisponibilidad);
    }

    // Crear función Main
    function Main() {
        this.ejecutar = function () {
        simularSecuenciaLibreDeInterbloqueo();
        document.getElementById("resultados").style.display = "block";
        };
    }

    // Ejecución de funciones
    var main = new Main();
    main.ejecutar();

})();