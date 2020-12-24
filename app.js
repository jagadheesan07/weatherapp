const ip = document.getElementById("ip");
const btn = document.getElementById("btn");
const temper = document.getElementById("temp");
const cityn = document.getElementById("cityn");
const coun= document.getElementById("coun");
const sp = document.querySelector(".sp");



btn.addEventListener("click",  () => { 
    const city = ip.value;
    cityn.innerHTML = city.toUpperCase();
     const api = 'https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=5a6d29acd8a0da0c09fd17131117bf6d&units=metric';
    
    fetch(api)
    .then(res => {
        return res.json();
    })
    .then(data => {
       console.log(data);
       console.log(data.main.temp);
       const  temp =data.main.temp;
       sp.innerHTML = 'C';
       temper.innerHTML = temp;
       coun.innerHTML = data.sys.country;

    })


    
})


