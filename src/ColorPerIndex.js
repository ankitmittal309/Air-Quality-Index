export default function colorfunc(data) {
  if (data.aqi > 400) {
    return "#af2d24";
  } else if (data.aqi > 300) {
    return "#e93f33";
  } else if (data.aqi > 200) {
    return "#f29c33";
  } else if (data.aqi > 100) {
    return "#fff833";
  } else if (data.aqi > 50) {
    return "#a3c853";
  } else {
    return "#55a84f";
  }
}
