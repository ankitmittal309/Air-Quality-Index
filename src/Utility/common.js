import dayjs from "dayjs";

export function prepareHistoricalAQI(airQualityIndex, dataFromServer) {
  const currentAQI = [...airQualityIndex];
  for (const AQI of dataFromServer) {
    const cities = currentAQI.map((eachAQI) => eachAQI.city);
    if (cities.includes(AQI.city)) {
      currentAQI.forEach((eachAQI) => {
        if (eachAQI.city === AQI.city) {
          eachAQI.currentaqi = AQI.aqi.toFixed(2);
          eachAQI.AQIs.push({
            aqi: AQI.aqi.toFixed(2),
            datePublished: dayjs().fromNow(),
          });
        }
      });
    } else {
      const prepareCityAQI = {
        city: AQI.city,
        AQIs: [
          {
            aqi: AQI.aqi.toFixed(2),
            datePublished: dayjs().fromNow(),
          },
        ],
        currentaqi: AQI.aqi.toFixed(2),
      };
      currentAQI.push(prepareCityAQI);
    }
  }
  return currentAQI;
}
