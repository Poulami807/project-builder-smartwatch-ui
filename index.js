let time = document.querySelector('.time')
let centerTime = document.getElementById('center-time')
let day = document.getElementById('day')
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let curr = new Date()
let t = curr.toLocaleTimeString()
time.innerText = t.slice(0,5)
centerTime.innerText = t.slice(0,5)
day.innerText = weekday[curr.getDay()]