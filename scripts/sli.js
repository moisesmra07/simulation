/* Select the table element
var table = document.getElementById("myTable");

// Loop through each row of the table
for (var i = 0; i < table.rows.length; i++) {
    // Loop through each cell of the row
    for (var j = 0; j < table.rows[i].cells.length; j++) {
        // Extract the data from the cell
        var cellData = table.rows[i].cells[j].innerHTML;
        console.log(cellData);
    }
}
*/

(function () {

    //variables globales
    let filas = document.getElementById("filas");
    let columnas = document.getElementById("columnas");
    let tableMA = document.getElementById("matrizA");
    let tableMS = document.getElementById("matrizS");
    let tableVD = document.getElementById("vectorD");
    let tableVE = document.getElementById("vectorE");

    let arregloMA = new Array(filas); // filas de MA
    for (let i = 0; i < filas; i++) {
        arregloMA[i] = new Array(columnas); // columnas de MA
        for (let j = 0; j < columnas; j++) {
            arregloMA[i][j] = tableMA.rows[i].cells[j].innerHTML; //celda
        }
    }

    let arregloMS = new Array(filas); // filas de MS
    for (let i = 0; i < filas; i++) {
        arregloMS[i] = new Array(columnas); // columnas de MS
        for (let j = 0; j < columnas; j++) {
            arregloMS[i][j] = tableMS.rows[i].cells[j].innerHTML; //celda
        }
    }

    let arregloVD = new Array(columnas); // columnas del VD
    for (let i = 0; i < columnas; i++) {
        arregloVD[i][j] = tableVD.rows[i].cells[j].innerHTML; //celda
    }

    let arregloVE = new Array(columnas); // columnas del VE
    for (let i = 0; i < columnas; i++) {
        arregloVE[i][j] = tableVE.rows[i].cells[j].innerHTML; //celda
    }


    function simularalgoritmo(){
        let pos;

        //buscar el primer proceso a ejecutarse
        for (let i = 0; i < filas; i++){
            for (let j = 0; j < columnas; j++){
                if(arregloMS[i][j] <= arregloVD[j]){
                    pos = i;
                }
                else{
                    pos = -1;
                }
            }
        }

        //modificar VD
        let asignacion1erP = arregloVD[pos];
        let newVD = [arregloVD.map((x, i) => x + asignacion1erP[pos])];
        
        let iteracion1 = document.getElementById("primeraiteracion"); // Selecciona el elemento HTML donde se va a mostrar el resultado
        elementoHTML.innerHTML = "DPa = Do + APa =" + newVD; // Inserta el texto y el resultado en el elemento HTML
    }

})