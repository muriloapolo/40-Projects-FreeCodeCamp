const reviews =[
    {
        id:1,
        name: 'susan sarandon',
        job: 'web developer',
        img: 'https://conteudo.imguol.com.br/c/splash/0f/2022/04/14/susan-sarandon-esta-confirmada-em-besouro-azul-diz-site-1649968164576_v2_1x1.jpg',
        text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis illum quaerat unde quo saepe amet pariatur error dolorem, officiis hic, accusamus excepturi maxime minus sint.'
    },
    {
        id:2,
        name: 'liam neeson',
        job: 'ux designer',
        img:'https://www.cegeplevis.ca/wp-content/uploads/2020/07/81991a28f5e1ede3be83d28d42dd27b0e8-04-liam-neeson.rsquare.w1200.jpg',
        text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis illum quaerat unde.'
    },
    {
        id:3,
        name: 'demi moore',
        job: 'Q.A',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Demi_Moore_2012.jpg/1200px-Demi_Moore_2012.jpg',
        text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. '
    },
    {
        id:4,
        name: 'Ewan McGregor',
        job: 'intern',
        img:'https://industrym.com/wp-content/uploads/2020/02/Ewan-McGregor.jpg',
        text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis illum quaerat unde quo saepe amet pariatur error dolorem, officiis hic, accusamus excepturi maxime minus sint.'
    },
    {
        id:5,
        name: 'robert d. junior',
        job: 'the boss',
        img:'http://cdn23.us1.fansshare.com/photos/robertdowneyjr/robert-downey-jr-room-hair-sitting-jacket-sofa-htc-539747532.jpg',
        text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis illum quaerat unde quo saepe amet pariatur error dolorem.'
    }
];
//   selecionar itens
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// Selecionar o item inicial

let currentItem = 0;

// load initial item 
window.addEventListener('DOMContentLoaded', function(){
   showPerson();
})

// show person based on item

function showPerson(){
   
    const item = reviews[currentItem];    
    img.src = item.img
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

}

// show next person

nextBtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0
    }
    showPerson();

})
// show prev person

prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson();
})

// surprise buttoon
randomBtn.addEventListener('click',function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson()
})
