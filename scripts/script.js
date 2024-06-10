//Genera las matrices a partir de la seleccion del simulador
function generarmatricesSLI(){
    crearMatrizA();
    crearMatrizS();
    crearVectorD();
    crearVectorE();
    showSLI();
}

function generarmatricesMS(){
    crearMatrizA();
    crearVectorD();
    crearVectorE();
    crearSecuenciaP();
    showMS();
}

function generarmatricesDM(){
    crearMatrizA();
    crearMatrizS();
    crearSecuenciaP();
    showDM();
}

function generarmatricesAR(){
    crearMatrizA();
    crearMatrizS();
    crearVectorD();
    crearVectorE();
    showAR();    
}
//Crear tablas para matrices y vectores
function crearMatrizA() {
    let filas = document.getElementById('filas').value;
    let columnas = document.getElementById('columnas').value;
    let tabla = document.getElementById('matrizA');

    // Limpiar la tabla existente
    tabla.innerHTML = '';

    for (let i = 0; i < filas; i++) {
      let fila = document.createElement('tr');
      for (let j = 0; j < columnas; j++) {
        let celda = document.createElement('td');
        let input = document.createElement('input');
        input.type = 'text';
        celda.appendChild(input);
        fila.appendChild(celda);
      }
      tabla.appendChild(fila);
    }
}

function crearMatrizS() {
    let filas = document.getElementById('filas').value;
    let columnas = document.getElementById('columnas').value;
    let matrizS = document.getElementById('matrizS');

    // Limpiar la tabla existente
    matrizS.innerHTML = '';

    for (let i = 0; i < filas; i++) {
        let fila = document.createElement('tr');
        for (let j = 0; j < columnas; j++) {
          let celda = document.createElement('td');
          let input = document.createElement('input');
          input.type = 'text';
          celda.appendChild(input);
          fila.appendChild(celda);
        }
        matrizS.appendChild(fila);
    }
}

function crearVectorD() {
    let filas = document.getElementById('filas').value;
    let columnas = document.getElementById('columnas').value;
    let vectorD = document.getElementById('vectorD');

    // Limpiar la tabla existente
    vectorD.innerHTML = '';

    for (let i = 0; i < columnas; i++) {
        let celda = document.createElement('td');
        let input = document.createElement('input');
        input.type = 'text';
        celda.appendChild(input);
        vectorD.appendChild(celda);
    }
}

function crearVectorE() {
    let filas = document.getElementById('filas').value;
    let columnas = document.getElementById('columnas').value;
    let vectorE = document.getElementById('vectorE');

    // Limpiar la tabla existente
    vectorE.innerHTML = '';

    for (let i = 0; i < columnas; i++) {
        let celda = document.createElement('td');
        let input = document.createElement('input');
        input.type = 'text';
        celda.appendChild(input);
        vectorE.appendChild(celda);
    }
}

function crearSecuenciaP() {
    let filas = document.getElementById('filas').value;
    let columnas = document.getElementById('columnas').value;
    let secuenciaP = document.getElementById('secuenciaP');

    // Limpiar la tabla existente
    secuenciaP.innerHTML = '';

    for (let i = 0; i < columnas; i++) {
        let celda = document.createElement('td');
        let input = document.createElement('input');
        input.type = 'text';
        celda.appendChild(input);
        secuenciaP.appendChild(celda);
    }
}
//Mostrar u ocultar las tablas y letreros innecesarios
function showSLI() {
    let input0 = document.getElementById('letreroMA');
    let input1 = document.getElementById('letreroMS');
    let input2 = document.getElementById('letreroVD');
    let input3 = document.getElementById('letreroVE');
    let input4 = document.getElementById('letreroSP');
    let input5 = document.getElementById('matrizA');
    let input6 = document.getElementById('matrizS');
    let input7 = document.getElementById('vectorD');
    let input8 = document.getElementById('vectorE');
    let input9 = document.getElementById('secuenciaP');

        input0.style.display = 'block';
        input1.style.display = 'block';
        input2.style.display = 'block';
        input3.style.display = 'block';
        input4.style.display = 'none';
        input5.style.display = 'block';
        input6.style.display = 'block';
        input7.style.display = 'block';
        input8.style.display = 'block';
        input9.style.display = 'none';
}

function showMS() {
    let input0 = document.getElementById('letreroMA');
    let input1 = document.getElementById('letreroMS');
    let input2 = document.getElementById('letreroVD');
    let input3 = document.getElementById('letreroVE');
    let input4 = document.getElementById('letreroSP');
    let input5 = document.getElementById('matrizA');
    let input6 = document.getElementById('matrizS');
    let input7 = document.getElementById('vectorD');
    let input8 = document.getElementById('vectorE');
    let input9 = document.getElementById('secuenciaP');

        input0.style.display = 'block';
        input1.style.display = 'none';
        input2.style.display = 'block';
        input3.style.display = 'block';
        input4.style.display = 'block';
        input5.style.display = 'block';
        input6.style.display = 'none';
        input7.style.display = 'block';
        input8.style.display = 'block';
        input9.style.display = 'block';
}

function showDM() {
    let input0 = document.getElementById('letreroMA');
    let input1 = document.getElementById('letreroMS');
    let input2 = document.getElementById('letreroVD');
    let input3 = document.getElementById('letreroVE');
    let input4 = document.getElementById('letreroSP');
    let input5 = document.getElementById('matrizA');
    let input6 = document.getElementById('matrizS');
    let input7 = document.getElementById('vectorD');
    let input8 = document.getElementById('vectorE');
    let input9 = document.getElementById('secuenciaP');

        input0.style.display = 'block';
        input1.style.display = 'block';
        input2.style.display = 'none';
        input3.style.display = 'none';
        input4.style.display = 'block';
        input5.style.display = 'block';
        input6.style.display = 'block';
        input7.style.display = 'none';
        input8.style.display = 'none';
        input9.style.display = 'block';
}

function showAR() {
    let input0 = document.getElementById('letreroMA');
    let input1 = document.getElementById('letreroMS');
    let input2 = document.getElementById('letreroVD');
    let input3 = document.getElementById('letreroVE');
    let input4 = document.getElementById('letreroSP');
    let input5 = document.getElementById('matrizA');
    let input6 = document.getElementById('matrizS');
    let input7 = document.getElementById('vectorD');
    let input8 = document.getElementById('vectorE');
    let input9 = document.getElementById('secuenciaP');

        input0.style.display = 'block';
        input1.style.display = 'block';
        input2.style.display = 'block';
        input3.style.display = 'block';
        input4.style.display = 'none';
        input5.style.display = 'block';
        input6.style.display = 'block';
        input7.style.display = 'block';
        input8.style.display = 'block';
        input9.style.display = 'none';
}