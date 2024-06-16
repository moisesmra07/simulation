function calcularEjercicio1(){  
    let DF = parseFloat($("#ex1DF").val());  
    let CP = parseFloat($("#ex1CP").val()); 
    let TP = parseFloat($("#ex1TP").val()); 
    
    let errorMsg1 = $("#ex1error");
    errorMsg1.addClass("d-none");

    if (isNaN(DF) || isNaN(CP) || isNaN(TP)) {
        errorMsg1.text("Error: Campos vacíos o no numéricos.").removeClass("d-none");        
        return;
    }

    if (!Number.isInteger(DF) || DF <= 0 || !Number.isInteger(CP) || CP <= 0 || !Number.isInteger(TP) || TP <= 0) {
        errorMsg1.text("Error: Todos los valores deben ser enteros positivos.").removeClass("d-none");    
        return;
    }

    let MF = Math.pow(2, DF);
    let TM = TP;
    let CM = MF / TM;
    let MV = CP * TP;

    if (!Number.isInteger(CM) || CM <= 0 || !Number.isInteger(MV) || MV <= 0) {
        errorMsg1.text("Error: Los resultados deben ser enteros positivos.").removeClass("d-none");    
        return;
    }

    function convertirABytes(num) {
        let unidad = ['bytes', 'KB', 'MB', 'GB', 'TB'];
        let index = 0;
        while (num >= 1024 && index < unidad.length - 1) {
            num /= 1024;
            index++;
        }
        return `${num.toFixed(2)} ${unidad[index]}`;
    }

    let TMString = convertirABytes(TM);
    let MVString = convertirABytes(MV);

    $("#ex1resultCM").text(`La memoria física se divide en: ${CM} marcos`); 
    $("#ex1resultTM").text(`El tamaño en KB de cada marco es de: ${TMString}`);
    $("#ex1resultMV").text(`La capacidad total de la Memoria Virtual en KB es de: ${MVString}`);
}

function calcularEjercicio2(){  
    let DL = parseFloat($("#ex2DL").val());  
    let CM = parseFloat($("#ex2CM").val()); 
    let TM = parseFloat($("#ex2TM").val()); 
    
    let errorMsg2 = $("#ex2error");
    errorMsg2.addClass("d-none");

    if (isNaN(DL) || isNaN(CM) || isNaN(TM)) {
        errorMsg2.text("Error: Campos vacíos o no numéricos.").removeClass("d-none");        
        return;
    }

    if (!Number.isInteger(DL) || DL <= 0 || !Number.isInteger(CM) || CM <= 0 || !Number.isInteger(TM) || TM <= 0) {
        errorMsg2.text("Error: Todos los valores deben ser enteros positivos.").removeClass("d-none");    
        return;
    }

    let MV = Math.pow(2, DL);
    let TP = TM;
    let CP = MV / TP;
    let MF = CM * TM;

    if (!Number.isInteger(CP) || CP <= 0 || !Number.isInteger(MF) || MF <= 0) {
        errorMsg2.text("Error: Los resultados deben ser enteros positivos.").removeClass("d-none");    
        return;
    }

    function convertirABytes(num) {
        let unidad = ['bytes', 'KB', 'MB', 'GB', 'TB'];
        let index = 0;
        while (num >= 1024 && index < unidad.length - 1) {
            num /= 1024;
            index++;
        }
        return `${num.toFixed(2)} ${unidad[index]}`;
    }

    let TPString = convertirABytes(TP);
    let MFString = convertirABytes(MF);

    $("#ex2resultCP").text(`En este sistema de Memoria Virtual se pueden direccionar ${CP} páginas`); 
    $("#ex2resultTP").text(`El tamaño en KB de cada página es de: ${TPString}`);
    $("#ex2resultMF").text(`La capacidad total de la Memoria Física en KB es de: ${MFString}`);
}

function resetPage1() {
    $("#ex1DF").val("");
    $("#ex1CP").val("");
    $("#ex1TP").val("");
    $("#ex1resultCM").text("");
    $("#ex1resultTM").text("");
    $("#ex1resultMV").text("");
    $("#ex1error").addClass("d-none").text("");
}

function resetPage2() {
    $("#ex2DL").val("");
    $("#ex2CM").val("");
    $("#ex2TM").val("");
    $("#ex2resultCP").text("");
    $("#ex2resultTP").text("");
    $("#ex2resultMF").text("");
    $("#ex2error").addClass("d-none").text("");
}
