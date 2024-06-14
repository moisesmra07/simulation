class Proceso {
    constructor(nombre, numPag, instante) {
        this.nombre = nombre;
        this.numPag = numPag;
        this.instante = instante;
    }

    toString() {
        return `(${this.nombre} , ${this.numPag}) ${this.instante}`;
    }
}

// Procesos fijos
let procesos = [
    new Proceso("A", 2, 1),
    new Proceso("A", 0, 2),
    new Proceso("B", 2, 3),
];

let peticiones = [
    new Proceso("A", 0, 5),
    new Proceso("B", 1, 6),
    new Proceso("A", 2, 7),
    new Proceso("B", 0, 8),
    new Proceso("B", 2, 9),
    new Proceso("A", 0, 10),
    new Proceso("A", 2, 11),
    new Proceso("A", 1, 12),
];

function createTable() {
    const table = document.getElementById("table2");

    // Número de filas y columnas
    const rows = 6;
    const cols = 10;

    // Crear la primera fila con los instantes de tiempo
    let tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
        let td = document.createElement("td");
        if (j === 0) {
            td.textContent = "Marcos";
        } else {
            td.textContent = j + 3; // Comienza en 4
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);

    // Crear las demás filas
    for (let i = 1; i < rows; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < cols; j++) {
            let td = document.createElement("td");
            if (j === 0) {
                td.textContent = i - 1; // Marco (0 a 3)
                if (i === 5) {
                    td.textContent = "F/R";
                }

            } else if (j === 1) {
                // Añadir los valores de los procesos en la columna 1
                if (i <= 3) {
                    td.textContent = procesos[i - 1].toString();
                }
                else if (i >= 4) {
                    td.textContent = ""; // Celda vacía
                }
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}

function crearTablaPeticiones() {
    const table1 = document.getElementById("table1");

    let tr = document.createElement("tr");
    peticiones.forEach(proceso => {
        let td = document.createElement("td");
        td.textContent = proceso.toString();
        tr.appendChild(td);
    });
    table1.appendChild(tr);
}

function pintarUltimaFila() {
    const tabla = document.getElementById('table2');
    const filas = tabla.rows;

    if (filas.length > 0) {
        const ultimaFila = filas[filas.length - 1];
        ultimaFila.style.backgroundColor = 'lightblue';
    }
}

crearTablaPeticiones();

createTable();

pintarUltimaFila();

function simularFIFOlocal() {
    let table = document.getElementById("table2");
    let fallos = 0;
    let reemplazos = 0;
    let procesofinal = procesos.slice();

    function procesoExiste(nombre, numPag) {
        for (let i = 0; i < procesofinal.length; i++) {
            if (procesofinal[i].nombre === nombre && procesofinal[i].numPag === numPag) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < peticiones.length; i++) {
        let existe = procesoExiste(peticiones[i].nombre, peticiones[i].numPag);

        if (existe) {
            table.rows[5].cells[i + 2].textContent = "-";
        }

        if (!existe && procesofinal.length < 4) {
            procesofinal.push(peticiones[i]);
            fallos++;
            table.rows[5].cells[i + 2].textContent = "1F";

        } else if (!existe && procesofinal.length >= 4) {
            fallos++;
            reemplazos++;
            reemplazar(peticiones[i].nombre, peticiones[i].numPag, peticiones[i].instante);
            table.rows[5].cells[i + 2].textContent = "1F-1R";
        }

        for (let j = 0; j < procesofinal.length; j++) {
            table.rows[j + 1].cells[i + 2].textContent = procesofinal[j].toString();
        }
    }

    function reemplazar(nombre, numPag, instante) {
        let menortiempo = Infinity;
        let pos = -1;

        for (let i = 0; i < procesofinal.length; i++) {
            if (procesofinal[i].nombre == nombre) {
                if (procesofinal[i].instante < menortiempo) {
                    menortiempo = procesofinal[i].instante;
                    pos = i;
                }
            }
        }
        procesofinal[pos].nombre = nombre;
        procesofinal[pos].numPag = numPag;
        procesofinal[pos].instante = instante;
    }

    let resultado = `Se produjeron: ${fallos} Fallos y ${reemplazos} Reemplazos `;
    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = resultado;
}

function simularFIFOglobal() {
    let table = document.getElementById("table2");
    let fallos = 0;
    let reemplazos = 0;
    let procesofinal = procesos.slice();

    function procesoExiste(nombre, numPag) {
        for (let i = 0; i < procesofinal.length; i++) {
            if (procesofinal[i].nombre === nombre && procesofinal[i].numPag === numPag) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < peticiones.length; i++) {
        let existe = procesoExiste(peticiones[i].nombre, peticiones[i].numPag);

        if (existe) {
            table.rows[5].cells[i + 2].textContent = "-";
        }

        if (!existe && procesofinal.length < 4) {
            procesofinal.push(peticiones[i]);
            fallos++;
            table.rows[5].cells[i + 2].textContent = "1F";

        } else if (!existe && procesofinal.length >= 4) {
            fallos++;
            reemplazos++;
            reemplazar(peticiones[i].nombre, peticiones[i].numPag, peticiones[i].instante);
            table.rows[5].cells[i + 2].textContent = "1F-1R";
        }

        for (let j = 0; j < procesofinal.length; j++) {
            table.rows[j + 1].cells[i + 2].textContent = procesofinal[j].toString();
        }
    }

    function reemplazar(nombre, numPag, instante) {
        let menortiempo = Infinity;
        let pos = -1;

        for (let i = 0; i < procesofinal.length; i++) {
            if (procesofinal[i].instante < menortiempo) {
                menortiempo = procesofinal[i].instante;
                pos = i;
            }
        }
        procesofinal[pos].nombre = nombre;
        procesofinal[pos].numPag = numPag;
        procesofinal[pos].instante = instante;
    }

    let resultado = `Se produjeron: ${fallos} Fallos y ${reemplazos} Reemplazos `;
    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = resultado;
}

function simularLRUlocal() {
    let table = document.getElementById("table2");
    let fallos = 0;
    let reemplazos = 0;
    let procesofinal = procesos.slice(); // Asumiendo que procesos es un arreglo definido fuera de la función

    function procesoExiste(nombre, numPag) {
        for (let i = 0; i < procesofinal.length; i++) {
            if (procesofinal[i].nombre === nombre && procesofinal[i].numPag === numPag) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < peticiones.length; i++) {
        let existe = procesoExiste(peticiones[i].nombre, peticiones[i].numPag);

        if (existe) {
            table.rows[5].cells[i + 2].textContent = "-";
            for (let j = 0; j < procesofinal.length; j++) {
                if (procesofinal[j].nombre === peticiones[i].nombre && procesofinal[j].numPag === peticiones[i].numPag) {
                    procesofinal[j].instante = peticiones[i].instante;
                    break;
                }
            }
        }

        if (!existe && procesofinal.length < 4) {
            procesofinal.push(peticiones[i]);
            fallos++;
            table.rows[5].cells[i + 2].textContent = "1F";
        } else if (!existe && procesofinal.length >= 4) {
            fallos++;
            reemplazos++;
            reemplazar(peticiones[i].nombre, peticiones[i].numPag, peticiones[i].instante);
            table.rows[5].cells[i + 2].textContent = "1F-1R";
        }

        for (let j = 0; j < procesofinal.length; j++) {
            table.rows[j + 1].cells[i + 2].textContent = procesofinal[j].toString();
        }
    }

    function reemplazar(nombre, numPag, instante) {
        let menortiempo = Infinity;
        let pos = -1;

        for (let i = 0; i < procesofinal.length; i++) {
            if (procesofinal[i].nombre == nombre) {
                if (procesofinal[i].instante < menortiempo) {
                    menortiempo = procesofinal[i].instante;
                    pos = i;
                }
            }
        }
        procesofinal[pos].nombre = nombre;
        procesofinal[pos].numPag = numPag;
        procesofinal[pos].instante = instante;
    }

    let resultado = `Se produjeron: ${fallos} Fallos y ${reemplazos} Reemplazos`;
    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = resultado;
}

function simularLRUglobal() {
    let table = document.getElementById("table2");
    let fallos = 0;
    let reemplazos = 0;
    let procesofinal = procesos.slice(); // Asumiendo que procesos es un arreglo definido fuera de la función

    function procesoExiste(nombre, numPag) {
        for (let i = 0; i < procesofinal.length; i++) {
            if (procesofinal[i].nombre === nombre && procesofinal[i].numPag === numPag) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < peticiones.length; i++) {
        let existe = procesoExiste(peticiones[i].nombre, peticiones[i].numPag);

        if (existe) {
            table.rows[5].cells[i + 2].textContent = "-";
            for (let j = 0; j < procesofinal.length; j++) {
                if (procesofinal[j].nombre === peticiones[i].nombre && procesofinal[j].numPag === peticiones[i].numPag) {
                    procesofinal[j].instante = peticiones[i].instante;
                    break;
                }
            }
        }

        if (!existe && procesofinal.length < 4) {
            procesofinal.push(peticiones[i]);
            fallos++;
            table.rows[5].cells[i + 2].textContent = "1F";
        } else if (!existe && procesofinal.length >= 4) {
            fallos++;
            reemplazos++;
            reemplazar(peticiones[i].nombre, peticiones[i].numPag, peticiones[i].instante);
            table.rows[5].cells[i + 2].textContent = "1F-1R";
        }

        for (let j = 0; j < procesofinal.length; j++) {
            table.rows[j + 1].cells[i + 2].textContent = procesofinal[j].toString();
        }
    }

    function reemplazar(nombre, numPag, instante) {
        let menortiempo = Infinity;
        let pos = -1;

        for (let i = 0; i < procesofinal.length; i++) {
                if (procesofinal[i].instante < menortiempo) {
                    menortiempo = procesofinal[i].instante;
                    pos = i;
                }
        }
        procesofinal[pos].nombre = nombre;
        procesofinal[pos].numPag = numPag;
        procesofinal[pos].instante = instante;
    }
    
    let resultado = `Se produjeron: ${fallos} Fallos y ${reemplazos} Reemplazos`;
    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = resultado;
}

let algoritmoActual = '';
let tipoActual = '';

function simularAlgoritmo(algoritmo, tipo) {
    if (algoritmo !== algoritmoActual || tipo !== tipoActual) {
        algoritmoActual = algoritmo;
        tipoActual = tipo;

        switch (algoritmo + tipo) {
            case 'FIFOlocal':
                simularFIFOlocal();
                break;
            case 'LRUlocal':
                simularLRUlocal();
                break;
            case 'ÓPTIMOlocal':
                simularOptimolocal();
                break;
            case 'FIFOglobal':
                simularFIFOglobal();
                break;
            case 'LRUglobal':
                simularLRUglobal();
                break;
            case 'ÓPTIMOglobal':
                simularOptimoglobal();
                break;
            default:
                break;
        }
    }
}

function recargarPagina() {
    location.reload();
}