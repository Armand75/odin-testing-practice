function capitalize(string){
    return `${string[0].toUpperCase()}${string.slice(1)}`;
}

function reverseString(string) {
    let reverse = "";
    for(let char of string){
        reverse = char + reverse;
    }
    console.log(reverse);
    return reverse;
}

class Calculator {
    add(a,b){
        return a + b;
    }

    subtract(a,b){
        return a - b;
    }

    divide(a,b){
        return a / b;
    }

    multiply(a,b){
        return a * b;
    }
}
const calculator = new Calculator();

function caesarCipher(string, factor){
    let formattedStr = "";
    for (let char of string){
        let code = isAlphabet(char);
        if(code){
            for(let i = 0; i < factor; i++){
                code++;
                if(code === 91){
                    code = 65;
                }else if(code === 123){
                    code = 97;
                }
            }
            formattedStr += String.fromCharCode(code);

        }else{
            formattedStr += char;
        }
    }
    return formattedStr;
}

function isAlphabet(char){
    const code = char.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122) ? code : false;
}

function analyzeArray(myArray){
    let average = 0;
    let min = 0;
    let max = 0;
    let length = 0;
    let sum = 0;

    myArray.forEach((element, index) => {
        sum += element;
        if(index === 0){
            min = element;
            max = element;
        }

        if(element > max){
            max = element;
        }

        if(element < min){
            min = element
        }
    });
    average = sum / myArray.length;
    length = myArray.length;

    return {average, min, max, length}

}

module.exports = {capitalize, reverseString, calculator, caesarCipher, analyzeArray};