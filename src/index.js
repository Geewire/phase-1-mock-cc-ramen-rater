const ramenMenu = document.querySelector('#ramen-menu')
let picDisplay = document.getElementsByClassName('detail-image')
let picName = document.getElementsByClassName('name')
let restaurant = document.getElementsByClassName("restaurant")
let rating = document.getElementById('rating-display')
let comment = document.getElementById('comment-display')
//Loading DOMContent
document.addEventListener('DOMContentLoaded', ()=>{
    fetchMenu()
})

//fetch request
function fetchMenu(){
    return fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(data => getMenu(data))
 }
 // DOM Manipulation to add menu  
 function getMenu(data) {
    data.forEach(ramens => {
   const menuPic = document.createElement('img')
   menuPic.src = `${ramens.image}`
   ramenMenu.append(menuPic)
   
   //adding event listner and displaying details
   menuPic.addEventListener('click', display)
   function display(){
   picDisplay[0].src = `${ramens.image}`
   picName[0].textContent = `${ramens.name}`
   restaurant[0].textContent = `${ramens.restaurant}`
   rating.textContent = `${ramens.rating}`
   comment.textContent = `${ramens.comment}`
  }
})
}
//add event listener to form
let form = document.getElementById('new-ramen')
form.addEventListener('submit', (e) => {e.preventDefault()

   //create new obj for new entry
   const formObj = {}
   formObj.name = document.querySelector('#new-name').value
   picName[0].textContent = formObj.name
   formObj.restaurant = document.querySelector('#new-restaurant').value
   restaurant[0].textContent = formObj.restaurant
   formObj.image = document.querySelector('#new-image').value
   let imagePic = document.createElement('img')
   imagePic.src = formObj.image
   ramenMenu.append(imagePic)
   picDisplay[0].src = imagePic.src
   formObj.rating = document.querySelector('#new-rating').value
   rating.textContent = formObj.rating
   formObj.comment = document.querySelector('#new-comment').value
   comment.textContent = formObj.comment
   
 })

// Extra work -see first image as soon as page loads without clicking
document.querySelector('.detail-image').src = "./assets/ramen/shoyu.jpg"
document.querySelector(`.name`).textContent = "Shoyu Ramen"
document.querySelector(`.restaurant`).textContent = "Nonono"