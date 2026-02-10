//Take input from user and print it onClick of the button.

const searchInput = document.querySelector("input");
const searchBtn = document.querySelector("#search");

searchBtn.addEventListener("click", () => {
  // alert("I was clicked")
  const location = searchInput.value;
  //Call API

  fetchWeather(location).then((data) => {
    console.log("Data is ... ", data);

    //Update DOM

    updateDOM(data);
  });

  searchInput.value = ""; //
});

async function fetchWeather(location) {
  const url = `https://api.weatherapi.com/v1/current.json?key=c04c1c1363d24ec983b184613260302&q=${location}&aqi=no`;
  const response = await fetch(url);
  //   console.log(response);

  //error handling

  if (response.status === 400) {
    //error logging location doesnt exist... //to-do
    return error;
  } else {
    const jsonData = await response.json();
    //   console.log(jsonData);

    return jsonData;
  }
}

function updateDOM(data) {
  // ************1. filter required data*************
//   console.log("I will update the dom ", data);
const temp = data.current.temp_c;
const location = data.location.name;
const timeData = data.location.localtime;  //"2026-01-23 12:24"
const [date, time] = timeData.split(" ");
const iconUrl = data.current.condition.icon;

function formatEpoch(epochSeconds) {
  // Convert seconds to milliseconds
  const date = new Date(epochSeconds * 1000);

  // Arrays for mapping day names
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Helper to add leading zero (e.g., 9 -> 09)
  const pad = (num) => num.toString().padStart(2, '0');

  // Extract components (Using UTC to match standard epoch converters)
  const hours = pad(date.getUTCHours());
  const minutes = pad(date.getUTCMinutes());
  const seconds = pad(date.getUTCSeconds());
  const dayName = days[date.getUTCDay()];
  const year = date.getUTCFullYear();
  const month = pad(date.getUTCMonth() + 1); // Months are 0-indexed
  const dayDate = pad(date.getUTCDate());

  // Construct the string: Time-Day-Date
  return dayName;
}

// Example Usage
const epochValue = 1770144300;
console.log(formatEpoch(epochValue));
const day=formatEpoch(epochValue);

console.log(temp,location,date,time,iconUrl);

  // ************2. update the dom*************

const temperatureEl = document.querySelector(".temperature");
const locationEl = document.querySelector(".location");
const iconImg = document.querySelector("img");
const timeEle=document.querySelector(".time");
const dayEle=document.querySelector(".day");
const dateEle=document.querySelector(".date");

temperatureEl.textContent = temp + " C";
locationEl.textContent = location;
iconImg.src = iconUrl;

//update date-time etc
timeEle.textContent=time;
dayEle.textContent=day;
dateEle.textContent=date;

}