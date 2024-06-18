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
    let table = document.getElementById("table2");

    let rows = 6;
    let cols = 10;

    let tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
        let td = document.createElement("td");
        if (j === 0) {
            td.textContent = "Marcos";
        } else {
            td.textContent = j + 3;
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);

    for (let i = 1; i < rows; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < cols; j++) {
            let td = document.createElement("td");
            if (j === 0) {
                td.textContent = i - 1;
                if (i === 5) {
                    td.textContent = "F/R";
                }

            } else if (j === 1) {
                if (i <= 3) {
                    td.textContent = procesos[i - 1].toString();
                }
                else if (i >= 4) {
                    td.textContent = "";
                }
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}

function crearTablaPeticiones() {
    let table1 = document.getElementById("table1");

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
        ultimaFila.style.backgroundColor = '#0056b3';
        ultimaFila.style.color = '#ffffff';
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
            $('#divresult').css('display', 'block');
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
            clearInterval(intervalId);
            $('#divresult').css('display', 'block');
            let resultado = `Se produjeron: ${fallos} Fallos y ${reemplazos} Reemplazos `;
            $("#resultado").text(resultado);
            console.log('Proceso completado');
        }
    }, 500);
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
            clearInterval(intervalId);
            $('#divresult').css('display', 'block');
            let resultado = `Se produjeron: ${fallos} Fallos y ${reemplazos} Reemplazos `;
            $("#resultado").text(resultado);
            console.log('Proceso completado');
        }
    }, 500);
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
            $('#divresult').css('display', 'block');
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