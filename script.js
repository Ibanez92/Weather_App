let loc = document.getElementById("location");
let tempicon = document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
let iconfile;
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");




window.addEventListener("load" ,()=> {
    
    let long;
    let lat;

    if(navigator.geolocation) {

        navigator.geolocation.getCurrentPosition((postion)=> {
            
            long=postion.coords.longitude;
            lat=postion.coords.latitude;

            const api=` api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=0f0f5087f3320866023c0693e881b05f `

            fetch(api).then((response) => {
                
                return response.json();

            })

            .then (data => {
                
                const{name}=data;
                const{feels_like}=data.main;
                const{id,main}=data.weather[0];

                loc.textContent=name;
                climate.textContent=main;
                tempvalue.textContent=Math.round(feels_like-32);
            })

        }

        

        )}
})