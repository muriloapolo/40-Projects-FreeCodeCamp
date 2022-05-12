


// Definindo inicial contador
let count = 0;

//Selecionando os valores e botões
let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");

//Btns geram um node list. E podemos selecionar com um .forEach
btns.forEach(function (btn){
  btn.addEventListener('click',function(e){
   const styles = e.currentTarget.classList;
   if(styles.contains('decrease')){
       count--;
   }
   else if(styles.contains('increase')){
       count++;
   }
   else{
       count = 0;
   }
   if(count > 0){
       value.style.color = 'green';
   }if(count < 0 ){
    value.style.color = 'red';
   }
   if(count === 0){
    value.style.color = '#222';
   }
   value.textContent = count
  })
})