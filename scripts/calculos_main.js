function calculosMemoria(){
    //memoria virtual
    let MV = parseFloat(document.getElementById("MV").value);   
    let CP = parseFloat(document.getElementById("CP").value);
    let TP = parseFloat(document.getElementById("TP").value);
    let DL = parseFloat(document.getElementById("DL").value);   
    let numpag = parseFloat(document.getElementById("numpag").value);
    let desplV = parseFloat(document.getElementById("desplV").value);
    //memoria fisica
    let MF = parseFloat(document.getElementById("MF").value);   
    let CM = parseFloat(document.getElementById("CM").value);
    let TM = parseFloat(document.getElementById("TM").value);
    let DF = parseFloat(document.getElementById("DF").value);   
    let nummarco = parseFloat(document.getElementById("nummarco").value);
    let desplF = parseFloat(document.getElementById("desplF").value);

    if(isNaN(desplF)){
        desplF = desplV;
    }
    if(isNaN(desplV)){
        desplV = desplF;
    }

    if(MV === 0 ){
        if(!isNaN(CP) && !isNaN(TP)){
            MV = CP * TP;
        }
        else if(!isNaN(DL)){
            MV = Math.pow(2, DL);
        }
        else
        alert("No se puede calcular la Memoria Virtual");
    }

    if(CP === 0 ){
        if(!isNaN(MV) && !isNaN(TP)){
            CP = MV / TP;
        }
        else if(!isNaN(numpag)){
            CP = Math.pow(2, numpag);
        }
        else
            alert("No se puede calcular la Cantidad de Paginas");
    }

    if(TP === 0 ){
        if(!isNaN(MV) && !isNaN(CP)){
            TP = MV / CP;
        }
        else if(!isNaN(desplV) || !isNaN(desplF)){
            TP = Math.pow(2, desplV);
        }
        else if(!isNaN(TM)){
            TP = TM;
        }
        else
            alert("No se puede calcular el Tamaño de Pagina");
    }

    if(MF === 0 ){
        if(!isNaN(CM) && !isNaN(TM)){
            MF = CM * TM;
        }
        else if(!isNaN(DF)){
            MF = 2 ^ DF;
        }
        else
        alert("No se puede calcular la Memoria Fisica");
    }

    if(CM === 0 ){
        if(!isNaN(MF) && !isNaN(TM)){
            CM = MF / TM;
        }
        else if(!isNaN(nummarco)){
            CM = 2 ^ nummarco;
        }
        else
        alert("No se puede calcular la Cantidad de Marcos");
    }

    if(TM === 0 ){
        if(!isNaN(MF) && !isNaN(CM)){
            TM = MF / CM;
        }
        else if(!isNaN(desplV) || !isNaN(desplF)){
            TM = Math.pow(2, desplV);
            TM = Math.pow(2, desplF);
        }
        else if(!isNaN(TM)){
            TM = TP;
        }
        else
            alert("No se puede calcular el Tamaño de Pagina");
    }

    if(!isNaN()){


    }

}