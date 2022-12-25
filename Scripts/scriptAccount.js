//$(document).ready(function () {
function tryAgain(btn) {
    let lang = $(btn).parent().prev().prev().prev().text().toLowerCase()
    window.open('..\\Pages\\quiz.html', '_self')
    window.sessionStorage.setItem('quizLang', lang)
}

function delLang(lang) {
    if (confirm(`Do you really want to delete the ${lang} test ?`)) {
        let userData = JSON.parse(window.localStorage.getItem('userData'))
        delete userData[lang]
        window.localStorage.setItem('userData', JSON.stringify(userData))
        location.reload()
    }
}

let userData = window.localStorage.getItem('userData')

if (userData != null && userData != 'null' && userData != '{}') {
    userData = JSON.parse(userData)
    $('tbody').empty()
    for (i in userData) {
        var pr = (userData[i]['note'].split('of')[0] * 100 / userData[i]['note'].split('of')[1])
        console.log()
        $('tbody').append(
            `<tr class="text-center fst-italic table-${pr <50 ? 'danger' : pr < 70 ? 'info': 'success'}"" >\
                <td class="text-primary fst-normal" ondblclick="delLang(this.innerHTML)" title="double click to delete module" >${i}</td>\
                <td>${Math.round(pr)} %</td>\
                <td>${userData[i]['counter']}</td>\
                <td>${userData[i]['date']} ${pr < 50 ? '<button class="btn btn-primary float-end fs-4 try" onclick="tryAgain(this)">Try Again</button>' : ''}</td>\
                </tr>`
        )
    }
}

$('#myAccount').dblclick(() => {
    if (userData != null && userData != 'null' && userData != '{}') {
        if (confirm('Do you really want to delete all your tests ?')) {
            window.localStorage.removeItem('userData')
            location.reload()
        }
    } else {
        alert('Your account is really empty!!')
    }

})

//})