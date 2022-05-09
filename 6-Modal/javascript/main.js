// Conceitos importantes tratados nesse tutorial:

// document.querySelector()
// addEventListener()
// classList.add()
// classList.remove()




const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');




modalBtn.addEventListener('click', function(){
    modal.classList.add('open-modal')
})
closeBtn.addEventListener('click', function(){
    modal.classList.remove('open-modal')
})

 