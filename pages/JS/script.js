// let text = document.querySelector('#example')
// text.innerHTML = '<b>Это новый текст</b>'
// text.innerText = 'Это супер новый текст'

let block2 = document.createElement('header')

block2.style.backgroundColor = 'green'
block2.style.width = '1000px'
block2.style.height = '200px'
block2.style.marginBottom = '20px'

document.querySelector('body').append(block2)

let block1 = document.createElement('main')

block1.style.backgroundColor = 'blue'
block1.style.width = '1000px'
block1.style.height = '200px'

document.querySelector('body').append(block1)

let image = document.createElement('IMG')
image.src = "JSicon.png"

image.style.width = '200px'
image.style.height = '200px'
image.style.float = 'left'

document.querySelector('main').append(image)

let text = document.createElement('div')
text.innerText = 'Вот что я могу'

text.style.width = '800px'
text.style.fontSize = '32pt'

document.querySelector('main').append(text)

let silka = document.createElement('a')

document.querySelector('body').append(silka)
silka.innerText = 'ссылочка'
silka.setAttribute('href', 'JSprikol/Code.html')
