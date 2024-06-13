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

function createTable() {
    const table = document.getElementById("table2");

    // Número de filas y columnas
    const rows = 5;
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

    // Procesos fijos
    const procesos = [
        new Proceso("A", 2, 1),
        new Proceso("B", 1, 3),
        new Proceso("A", 0, 2),
    ];

    // Crear las demás filas
    for (let i = 1; i < rows; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < cols; j++) {
            let td = document.createElement("td");
            if (j === 0) {
                td.textContent = i - 1; // Marco (0 a 3)
            } else if (j === 1) {
                // Añadir los valores de los procesos en la columna 1
                if (i <= 3) {
                    td.textContent = procesos[i - 1].toString();
                }
                else if (i === 4) {
                    td.textContent = ""; // Celda vacía
                }
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

function crearPeticiones() {
    const peticiones = [
        new Proceso("A", 0, 5),
        new Proceso("B", 1, 6),
        new Proceso("A", 2, 7),
        new Proceso("B", 0, 8),
        new Proceso("B", 2, 9),
        new Proceso("A", 0, 10),
        new Proceso("A", 2, 11),
        new Proceso("A", 1, 12),
    ];

    return peticiones;
}

function crearTablaPeticiones() {
    const peticiones = crearPeticiones();
    const table1 = document.getElementById("table1");

    let tr = document.createElement("tr");
    peticiones.forEach(proceso => {
        let td = document.createElement("td");
        td.textContent = proceso.toString();
        tr.appendChild(td);
    });
    table1.appendChild(tr);
}

// Llamar a la función para crear la tabla de peticiones
crearTablaPeticiones();

// Llamar a la función para crear la tabla
createTable();