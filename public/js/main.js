const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const day = document.getElementById('day');
const today_date = document.getElementById('today_date');

const weekDays = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
const d = new Date();
day.innerText = weekDays[d.getDay()];
today_date.innerText = d.getDate()+" "+months[d.getMonth()];


const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal === ''){
        city_name.innerText = 'Please input city name';
        temp. style. visibility = "hidden";
        temp_status. style. visibility = "hidden";
    }
    else{
        try{
            let url = `https://api.weatherapi.com/v1/current.json?key=b1e00f72f6ef4f06b0485523222101&q=${cityVal}`;
            const response = await fetch(url , {
                method: 'GET',
                dataType: 'JSON',
                headers: {'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json' , 'Accept':'application/json'},
            });
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].location.name}, ${arrData[0].location.country}`;
            temp.innerText = arrData[0].current.temp_c+'°C ';
            temp_status.innerHTML = `<img src="https:${arrData[0].current.condition.icon}" width="100px" height="100px">`
            temp. style. visibility = "visible";
            temp_status. style. visibility = "visible";
            console.log(data);
        }catch{
            // console.log(error)
            city_name.innerText = 'Please enter correct city name';
            temp. style. visibility = "hidden";
            temp_status. style. visibility = "hidden";
        }
    }
}

submitBtn.addEventListener('click', getInfo);