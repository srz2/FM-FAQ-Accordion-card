const items = document.querySelectorAll('.caret')
items.forEach(item => {
    item.parentElement.parentElement.addEventListener('click', (event) => {
        item.classList.toggle('active');
        const answer = item.parentElement.parentElement.querySelector('.faq-answer');
        answer.classList.toggle('active-show')
    })
})