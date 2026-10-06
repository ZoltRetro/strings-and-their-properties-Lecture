const prompt = require('prompt-sync')();

// var feet = ["Steve", "1213","19","steve.smith@gmail.com"]
// var toes = ["Johnson", "1389", "22", "johnson.umber@gmail.com"]
// var piggy = ["Robert", "1423","42","robert.logia@gmail.com"]
// console.log(`${feet[0]}'s id is ${feet[1]} and he is ${feet[2]} years old his email is ${feet[3]}`)
// console.log(`${toes[4]}'s id is ${toes[5]} and he is ${toes[6]} years old his email is ${toes[7]}`)
// console.log(`${piggy[8]}'s id is ${piggy[9]} and he is ${piggy[10]} years old his email is ${piggy[11]}`)

// console.log(`${feet[0]} is friends with ${piggy[0]}`)


// for(let i = 0; i < feet.length; i++){
//     console.log(feet[i])
//     console.log(toes[i])
//     console.log(piggy[i])
// }


// let list = ["apple", "bananas", "grapes", "juice", "butter"]


// console.log(list)
// let input = prompt("Enter an item you would like to add to the list: ")
// let result = list.indexOf(input, 0)
// let sliced = list.slice(2, 5)
// if(input == list[result]){
//     console.log("item is already in list")
    
    
// }

// else{
//     list.push(input)
//     console.log("item added")
//     console.log(list)
//     console.log(sliced)
// }


// let bob = [
//     [1,2,3,4],
//     [5,6,7,8,9],
//     [10,11,12,13,14,15]
// ]


// console.table(bob)
// console.log(bob[2][1])
function chud(){
    let input = Number(prompt("Enter a number: "))
    let listy = []
    let rich = 0
    let count = input
    for(let i = 0; i < input; i++ ){
        let input2 = Number(prompt(`Enter ${count} numbers: `))
        count--
        listy.push(input2)
    }

    for(i = 0; i < input; i++){
        rich += listy[0]
        listy.shift()
    }
    console.log(rich)
}

function nth(){
    let array = []
    let input = Number(prompt("Enter the nth term you want: "));
    let a = 1;
    let b = 0;
    let count = 0;
    while(count != input){
        let next = a + b
        a = b
        b = next

        count++
        array.push(next)
    }
    console.log(array[input-1])
    return(input)
}

function steve(){
    let array = [1,2,3,4,5,6,7,8,9,10]
    console.log(array)
    let input = Number(prompt("Enter the index you want removed: "))
    array.splice(input,1)
    console.log(array)
}

function steven(){
    let array = [1,2,3,4,5,6,7,8,9,10]
    console.log(array)
    let input = Number(prompt("Enter the index you want added: "))
    let input2 = Number(prompt("What number do you wish to add: "))
    array.splice(input,0, input2)
    console.log(array)
}


function groccery(){
    let array = []
    let input = Number(prompt("Enter list size: "))
    let count = input
    for(let i = 0; i < input; i++){
        let input2 = prompt(`Please enter ${count} more items: `)
        count--
        array.push(input2.toLowerCase())
        console.log(array)
    }
    let input4 = "0"
    
    while(input4 != "quit"){
        input4 = prompt("Would you like to (A)dd an item or (R)emove and item or (L)ook for an item: ").toUpperCase()

        if(input4 == "L"){
            let input3 = prompt("Enter a item you wish to search for: ").toLowerCase()
            let rich = array.indexOf(input3, 0)
            let eep = array[rich]
            let count = 1
            for(let i = 0; i < array.length; i++){
                console.log(`${count}. ${array[i]}`)
                count++
            }
            if(eep == input3){
                rich++
                console.log(`Found it is at ${rich}. ${input3}`)
            }
            else if(input3 == "quit"){
                return(input)
            }
            else{
                console.log("Not Found")
            }
        }
        else if(input4 == "R"){
                    let input3 = prompt("Enter a item you wish to search for: ").toLowerCase()
            let rich = array.indexOf(input3, 0)
            let eep = array[rich]

            if(eep == input3){
                array.splice(input3,1)
                console.log("Found and Removed")

            }
            else if(input3 == "quit"){
                return(input)
            }
            else{
                console.log("Not Found")
                console.log(array)
            }
        }
            else if(input4 == "A"){
            let input3 = prompt("Enter a item you wish to add ").toLowerCase()
            let rich = array.indexOf(input3, 0)
            let eep = array[rich]

            if(eep == input3){
                array.splice(input3,1)
                console.log("Already in list")
                console.log(array)
            }
            else if(input3 == "quit"){
                return(input)
            }
            else{
                console.log("Added")
                array.push(input3)
                console.log(array)
            }
        }
        else{
            return(input4);
        }
    }
}
groccery()