let previous_btn=document.querySelector('.pre_btn');
let next_btn=document.querySelector('.next_btn');
let search=document.querySelector('#search');
let search_btn=document.querySelector('.search_btn');
let alldish=document.querySelectorAll('.dishs');
// let dish=document.querySelectorAll('.dish');
let count=0
alldish.forEach((slide,index) => {
  slide.style.left=`${index*100}%`
});
function myfun() {
  alldish.forEach((value)=>{
    value.style.transform=`translateX(-${count*100}%)`
  })
}
next_btn.addEventListener('click',()=>{
count++;

if(count==alldish.length){
  count=0
}
myfun();

})
previous_btn.addEventListener('click',()=>{
  count--;
  if (count==-1) {
    count=alldish.length-1
  }
  myfun()
  
})
// let show_meal=document.querySelector('.show_meal')
// const getdata=async (value)=>{
//  try {
//   const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
//   let promise=await response.json();
//   document.querySelector('.show_meal').innerHTML=''
//   search.value=''
//   promise.meals.map((data)=>{
//     let div=document.createElement('div');
//     console.log(data);
//     div.classList.add('card');
//     div.innerHTML=`
//     <img src="${data.strMealThumb}" alt="">
//     <p>${data.strMeal}</p>
//     `
//     show_meal.appendChild(div)
  
//   })
//  } catch  {
//   document.querySelector('.show_meal').innerHTML=`<h1>Meal was not found</h1>`
//  }


// }
// search_btn.addEventListener('click',()=>{
//   if(search.value==''){
//     alert('Please Entre Valid Value')
//   }
//   else{
//     getdata(search.value)
//   }
// })
// dish.forEach((button)=>{
//   button.addEventListener('click',()=>{
//     getdata(button.value)
//   })
// })
