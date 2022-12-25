//$(document).ready(function () {
function backEnd() {
    window.open('Pages\\backEnd.html', '_self')
}

function frontEnd() {
    window.open('Pages\\frontEnd.html', '_self')
}

function fullStack() {
    window.open('Pages\\fullStack.html', '_self')
}

function openQuiz(lang) {
    window.open('..\\Pages\\quiz.html', '_self')
    window.sessionStorage.setItem('quizLang', lang)
}
let myLangs = ['c++', 'mysql', 'jquery', 'xml', 'sql', 'c#', 'php', 'python', 'java', 'c', 'html', 'css', 'bootstrap', 'javascript']

function search(lang) {

    if (myLangs.indexOf(lang) != -1) {
        window.open('Pages\\quiz.html', '_self')
        window.sessionStorage.setItem('quizLang', lang)
    } else {
        alert('Lang not found !!')
    }
}
$('#btn').click(() => {
    let myVal = $('.form-control').val().toLowerCase()
    myVal.length != 0 ? search(myVal) : null
})

$("#inputText").keyup(function (event) {
    if (event.keyCode == 13) {
        let myVal = $('.form-control').val().toLowerCase()
        myVal.length != 0 ? search(myVal) : null
    }
})

//search box
function autoSearch(input) {
    let myVal = $(input).val().toLowerCase()
    if (myLangs.indexOf(myVal) != -1) {
        $(input).css('color', 'green')
    } else {
        fined = false
        for (let i of myLangs) {
            if (i.indexOf(myVal) != -1) {
                $(input).css('color', 'blue')
                fined = true
                break
            }
        }
        if (!fined) {
            $(input).css('color', 'red')
        }
    }
}
//})