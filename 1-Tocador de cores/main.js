
//Constante - array para representar cores simples que serão como predefinidas
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // Conseguir um numero entre 0 e 3 pois o array possui apenas 4 elementos - ou seja 3 índices.
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber]
    console.log(randomNumber)
    //Exibe o index do array na tela
    color.textContent = colors[randomNumber];
})

//Gera numero aleatório com base no length do array
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}