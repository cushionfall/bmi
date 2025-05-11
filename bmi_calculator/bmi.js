document.getElementById("sumbit_button").addEventListener('click',sumbit);
function sumbit(){
    let height=document.getElementById("height").value
    let weight=document.getElementById("weight").value
    const height_choose=document.getElementById("height_choose").value
    const weight_choose=document.getElementById("choose_weight").value
    if(height_choose=="meter" && weight_choose=="kg"){
        calculate(height,weight)
    }
    else if(height_choose=="meter" && weight_choose=="pound"){
        weight=weight/2.20462262;
        calculate(height,weight)
    }
    else if(height_choose=="cm" && weight_choose=="pound"){
        height=height/100
        weight=weight/2.20462262
        calculate(height,weight)
    }
    else if(height_choose=="cm" && weight_choose=="kg"){
        height=height/100
        weight=weight
        calculate(height,weight)
    }
    else if(height_choose=="feet" && weight_choose=="kg"){
        height=height/3.2808399
        calculate(height,weight)
    }
    else if(height_choose=="feet" && weight_choose=="pound"){
        height=height/3.2808399
        weight=weight/2.20462262
        calculate(height,weight)
    }
    else{
        return Error
    }
}
function calculate(height, weight) {
        let bmi= weight /(height*height)

        document.getElementById("bmi_index").innerHTML=bmi.toFixed(2)
}

