// // let text = document.querySelector('#example')
// // text.innerHTML = '<b>Это новый текст</b>'
// // text.innerText = 'Это супер новый текст'

// let block2 = document.createElement('header')

// block2.style.backgroundColor = 'green'
// block2.style.width = '1000px'
// block2.style.height = '200px'
// block2.style.marginBottom = '20px'

// document.querySelector('body').append(block2)

// let block1 = document.createElement('main')

// block1.style.backgroundColor = 'blue'
// block1.style.width = '1000px'
// block1.style.height = '200px'

// document.querySelector('body').append(block1)

// let image = document.createElement('IMG')
// image.src = "JSicon.png"

// image.style.width = '200px'
// image.style.height = '200px'
// image.style.float = 'left'

// document.querySelector('main').append(image)

// let text = document.createElement('div')
// text.innerText = 'Вот что я могу'

// text.style.width = '800px'
// text.style.fontSize = '32pt'

// document.querySelector('main').append(text)

let switch_text = document.createElement('p')

switch_text.innerText = 'Теперь этот блок зелёный, молодец!'
switch_text.style.fontFamily = 'Verdana'

function element_click() {
    let element = document.querySelector(".switch")
    element.style.backgroundColor = "green"
    console.log("Теперь этот блок зелёный, молодец!")
    document.querySelector('.switch').append(switch_text) 
}

function IMG_NICE() {
    let IMGnice = document.querySelector(".target")
    IMGnice.src = "Nice.png"
}

function IMG_BAD() {
    let IMGbad = document.querySelector(".target")
    IMGbad.src = "Bad.png"
}

function input_click() {
    let element = document.querySelector(".main")
    let style_bg = getComputedStyle(element).backgroundColor
    if (style_bg == "rgb(255, 255, 255)") {
        element.style.backgroundColor = "rgb(0, 0, 0)"
    } else {
        element.style.backgroundColor = "rgb(255, 255, 255)"
    }
}