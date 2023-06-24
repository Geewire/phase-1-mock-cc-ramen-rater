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
   const ramenMenu = document.querySelector('#ramen-menu')
   menuPic.src = `${ramens.image}`
   ramenMenu.append(menuPic)

 //adding event listner and displaying details
 menuPic.addEventListener('click', display)
 function display(){
 let picDisplay = document.getElementsByClassName('detail-image')
 picDisplay[0].src = `${ramens.image}`
 let picName = document.getElementsByClassName('name')
 picName[0].textContent = `${ramens.name}`
 let restaurant = document.getElementsByClassName("restaurant")
 restaurant[0].textContent = `${ramens.restaurant}`
 let rating = document.getElementById('rating-display')
 rating.textContent = `${ramens.rating}`
 let comment = document.getElementById('comment-display')
 comment.textContent = `${ramens.comment}`

 //add event listener to form

 
 let form = document.getElementById('new-ramen')
 form.addEventListener('submit', (e) => {e.preventDefault()

 //create new obj for new entry
 
  const formObj = {}
  formObj.name = document.querySelector('#new-name').value
  formObj.restaurant = document.querySelector('#new-restaurant').value
  formObj.image = document.querySelector('#new-image').value
  let imagePic = document.createElement('img')
  imagePic.src = formObj.image
  ramenMenu.append(imagePic)
  formObj.rating = document.querySelector('#new-rating').value
  formObj.comment = document.querySelector('#new-comment').value
 console.log(formObj)

 //const newformImage= document.createElement('img')
 //newformImage.src = formObj.image
 //ramenMenu.append(newformImage)

// add new  entry to menu
}
)
}
}
)}



//get data and render menu to Dom
