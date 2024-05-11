const tempEl = document.getElementById("temp");
const windchillEl = document.getElementById("windchill");
const windSpeedEl = document.getElementById("windSpeed");

const temp = Number(tempEl.textContent);
const windSpeed = Number(windSpeedEl.textContent);

const calculateWindChill = (temp, windSpeed) => {
  const windchill =
    0.6215 * temp -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temp * Math.pow(windSpeed, 0.16) +
    13.12;
  return windchill;
};

if (temp <= 10 && windSpeed > 4.8) {
  const windchill = calculateWindChill(temp, windSpeed);
  windchillEl.innerHTML = `${windchill.toFixed(1)} &deg;C`;
} else {
  windchillEl.textContent = `N/A`;
}
