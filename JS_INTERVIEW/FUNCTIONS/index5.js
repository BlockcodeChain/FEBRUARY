// wrf that take traffic light color and give the correct instruction go for green red stop caution yellow invalid color for anything else 

    function trafficLight(color) {
    switch(color.toLowerCase()) {
        case "green":
            return "Go";
        case "red":
            return "Stop";
        case "yellow":
            return "Caution";
        default:
            return "Invalid color";
    }
}

// Test
console.log(trafficLight("Green"));   // Go
console.log(trafficLight("RED"));     // Stop
console.log(trafficLight("yellow"));  // Caution
console.log(trafficLight("purple"));  // Invalid color
