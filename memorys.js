import { finish, continueMem, memoryFive, memoryFour, memoryOne, memorySecond, memorySeven, memorySix, memoryThree } from "./createMems.js"

let newMemory = document.querySelector('#newSBtn')
let i = 0

let addMemory = () => {
    i++
    switch(i){
        case 1:
            memoryOne()
            break
        case 2:
            memorySecond()
            break
        case 3:
            memoryThree()
            break
        case 4:
            memoryFour()
            break
        case 5:
            memoryFive()
            break
        case 6:
            memorySix()
            break
        case 7:
            memorySeven()
            break
        case 8:
            finish()
            continueMem()
            break
        default:
            alert('none')
    }

}

newMemory.addEventListener('click', addMemory)