$(document).ready(function () {

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
        let filas = parseInt($('#filas').val());
        let columnas = parseInt($('#columnas').val());
        let tablaMA = $('#matrizAsignacion');
        let matrizA = [];

        if (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
            console.error("Número de filas y columnas debe ser un entero positivo.");
            return null;
        }

        tablaMA.empty();

        for (let i = 0; i < filas; i++) {
            let fila = $('<tr></tr>');
            let filaArray = [];

            for (let j = 0; j < columnas; j++) {
                let celda = $('<td></td>');
                let input = $('<input type="number">');
                celda.append(input);
                fila.append(celda);
            }

            tablaMA.append(fila);
            matrizA.push(filaArray);
        }

        return matrizA;
    }

    // Crear MS vacia
    function crearMatrizSolicitud() {
        let filas = parseInt($("#filas").val());
        let columnas = parseInt($("#columnas").val());
        let tablaMS = $("#matrizSolicitud");
        let matrizS = [];

        if (isNaN(filas) || isNaN(columnas) || filas <= 0 || columnas <= 0) {
            console.error("Número de filas y columnas debe ser un entero positivo.");
            return null;
        }

        tablaMS.empty();

        for (let i = 0; i < filas; i++) {
            let fila = $('<tr></tr>');
            let filaArray = [];

            for (let j = 0; j < columnas; j++) {
                let celda = $('<td></td>');
                let input = $('<input type="number">');
                celda.append(input);
                fila.append(celda);
            }

            tablaMS.append(fila);
            matrizS.push(filaArray);
        }

        return matrizS;
    }

    // Crear VD vacio
    function crearVectorDisponibilidad() {
        let columnas = parseInt($("#columnas").val());
        let tablaVD = $("#vectorDisponibilidad");
        let vectorD = [];

        if (isNaN(columnas) || columnas <= 0) {
            console.error("Número de columnas debe ser un entero positivo.");
            return null;
        }

        tablaVD.empty();

        let fila = $('<tr></tr>');

        for (let i = 0; i < columnas; i++) {
            let celda = $('<td></td>');
            let input = $('<input type="number">');
            celda.append(input);
            fila.append(celda);
        }

        tablaVD.append(fila);

        return vectorD;
    }

    // Crear VE vacio
    function crearVectorExistencia() {
        let columnas = parseInt($("#columnas").val());
        let tablaVE = $("#vectorExistencia");
        let vectorE = [];

        if (isNaN(columnas) || columnas <= 0) {
            console.error("Número de columnas debe ser un entero positivo.");
            return null;
        }

        tablaVE.empty();

        let fila = $('<tr></tr>');

        for (let i = 0; i < columnas; i++) {
            let celda = $('<td></td>');
            let input = $('<input type="number">');
            celda.append(input);
            fila.append(celda);
        }

        tablaVE.append(fila);

        return vectorE;
    }

    function leerMatrizAsignacion() {
        let matrizA = [];
        let tablaMA = $("#matrizAsignacion");

        tablaMA.find("tr").each(function () {
            let filaArray = [];

            $(this).find("td input").each(function () {
                let valor = parseInt($(this).val());
                filaArray.push(valor);
            });

            matrizA.push(filaArray);
        });

        return matrizA;
    }

    function leerMatrizSolicitud() {
        let matrizS = [];
        let tablaMS = $("#matrizSolicitud");

        tablaMS.find("tr").each(function () {
            let filaArray = [];

            $(this).find("td input").each(function () {
                let valor = parseInt($(this).val());
                filaArray.push(valor);
            });

            matrizS.push(filaArray);
        });

        return matrizS;
    }

    function leerVectorDisponibilidad() {
        let vectorD = [];
        let tablaVD = $("#vectorDisponibilidad");

        tablaVD.find("tr td input").each(function () {
            let valor = parseInt($(this).val());
            vectorD.push(valor);
        });

        return vectorD;
    }

    function leerVectorExistencia() {
        let vectorE = [];
        let tablaVE = $("#vectorExistencia");

        tablaVE.find("tr td input").each(function () {
            let valor = parseInt($(this).val());
            vectorE.push(valor);
        });

        return vectorE;
    }

    function simularSLI() {
        let numProcesos = parseInt($('#filas').val());
        let numRecursos = parseInt($('#columnas').val());
        let asignacion = leerMatrizAsignacion();
        let solicitud = leerMatrizSolicitud();
        let disponibilidad = leerVectorDisponibilidad();
        let existencia = leerVectorExistencia();
        let secuenciaProcesos = [];
        let iteraciones = [];

        function calcularDisponibilidadInicial() {
            let vectorAsignacion = Array(numRecursos).fill(0);
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
            return secuenciaProcesos.includes(proceso);
        }

        function calcularNuevaDisponibilidad(proceso) {
            for (let i = 0; i < numRecursos; i++) {
                disponibilidad[i] += asignacion[proceso][i];
            }
            return disponibilidad;
        }

        if (disponibilidad.length === 0) {
            calcularDisponibilidadInicial();
        }

        while (secuenciaProcesos.length < numProcesos) {
            for (let i = 0; i < numProcesos; i++) {
                if (!fueLiberado(i) && puedeSerLiberado(i)) {
                    let disponibilidadActual = [...disponibilidad];
                    secuenciaProcesos.push(i);
                    disponibilidad = calcularNuevaDisponibilidad(i);

                    iteraciones.push({
                        proceso: `P${i}`,
                        asignacion: asignacion[i],
                        disponibilidadActual: disponibilidadActual,
                        nuevaDisponibilidad: [...disponibilidad]
                    });
                }
            }
        }

        function mostrarSecuencia(secuencia) {
            const tableContainer = $("#tabla-container");
            const table = $("<table></table>");

            let tr = $("<tr></tr>");
            secuencia.forEach((numero) => {
                let td = $("<td></td>").text(`P${numero}`);
                tr.append(td);
            });

            table.append(tr);

            tableContainer.empty();
            tableContainer.append(table);
        }

        function mostrarIteraciones(iteraciones) {
            const iteracionesContainer = $("#iteraciones-container");
            iteracionesContainer.empty();
    
            iteraciones.forEach((iteracion, index) => {
                let div = $("<div></div>").addClass("iteracion");
                div.append(`<p>Iteración ${index + 1}: Proceso ${iteracion.proceso}</p>`);
                div.append(`<p>Asignación de ${iteracion.proceso}: [${iteracion.asignacion.join(", ")}]</p>`);
                div.append(`<p>Disponibilidad anterior: [${iteracion.disponibilidadActual.join(", ")}]</p>`);
                div.append(`<p>Liberar recursos de ${iteracion.proceso}: Nueva Disponibilidad = [${iteracion.nuevaDisponibilidad.join(", ")}]</p>`);
                iteracionesContainer.append(div);
            });
        }

        function mostrarMensaje() {
            $("#mensaje1").show();
            $("#mensaje2").show(); 
        }

        mostrarMensaje();
        mostrarIteraciones(iteraciones);
        mostrarSecuencia(secuenciaProcesos);
    }

    // Asignar eventos a botones
    $("#generar-tablas").click(function () {
        generarTablas();
    });

    $("#simular-sli").click(function () {
        simularSLI();
    });

});
