// local reviews data
const reviews = [
    { 
      id: 1, 
      name: 'Rupa Smith',
      job: 'Web Developer',
      img: 'https://cdn-icons-png.flaticon.com/512/4042/4042229.png',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,  
      name: 'Anna Johnson',
      job: 'Web Designer',
      img: 'https://cdn-icons-png.flaticon.com/512/1299/1299522.png',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'Peter Jones',
      job: 'Intern',
      img: 'https://cdn-icons-png.flaticon.com/512/189/189618.png',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'Iftakhir Nibir',
      job: 'The Boss',
      img: 'https://cdn-icons-png.flaticon.com/512/164/164600.png',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

const person_img = document.getElementById('person-img');
const author = document.getElementById('author');
const position = document.getElementById('position');
const review = document.getElementById('reviews');
const leftbtn = document.getElementById('left');
const rightbtn = document.getElementById('right');
const middle = document.getElementById('middle');

//test

let count = 0;

window.addEventListener("DOMContentLoaded",function(){
  const item = reviews[count];
  person_img.src = item.img;
  author.textContent = item.name;
  position.textContent = item.job;
  review.textContent = item.text;
});

leftbtn.addEventListener("click", function(){
  count--;
  if(count< 0){
    count = reviews.length-1;
  }
  console.log(count);
  person_img.src = reviews[count].img;
  author.textContent = reviews[count].name;
  position.textContent = reviews[count].job;
  review.textContent = reviews[count].text;
});

rightbtn.addEventListener("click", function(){
  count++;
  if(count >= reviews.length){
    count = 0;
  }
  console.log(count);
  person_img.src = reviews[count].img;
  author.textContent = reviews[count].name;
  position.textContent = reviews[count].job;
  review.textContent = reviews[count].text;
});


middle.addEventListener("click", function(){
  count = Math.floor(Math.random()* reviews.length)
  console.log(count)
  person_img.src = reviews[count].img;
  author.textContent = reviews[count].name;
  position.textContent = reviews[count].job;
  review.textContent = reviews[count].text;
});