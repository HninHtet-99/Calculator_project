let keyPad = document.querySelector('.keypad');
let displayBox = document.querySelector(".display");

let operators = ['+','-','*','/','%'];

let filter = x =>{
    let current = displayBox.innerText;
    let lastChar = current[current.length-1];

    //၁၀လုံး ထက်ပိုမရိုက်စေချင်
    if(current.length>11){
        return false;
    }

    if(current == '0' && x != '.'){
            
        cleanLast();
        
    }
    if(operators.includes(x) && operators.includes(lastChar)){
            
        return false;
        
    }

    return true;
}

let toDisplay = (x) => {
    if(filter(x)){
        displayBox.innerText += x;
    }
}

let calc = _ => {
    if(!operators.includes(displayBox.innerText[displayBox.innerText.length-1])){
        displayBox.innerText = eval(displayBox.innerText);
    }
}


let cleanAll = _ => displayBox.innerText = '';

let cleanLast = _ => displayBox.innerText = displayBox.innerText.substring(0,displayBox.innerText.length-1);

//၁၀ လုံးထက်ပိုရင် font-size ချိန်း
keyPad.addEventListener('click',function(){
    if(displayBox.innerText.length>10){
        displayBox.style.fontSize = 30+'px';
    }
})