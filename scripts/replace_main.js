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
    let table = $("#table2")[0];
    let fallos = 0;
    let reemplazos = 0;
    let procesofinal = procesos.slice();
    let currentPeticion = 0;
    let currentRow = 0;

    function procesoExiste(nombre, numPag) {
        for (let i = 0; i < procesofinal.length; i++) {
            if (procesofinal[i].nombre === nombre && procesofinal[i].numPag === numPag) {
                return true;
            }
        }
        return false;
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

    let intervalId = setInterval(() => {
        if (currentPeticion < peticiones.length) {
            let existe = procesoExiste(peticiones[currentPeticion].nombre, peticiones[currentPeticion].numPag);

            if (currentRow === 0) {
                if (existe) {
                    $($(table.rows[5].cells[currentPeticion + 2])).text("-");
                } else if (!existe && procesofinal.length < 4) {
                    procesofinal.push(peticiones[currentPeticion]);
                    fallos++;
                    $($(table.rows[5].cells[currentPeticion + 2])).text("1F");
                } else if (!existe && procesofinal.length >= 4) {
                    fallos++;
                    reemplazos++;
                    reemplazar(peticiones[currentPeticion].nombre, peticiones[currentPeticion].numPag, peticiones[currentPeticion].instante);
                    $($(table.rows[5].cells[currentPeticion + 2])).text("1F-1R");
                }
            }

            if (currentRow < procesofinal.length) {
                $($(table.rows[currentRow + 1].cells[currentPeticion + 2])).text(procesofinal[currentRow].toString());
                currentRow++;
            } else {
                currentRow = 0;
                currentPeticion++;
            }
        } else {
            clearInterval(intervalId);
            let resultado = `Se produjeron: ${fallos} Fallos y ${reemplazos} Reemplazos `;
            $("#resultado").text(resultado);
            console.log('Proceso completado');
        }
    }, 500);
}

