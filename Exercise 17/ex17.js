let temperature = 27;

if (temperature < 0) {
    console.log("It's very cold outside");
} else if (temperature >= 0 && temperature < 15) {
    console.log("It's cold outside");
} else if (temperature >= 15 && temperature < 25) {
    console.log("It's warm outside");
} else {
    console.log("It's hot outside");
}