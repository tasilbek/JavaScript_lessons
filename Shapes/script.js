let paragraf = document.querySelector("p")
  paragraf.style.color = 'red'
  paragraf.style.fontSize = '22px'

 let addBtn = document.querySelector('.addBtn')
 let removeBtn = document.querySelector('.removeBtn')
 addBtn.addEventListener('click',function () {
     paragraf.classList.add('text')
 })
 removeBtn.addEventListener('click', function () {
     paragraf.classList.remove('text')
 })

 let squareBtn = document.querySelector('.squareBtn')
 squareBtn.addEventListener('click', function(){
     circle.classList.add('square');
 })
 squareBtn.addEventListener('click', function(){
     circle.classList.remove('square');
 })
 let box = document.querySelector('.box')
 let triangleBtn = document.querySelector('.triangleBtn')
 triangleBtn.addEventListener('click', function () {
     box.classList.add('triangle')
     box.classList.remove("circle")
 })
 let triangleRemoveBtn = document.querySelector('.removeBtn')
 triangleRemoveBtn.addEventListener('click', function () {
     circle.classList.remove('triangle')
 })
 let circleBtn = document.querySelector('.circleBtn')
 circleBtn.addEventListener('click', function () {
     box.classList.remove('triangle')
     box.classList.add('circle')
 })