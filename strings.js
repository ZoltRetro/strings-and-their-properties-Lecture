const prompt = require('prompt-sync')();



function maximusPrime(){
    let array = []
    let input1 = "0"
    while(!isNaN(input1)){
        input1 = prompt("Enter as many numbers as you want and type `quit` when you are done:  ")
        if(!isNaN(input1)){
            input1 = Number(input1)
            array.push(input1)
            console.log(array)
        }
    }
    let count = 1
    let i = 0
    while(array.length != 1){
            if(Number(array[i]) < Number(array[count])){
                
                array.splice(i, 1)
                console.log(array)
                console.log("Removed element at index for i " + i)

            }
            else if(Number(array[count]) < Number(array[i])){
                
                array.splice(count, 1)
                console.log(array)
                console.log("Removed element at index for count " + count)

            }
            else if(Number(array[i]) === Number(array[count])){
                array.splice(count, 1)
                console.log(array)
                console.log("Removed element at index for count " + count)

            }
            
            
            

        }
        console.log(array)
    }
    


function reversal(){
    let input = prompt("Enter a number and I shall reverse the order:")
    let reversed = input.split('').reverse().join('')
    console.log(reversed)
}

function capitalPunishment(){
    let array = []
    let input = prompt("Enter a sentence and I will make it all capital:")
    input.split(" ")
    
    for(let i = 0; i < input.length; i++){
        let asciiValue = input.charCodeAt(i)
        if(asciiValue >= 97 && asciiValue <= 122){
            asciiValue -= 32
        }
        
        array.push(String.fromCharCode(asciiValue))
    }
    console.log(array.join(""))
}



function casing(){
    let input = prompt("Enter a sentence and I will change the casing:")
    let array = []
    for(let i = 0; i < input.length; i++){
        let char = input.charAt(i)
        if(char === char.toUpperCase()){
            array.push(char.toLowerCase())
        } else {
            array.push(char.toUpperCase())
        }
    }
    console.log(array.join(""))
}
