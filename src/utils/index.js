import {
  faCloud,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faCloudBolt,
  faCloudRain,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Converts a city to its lat and long coordinates
 *
 * @param {String} city
 * @return {Object} Returns object with lat and long coordinates
 */
export function cityLatLong(city) {
  switch (city) {
    case "Halifax":
      return { lat: "44.6476", long: "-63.5728" };
    case "Moscow":
      return { lat: "55.7558", long: "37.6173" };
    case "Mexico":
      return { lat: "19.4326", long: "-99.1332" };

    default:
      return;
  }
}

/**
 * Converts a day number to a string.
 *
 * @param {Number} dayIndex
 * @return {String} Returns day as string
 */
export function dayOfWeekAsString(dayIndex) {
  return ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"][dayIndex] || "";
}

/**
 * Selects icon based on weather condition.
 *
 * @param {String} condition
 * @return {Icon} Returns Fontawesome icon
 */
export function selectIcon(condition) {
  switch (condition) {
    case "Clouds":
      return faCloud;
    case "Rain":
      return faCloudShowersHeavy;
    case "Snow":
      return faSnowflake;
    case "Drizzle":
      return faCloudRain;
    case "Thunderstorm":
      return faCloudBolt;
    case "Clear":
      return faSun;

    default:
      return faCloud;
  }
}
