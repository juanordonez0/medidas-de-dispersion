
let container = document.getElementById("tb");

let dm_output = document.getElementById("tb");
let list = [34, 36, 39, 43, 51, 53, 62, 63, 73, 79]; 


list.sort(function(a, b){return a-b});


console.log(list);

let media = getMedia(list);

console.log(media)

let sumtotal = 0;
let sum= 0;
let sum2 = 0;

list.forEach(e => {


    //variables para el loop
    let dif1 = e-media;
    let difabs = Math.abs(dif1);
    let difcuadrada = Math.pow(difabs, 2);

    //sumatorias
    sumtotal += e;
    sum += difabs; 
    sum2 += difcuadrada; 

    //agregar info a la tabla
    container.innerHTML += `   
    <tr>
        <td>${e}</td>
        <td>${dif1.toFixed(1)}</td>
        <td>${difabs.toFixed(1)}</td>
        <td>${difcuadrada.toFixed(1)}</td>
    </tr>`;
});


container.innerHTML += `   
<tr>
    <td>∑ = ${sumtotal.toFixed(1)}</td>
    <td></td>
    <td>∑ = ${sum.toFixed(1)}</td>
    <td>∑ = ${sum2.toFixed(1)}</td>
</tr>`;


console.log(`sumatoria: ${sumtotal}`); 
console.log(`sumatoria de |xi-x̄|: ${sum}`); 
console.log(`sumatoria de |xi-x̄|²: ${sum2}`); 


console.log(`Rango: ${getRango(list)}`)

console.log(`Desviación media: ${getDm(sum, list).toFixed(2)}`); 

console.log(`Varianza: ${getVar(sum2, list).toFixed(2)}`); 

console.log( `Desviación Estándar: ${Math.sqrt(getVar(sum2, list).toFixed(2)).toFixed(2)}`); 



//---------------------------------------------------------------funciones---------------------------------------------------

function getMedia(arr){
    let sumatoria = 0;
    for(let i = 0; i<arr.length; i++){

        sumatoria += arr[i];
    }
    let media = sumatoria / arr.length;

    return media;

}


function maxValue(arr){
    let max = arr[0];
    for(let i = 0; i<arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}


function minValue(arr){

    let min = arr[0];
    for(let i = 0; i<arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
    }

    return min;
}


function getRango(arr){

   let min =  minValue(arr);
   let max = maxValue(arr);

   let rango = max - min;

   return rango;

}




function getDm(sum, arr){

    let dm = sum / arr.length;

    return dm;
};


function getVar(sum2, arr){

    let n = arr.length-1
    let vari = (sum2 / n); 


    return vari;
}





