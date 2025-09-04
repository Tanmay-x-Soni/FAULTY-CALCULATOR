//function define

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function multi(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
function exponiantation(a,b){
    return a**b;
}


        
            const a = Number( prompt("Enter your first number : "));
            const b = Number(prompt("Enter your second number: "));
            const operator = prompt("Enter operator (+, -, *, /): ");

      //10% fualtiness 
          const num=Math.random();
            console.log(num);

      //condition and switch to perform operation
        if(num<0.1){
            let result;
         switch(operator){
            case '+':  result=sub(a,b);
                       document.write(`Your subtraction is : ${result}`)
                break;
            case '*':  result=add(a,b);
                       document.write(`Your addition is : ${result}`)
                break;
            case '-':  result=div(a,b);
                       document.write(`Your division is : ${result}`)
                break;
            case '/':  result=exponiantation(a,b);
                       document.write(`Your exponiantation is : ${result}`)
                break;
            default:  document.write("Invalid character!!")
                break;
         }
    }

    //Real 90% calculation
        else{
         let result;
         switch(operator){
            case '+':  result=add(a,b);
                       document.write(`Your addition is : ${result}`)
                break;
            case '*':  result=multi(a,b);
                       document.write(`Your multiplication is : ${result}`)
                break;
            case '-':  result=sub(a,b);
                       document.write(`Your subtraction is : ${result}`)
                break;
            case '/':  result=div(a,b);
                       document.write(`Your division is : ${result}`)
                break;
            default:  document.write("Invalid character!!")
                break;
         }
    }


            
