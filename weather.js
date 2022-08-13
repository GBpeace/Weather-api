async function getWeatherData(city) {
    var data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d055e39ee237af35ca066f35474e9df`);
    var res = await data.json();
    console.log(res);
    var newcity = res.weather[0];
    var newtemp = res.main;
    var newwind = res.wind;
    const { speed } = newwind;
    console.log(newtemp);
    const { temp, humidity } = newtemp;
    console.log(temp, humidity);
    
    const { main, description, icon } = newcity;
    console.log(main, description, icon);
    document.querySelector('.humidity').innerHTML = `${humidity}` + "%";
    document.querySelector('.temp').innerHTML = `${Math.floor(temp-273.15)+"<sup class='tempfont'>0</sup>C"}`;
    document.querySelector('.main').innerHTML = `${main}`;
    document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + `${icon}` + ".png";
    document.querySelector('.discription').innerHTML = "description:" + " " + `${description}`;
    var newname = document.querySelector('.search-bar').value;
    document.querySelector(".winddata").innerHTML = `${speed}` + "km/hr";

    console.log(newname);
}
getWeatherData('Mumbai');
function getData() {
    var city = document.querySelector(".search-bar").value;
    // alert(city);
    
        getWeatherData(city);

        document.querySelector('.city').innerHTML = city;
        document.querySelector(".search-bar").value = "";
    
}
let input = document.querySelector('.search-bar');
input.addEventListener('keyup', (e)=>{
    if(e.keyCode === 13){
        getData();
    }
})