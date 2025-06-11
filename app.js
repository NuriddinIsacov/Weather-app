const getData = async () => {
  const key = "00360a398219453785872137251006";
  const region = document.getElementById("search").value || "Tashkent";

  const { data } = await axios.get(
    `https://api.weatherapi.com/v1/forecast.json?q=${region}&days=1&key=${key}`
  );
  const iconUrl =
    data.current.condition.icon ||
    "https://cdn.weatherapi.com/weather/64x64/day/113.png";
  console.log(data);

  const regionData = document.getElementById("region");
  const countryData = document.getElementById("country");
  regionData.textContent = data.location.name;
  countryData.textContent = data.location.country;
  const degree = document.getElementById("degree");
  degree.textContent = Math.floor(data.current.temp_c) + " ";

  document.getElementById("icon").src = iconUrl;
  document.getElementById("currentCnd").textContent =
    data.current.condition.text;
};
