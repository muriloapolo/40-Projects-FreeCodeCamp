//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(perguntas => {
    // console.log(perguntas)
    const btn = perguntas.querySelector('.question-btn')
    // console.log(btn)
    btn.addEventListener('click', () => {

        questions.forEach(function (item) {
            if (item !== perguntas) {
                item.classList.remove('show-text')
            }
        })







        perguntas.classList.toggle('show-text')
    })

});






















// traversing the dom

// const btns = document.querySelectorAll('.question-btn');
// btns.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text')
//     });
// });