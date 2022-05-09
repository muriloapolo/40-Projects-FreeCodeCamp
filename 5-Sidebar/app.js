const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidedbar = document.querySelector('.sidebar')

toggleBtn.addEventListener('click', function(){
    console.log(this)
     if(sidedbar.classList.contains('show-sidebar')){
         sidedbar.classList.remove('show-sidedbar');
     } else{
         sidedbar.classList.add('show-sidebar');
     }

})

closeBtn.addEventListener('click',function(){
    console.log(this)
    sidedbar.classList.remove('show-sidebar');
 
})