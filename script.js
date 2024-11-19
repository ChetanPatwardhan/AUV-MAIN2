// Sample dataset with dynamic values
const data = [
    {
        "navigation": {
            "latitude": "28.7041",
            "longitude": "77.1025",
            "pitch": "5.2",
            "roll": "2.8",
            "pressureSensor": "1013",
            "internalPressure": "1200"
        },
        "gps": {
            "fix": "Yes",
            "sync": "No"
        },
        "hardware": {
            "battery": "85%",
            "storage": "128GB"
        }
    },
    {
        "navigation": {
            "latitude": "28.7045",
            "longitude": "77.1030",
            "pitch": "5.5",
            "roll": "3.1",
            "pressureSensor": "1015",
            "internalPressure": "1205"
        },
        "gps": {
            "fix": "No",
            "sync": "Yes"
        },
        "hardware": {
            "battery": "84%",
            "storage": "127GB"
        }
    }
    
    // Add more entries if needed
];

// Function to update only the data values in the HTML
function updateData(entry) {
    document.getElementById('latitude').innerText = entry.navigation.latitude;
    document.getElementById('longitude').innerText = entry.navigation.longitude;
    document.getElementById('pitch').innerText = entry.navigation.pitch;
    document.getElementById('roll').innerText = entry.navigation.roll;
    document.getElementById('pressureSensor').innerText = entry.navigation.pressureSensor;
    document.getElementById('internalPressure').innerText = entry.navigation.internalPressure;
    document.getElementById('gpsFix').innerText = entry.gps.fix;
    document.getElementById('gpsSync').innerText = entry.gps.sync;
    document.getElementById('battery').innerText = entry.hardware.battery;
    document.getElementById('storage').innerText = entry.hardware.storage;
}

// Cycling through the data every second
let index = 0;
setInterval(() => {
    updateData(data[index]);
    index = (index + 1) % data.length;
}, 1000);