function simularFIFOglobal() {
    let table = $("#table2")[0];
    let fallos = 0;
    let reemplazos = 0;
    let procesofinal = procesos.slice();
    let currentPeticion = 0;
    let currentRow = 0;

    function procesoExiste(nombre, numPag) {
        for (let i = 0; i < procesofinal.length; i++) {
            if (procesofinal[i].nombre === nombre && procesofinal[i].numPag === numPag) {
                return true;
            }
        }
        return false;
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

    let intervalId = setInterval(() => {
        if (currentPeticion < peticiones.length) {
            let existe = procesoExiste(peticiones[currentPeticion].nombre, peticiones[currentPeticion].numPag);

            if (currentRow === 0) {
                if (existe) {
                    $($(table.rows[5].cells[currentPeticion + 2])).text("-");
                } else if (!existe && procesofinal.length < 4) {
                    procesofinal.push(peticiones[currentPeticion]);
                    fallos++;
                    $($(table.rows[5].cells[currentPeticion + 2])).text("1F");
                } else if (!existe && procesofinal.length >= 4) {
                    fallos++;
                    reemplazos++;
                    reemplazar(peticiones[currentPeticion].nombre, peticiones[currentPeticion].numPag, peticiones[currentPeticion].instante);
                    $($(table.rows[5].cells[currentPeticion + 2])).text("1F-1R");
                }
            }

            if (currentRow < procesofinal.length) {
                $($(table.rows[currentRow + 1].cells[currentPeticion + 2])).text(procesofinal[currentRow].toString());
                currentRow++;
            } else {
                currentRow = 0;
                currentPeticion++;
            }
        } else {
            // Cuando se completa el proceso
            clearInterval(intervalId);
            // Mostrar el resultado al completar el proceso
            let resultado = `Se produjeron: ${fallos} Fallos y ${reemplazos} Reemplazos `;
            $("#resultado").text(resultado);
            console.log('Proceso completado');
        }
    }, 500); // Intervalo de 0.5 segundo
}

function simularLRUlocal() {
    let table = $("#table2")[0];
    let fallos = 0;
    let reemplazos = 0;
    let procesofinal = procesos.slice();
    let currentPeticion = 0;
    let currentRow = 0;

    function procesoExiste(nombre, numPag) {
        for (let i = 0; i < procesofinal.length; i++) {
            if (procesofinal[i].nombre === nombre && procesofinal[i].numPag === numPag) {
                procesofinal[i].instante = peticiones[currentPeticion].instante;
                return true;
            }
        }
        return false;
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

    let intervalId = setInterval(() => {
        if (currentPeticion < peticiones.length) {
            let existe = procesoExiste(peticiones[currentPeticion].nombre, peticiones[currentPeticion].numPag);

            if (currentRow === 0) {
                if (existe) {
                    $($(table.rows[5].cells[currentPeticion + 2])).text("-");
                } else if (!existe && procesofinal.length < 4) {
                    procesofinal.push(peticiones[currentPeticion]);
                    fallos++;
                    $($(table.rows[5].cells[currentPeticion + 2])).text("1F");
                } else if (!existe && procesofinal.length >= 4) {
                    fallos++;
                    reemplazos++;
                    reemplazar(peticiones[currentPeticion].nombre, peticiones[currentPeticion].numPag, peticiones[currentPeticion].instante);
                    $($(table.rows[5].cells[currentPeticion + 2])).text("1F-1R");
                }
            }

            if (currentRow < procesofinal.length) {
                $($(table.rows[currentRow + 1].cells[currentPeticion + 2])).text(procesofinal[currentRow].toString());
                currentRow++;
            } else {
                currentRow = 0;
                currentPeticion++;
            }
        } else {
            // Cuando se completa el proceso
            clearInterval(intervalId);
            // Mostrar el resultado al completar el proceso
            let resultado = `Se produjeron: ${fallos} Fallos y ${reemplazos} Reemplazos `;
            $("#resultado").text(resultado);
            console.log('Proceso completado');
        }
    }, 500); // Intervalo de 0.5 segundo
}

function simularLRUglobal() {
    let table = $("#table2")[0];
    let fallos = 0;
    let reemplazos = 0;
    let procesofinal = procesos.slice();
    let currentPeticion = 0;
    let currentRow = 0;

    function procesoExiste(nombre, numPag) {
        for (let i = 0; i < procesofinal.length; i++) {
            if (procesofinal[i].nombre === nombre && procesofinal[i].numPag === numPag) {
                procesofinal[i].instante = peticiones[currentPeticion].instante;
                return true;
            }
        }
        return false;
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

    let intervalId = setInterval(() => {
        if (currentPeticion < peticiones.length) {
            let existe = procesoExiste(peticiones[currentPeticion].nombre, peticiones[currentPeticion].numPag);

            if (currentRow === 0) {
                if (existe) {
                    $($(table.rows[5].cells[currentPeticion + 2])).text("-");
                } else if (!existe && procesofinal.length < 4) {
                    procesofinal.push(peticiones[currentPeticion]);
                    fallos++;
                    $($(table.rows[5].cells[currentPeticion + 2])).text("1F");
                } else if (!existe && procesofinal.length >= 4) {
                    fallos++;
                    reemplazos++;
                    reemplazar(peticiones[currentPeticion].nombre, peticiones[currentPeticion].numPag, peticiones[currentPeticion].instante);
                    $($(table.rows[5].cells[currentPeticion + 2])).text("1F-1R");
                }
            }

            if (currentRow < procesofinal.length) {
                $($(table.rows[currentRow + 1].cells[currentPeticion + 2])).text(procesofinal[currentRow].toString());
                currentRow++;
            } else {
                currentRow = 0;
                currentPeticion++;
            }
        } else {
            clearInterval(intervalId);
            let resultado = `Se produjeron: ${fallos} Fallos y ${reemplazos} Reemplazos `;
            $("#resultado").text(resultado);
            console.log('Proceso completado');
        }
    }, 500);
}

function simularOptimolocal() { //arreglar
    let table = $("#table2")[0];
    let fallos = 0;
    let reemplazos = 0;
    let procesofinal = procesos.slice();
    let currentPeticion = 0;
    let currentRow = 0;

    function procesoExiste(nombre, numPag) {
        for (let i = 0; i < procesofinal.length; i++) {
            if (procesofinal[i].nombre === nombre && procesofinal[i].numPag === numPag) {
                return true;
            }
        }
        return false;
    }

    function reemplazar(nombre, numPag, instante) {
        let indice = -1;
        let pos = -1;
        let posible;
    
        for (let i = 0; i < procesofinal.length; i++) {
            if (procesofinal[i].nombre == nombre) {
                posible = null;
                for (let j = instante + 1; j < peticiones.length; j++) {
                    if (peticiones[j].nombre === procesofinal[i].nombre && peticiones[j].numPag === procesofinal[i].numPag) {
                        posible = procesofinal[i];
                        break;
                    }
                }
                if (!posible) {
                    // No se encontró el proceso en futuras peticiones
                    procesofinal[i].nombre = nombre;
                    procesofinal[i].numPag = numPag;
                    procesofinal[i].instante = instante;
                    return;
                }
                if (posible && peticiones.indexOf(posible) > indice) {
                    indice = peticiones.indexOf(posible);
                    pos = i;
                }
            }
        }
        if (pos !== -1) {
            procesofinal[pos].nombre = nombre;
            procesofinal[pos].numPag = numPag;
            procesofinal[pos].instante = instante;
        }
    }
    


    let intervalId = setInterval(() => {
        if (currentPeticion < peticiones.length) {
            let existe = procesoExiste(peticiones[currentPeticion].nombre, peticiones[currentPeticion].numPag);

            if (currentRow === 0) {
                if (existe) {
                    $($(table.rows[5].cells[currentPeticion + 2])).text("-");
                } else if (!existe && procesofinal.length < 4) {
                    procesofinal.push(peticiones[currentPeticion]);
                    fallos++;
                    $($(table.rows[5].cells[currentPeticion + 2])).text("1F");
                } else if (!existe && procesofinal.length >= 4) {
                    fallos++;
                    reemplazos++;
                    reemplazar(peticiones[currentPeticion].nombre, peticiones[currentPeticion].numPag, peticiones[currentPeticion].instante);
                    $($(table.rows[5].cells[currentPeticion + 2])).text("1F-1R");
                }
            }

            if (currentRow < procesofinal.length) {
                $($(table.rows[currentRow + 1].cells[currentPeticion + 2])).text(procesofinal[currentRow].toString());
                currentRow++;
            } else {
                currentRow = 0;
                currentPeticion++;
            }
        } else {
            clearInterval(intervalId);
            let resultado = `Se produjeron: ${fallos} Fallos y ${reemplazos} Reemplazos `;
            $("#resultado").text(resultado);
            console.log('Proceso completado');
        }
    }, 500);
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