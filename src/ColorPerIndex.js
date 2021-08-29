export default function colorfunc(data) {
  if (data.AQIs[data.AQIs.length - 1].aqi > 400) {
    return { color: "#af2d24" };
  } else if (data.AQIs[data.AQIs.length - 1].aqi > 300) {
    return { color: "#e93f33", bg: "salmon" };
  } else if (data.AQIs[data.AQIs.length - 1].aqi > 200) {
    return { color: "#f29c33", bg: "rosybrown" };
  } else if (data.AQIs[data.AQIs.length - 1].aqi > 100) {
    return { color: "#fff833", bg: "tan" };
  } else if (data.AQIs[data.AQIs.length - 1].aqi > 50) {
    return { color: "#a3c853", bg: "cadetblue" };
  } else {
    return { color: "#55a84f", bg: "green" };
  }
}
