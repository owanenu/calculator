question = document.getElementById("question")
display = document.getElementById("display")
let working = ""
let ans = 0

function changeInput(displayed, value) {
    working += value
    question.innerHTML += displayed
    display.innerHTML = displayed
}
function clearAll(){
    Question.innerHTML = ""
    displapy.innerHTML= ""
}
function backspace() {
diplay.innerHTML = ""
let splice = question.innerHTML.slice(0, -1)
question.innerHTML = splice

splice = working.slice(0, -1)
working = spliced

}
function solution(){
console.log(working)
ans = eval(working).toString()
display.innerHTML = ans
}