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
 picDisplay.src = `${ramens.image}`
 let picName = document.getElementsByClassName('name')
 picName.innerHTML = `${ramens.name}`
 let restaurant = document.getElementsByClassName("restaurant")
 restaurant.innerHTML = `${ramens.restaurant}`
}
}
)}


//get data and render menu to Dom
