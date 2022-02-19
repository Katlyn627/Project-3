window.weatherWidgetConfig = window.weatherWidgetConfig || [];
window.weatherWidgetConfig.push({
  selector: ".weatherWidget",
  apiKey: "M6NSXCS3GWMV8YH3AND8WM2H3",
  location: "Denver, Co",
  unitGroup: "us",
  forecastDays: 5,
  title: "Weather",
  showTitle: true,
  showConditions: true,
});

(function () {
  var d = document,
    s = d.createElement("script");
  s.src =
    "https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js";
  s.setAttribute("data-timestamp", +new Date());
  (d.head || d.body).appendChild(s);
})();