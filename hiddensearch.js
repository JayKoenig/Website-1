const search = document.querySelector('.search')
const btn1 = document.querySelector('.btn1')
const input = document.querySelector('.input')

btn1.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})
