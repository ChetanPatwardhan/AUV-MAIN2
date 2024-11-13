

    // Initialize the map and set its view
    var map = L.map('map').setView([20.5937, 78.9629], 5);  // Centered on India

    // Define tile layers
    var humanitarianLayer = L.tileLayer('http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    var osmFrLayer = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://www.openstreetmap.fr">OpenStreetMap France</a>'
    });

    var osmGmLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    var lightLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    var darkLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    var wmsLayer = L.tileLayer.wms('https://example.com/geoserver/wms', {
        layers: 'your-wms-layer-name',
        format: 'image/png',
        transparent: true,
        attribution: '&copy; Your WMS Attribution'
    });

    var s57Layer = L.tileLayer('http://example.com/s57/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; Your S-57 Attribution'
    });

    var s63Layer = L.tileLayer('http://example.com/s63/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; Your S-63 Attribution'
    });

    // Initially add the humanitarian layer to the map
    humanitarianLayer.addTo(map);

    // Array to store waypoints
    var waypoints = [];

    // Event listener to capture click coordinates
    map.on('click', function(e) {
        if (addingWaypoint) {
            var latlng = e.latlng;
            waypoints.push(latlng); // Store coordinates

            // Add a marker on the clicked location
            L.marker(latlng).addTo(map)
                .bindPopup("Waypoint: " + latlng.toString())
                .openPopup();
        }
    });

    // Flag to track if waypoint mode is active
    var addingWaypoint = false;

    // Handle Waypoint button click
    document.getElementById('waypointBtn').onclick = function() {
        addingWaypoint = true;
        alert('Click on the map to add waypoints');
    };

    // Handle Save Waypoints button click
    document.getElementById('saveBtn').onclick = function() {
        if (waypoints.length === 0) {
            alert('No waypoints to save');
            return;
        }

        // Convert waypoints to a string format (e.g., JSON)
        var data = JSON.stringify(waypoints, null, 2);

        // Create a Blob object from the data
        var blob = new Blob([data], { type: 'application/json' });

        // Create a link element to trigger download
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'waypoints.json';

        // Simulate clicking the link to start download
        link.click();
    };

    // Initialize the feature group for drawn items
    var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    // Add Leaflet Draw control to the map
    var drawControl = new L.Control.Draw({
        edit: {
            featureGroup: drawnItems
        }
    });
    map.addControl(drawControl);

    // Event listener for drawing on the map
    map.on(L.Draw.Event.CREATED, function (event) {
        var layer = event.layer;
        drawnItems.addLayer(layer);
    });

    // Layer change event
    document.getElementById('layerSelect').addEventListener('change', function() {
        var selectedLayer = this.value;
        map.eachLayer(function (layer) {
            if (layer !== drawnItems) {
                map.removeLayer(layer);
            }
        });
        if (selectedLayer === 'hot') {
            humanitarianLayer.addTo(map);
        } else if (selectedLayer === 'fr') {
            osmFrLayer.addTo(map);
        } else if (selectedLayer === 'gm') {
            osmGmLayer.addTo(map);
        } else if (selectedLayer === 'light') {
            lightLayer.addTo(map);
        } else if (selectedLayer === 'dark') {
            darkLayer.addTo(map);
        } else if (selectedLayer === 'wms') {
            wmsLayer.addTo(map);
        } else if (selectedLayer === 's57') {
            s57Layer.addTo(map);
        } else if (selectedLayer === 's63') {
            s63Layer.addTo(map);
        }
    });


    // Center map on India (or another specific point)
    document.getElementById('centerBtn').addEventListener('click', function() {
        map.setView([20.5937, 78.9629], 5);  // Center on India
    });

    // Track functionality (Polyline)
    document.getElementById('trackBtn').addEventListener('click', function() {
        var polyline = L.polyline([], { color: 'blue' }).addTo(map);
        map.on('click', function(e) {
            polyline.addLatLng(e.latlng);
        });
    });

    // Track family functionality (Circle with radius)
    document.getElementById('trackFamilyBtn').addEventListener('click', function() {
        map.once('click', function(e) {
            L.circle(e.latlng, { radius: 500, color: 'green' }).addTo(map).bindPopup('Track Family (100.0m)').openPopup();
        });
    });

    // Draw circle functionality
    document.getElementById('circleBtn').addEventListener('click', function() {
        map.once('click', function(e) {
            L.circle(e.latlng, { radius: 500, color: 'red' }).addTo(map).bindPopup('Circle (500m)').openPopup();
        });
    });


    var waypointLayer = L.layerGroup().addTo(map);
    var trackLine = null;
    var totalDistance = 0;

    // Function to measure distance between points
    function measureDistance(latlng1, latlng2) {
        return map.distance(latlng1, latlng2);
    }

    // Click to add waypoint and start tracking the line
    map.on('click', function (e) {
        if (trackLine === null) {
            var marker = L.marker(e.latlng, {
                draggable: true
            }).addTo(waypointLayer);
          

            // Track the line and measure distance
            map.on('mousemove', function (event) {
                trackLine.addLatLng(event.latlng);
                var dist = measureDistance(trackLine.getLatLngs()[0], event.latlng);
                totalDistance = dist.toFixed(2);
                console.log('Distance from waypoint: ' + totalDistance + ' meters');
            });

            // Stop tracking on click
            map.once('click', function (event) {
                map.off('mousemove');
                trackLine.addLatLng(event.latlng);
                console.log('Final distance: ' + totalDistance + ' meters');
            });
        }
    });

    // Function to draw track family (Rail1 subpoints like j1a, j1b, etc.)
    function drawTrackFamily() {
        var railPath = [
            [20.0, 78.0], // j1a
            [20.1, 78.1], // j1b
            [20.2, 78.2], // j2a
            [20.3, 78.3]  // j2b
        ];

        var railLine = L.polyline(railPath, {
            color: 'blue',
            weight: 4
        }).addTo(map);

        // Add markers for the subpoints
        railPath.forEach(function (point) {
            L.marker(point).addTo(waypointLayer);
        });

        console.log("Track family (Rail1) drawn with subpoints j1a, j1b, j2a, j2b");
    }

    // Add a button to trigger track family drawing
    var trackFamilyControl = L.control({ position: 'topleft' });
    trackFamilyControl.onAdd = function () {
        var button = L.DomUtil.create('button', 'track-family-btn');
        button.innerHTML = 'Track Family (Rail1)';
        button.onclick = function () {
            drawTrackFamily();
        };
        return button;
    };
    trackFamilyControl.addTo(map);
  
 
         
    // Function to open the settings panel
    function openSettingsPanel() {
        document.getElementById('settingsPanel').classList.add('open');
        document.getElementById('overlay').classList.add('show');
    }

    // Function to close the settings panel
    function closeSettingsPanel() {
        document.getElementById('settingsPanel').classList.remove('open');
        document.getElementById('overlay').classList.remove('show');
    }

    // Event listener for "Mission Editor" button click
    document.getElementById('missionEditorBtn').addEventListener('click', openSettingsPanel);

    // Event listener for "close" button on the settings panel
    document.getElementById('closePanelBtn').addEventListener('click', closeSettingsPanel);

    // Event listener to close settings panel when clicking on the overlay
    document.getElementById('overlay').addEventListener('click', closeSettingsPanel);

    // Update Zoom Value
    function updateZoomValue() {
        const zoomRange = document.getElementById('zoomRange');
        const zoomValue = document.getElementById('zoomValue');
        zoomValue.textContent = zoomRange.value;
    }

    // Update Degree Value
    function updateDegreeValue() {
        const degreeRange = document.getElementById('degreeRange');
        const degreeValue = document.getElementById('degreeValue');
        degreeValue.textContent = `${degreeRange.value}°`;
    }

    // Add Layer Functionality
    function addLayer() {
        const select = document.getElementById('layerSelect');
        const layerName = select.value;
        const layerList = document.querySelector('.layer-list');
        const existingLayer = Array.from(layerList.children).find(layer => layer.textContent.includes(layerName));

        if (!existingLayer) {
            const layerItem = document.createElement('div');
            layerItem.className = 'layer-item';
            layerItem.innerHTML = `${layerName} <button onclick="removeLayer(this)"><img src="delet2.jpg" alt="Remove Layer" style="border: 1px solid white;" width="15" height="15"></button>`;
            layerList.appendChild(layerItem);
        }
    }

    // Remove Layer
    function removeLayer(button) {
        const layerItem = button.parentElement;
        layerItem.remove();
    }

    let savedPayloads = [];

    // Show New Mission on Clicking Create New Mission
    document.getElementById('createMissionBtn').addEventListener('click', function() {
        document.getElementById('newMissionHeader').style.display = 'block';
        document.getElementById('payloadSection').style.display = 'block';
        document.getElementById('deviceSection').style.display = 'block';
    });

    // Add Payload Functionality
    document.getElementById('addPayloadBtn').addEventListener('click', function() {
        const payloadName = document.getElementById('payloadInput').value;
        const payloadType = document.getElementById('payloadType').value;

        if (payloadName && payloadType) {
            const payloadDiv = document.createElement('div');
            payloadDiv.innerHTML = `<strong>Payload:</strong> ${payloadName} (${payloadType})`;
            document.getElementById('payloadBox').appendChild(payloadDiv);

            // Save to array
            savedPayloads.push({ name: payloadName, type: payloadType });

            // Clear inputs
            document.getElementById('payloadInput').value = '';
            document.getElementById('payloadType').value = '';
        } else {
            alert("Please enter both payload name and type.");
        }
    });

    // Save Payloads to LocalStorage
    document.getElementById('savePayloadBtn').addEventListener('click', function() {
        if (savedPayloads.length === 0) {
            alert('No payloads to save!');
            return;
        }
        const payloadData = JSON.stringify(savedPayloads);
        localStorage.setItem('savedPayloads', payloadData);
        alert('Payloads saved successfully!');
        populateUsePayloadDropdown();
    });

    // Populate Use Payload Dropdown with saved payloads
    function populateUsePayloadDropdown() {
        const savedPayloadsData = localStorage.getItem('savedPayloads');
        const dropdown = document.getElementById('usePayloadDropdown');
        dropdown.innerHTML = '<option value="" disabled selected>Select a saved payload</option>'; // Clear current options

        if (savedPayloadsData) {
            const parsedPayloads = JSON.parse(savedPayloadsData);
            parsedPayloads.forEach(payload => {
                const option = document.createElement('option');
                option.value = payload.name;
                option.textContent = `${payload.name} (${payload.type})`;
                dropdown.appendChild(option);
            });
        }
    }
    // Add selected saved payload to the list
      document.getElementById('addSavedPayloadBtn').addEventListener('click', function() {
      const dropdown = document.getElementById('usePayloadDropdown');
     const selectedPayload = dropdown.value;

    if (selectedPayload) {
        const savedPayloadList = document.getElementById('savedPayloadList');
        const existingPayload = Array.from(savedPayloadList.children).find(payload => payload.textContent.includes(selectedPayload));

        if (!existingPayload) {
            const payloadItem = document.createElement('div');
            payloadItem.className = 'payload-item';
            payloadItem.innerHTML = `${selectedPayload} <button onclick="removeSavedPayload(this)"><img src="delet2.jpg" alt="Remove Payload" style="border: 1px solid white;" width="15" height="15"></button>`;
            savedPayloadList.appendChild(payloadItem);
        } else {
            alert('Payload is already added.');
        }
        } else {
        alert('Please select a payload.');
       }
      });

// Remove saved payload from the list
function removeSavedPayload(button) {
    const payloadItem = button.parentElement;
    payloadItem.remove();
}
      // Counter to auto-generate mission names
let missionCounter = 1;

// Handle Save Mission with File Path and Mission Name
document.getElementById('saveMission').addEventListener('click', function() {
// Prompt the user for a mission name
let missionName = prompt('Please enter the mission name:');

// If the user does not enter a name, auto-generate one
if (!missionName) {
    missionName = `Mission ${missionCounter}`;
    missionCounter++; // Increment counter for the next mission
}

// Create the file path using the mission name
const filePath = `C:/Missions/${missionName}.json`;

// Display the file path in the file path section
document.getElementById('filePathDisplay').textContent = filePath;

// Display the mission name under the New Mission header
document.getElementById('missionNameDisplay').textContent = missionName;

// Ensure the New Mission header is visible
document.getElementById('newMissionHeader').style.display = 'block';

// Save the mission and display success message
alert('Mission saved successfully!');

// Additional mission saving logic (e.g., sending to server or saving locally) can be added here
});

// Add Device Functionality
document.getElementById('addDeviceBtn').addEventListener('click', function() {
const deviceName = document.getElementById('deviceInput').value;
const deviceType = document.getElementById('deviceType').value;

if (deviceName && deviceType) {
    // Create a button element for the added device
    const deviceButton = document.createElement('button');
    deviceButton.className = 'device-button'; // Add custom class for styling if needed
    deviceButton.innerHTML = `${deviceName} (${deviceType})`;
    
    // Add an event listener to show WP, Track, Circle buttons when clicked
    deviceButton.addEventListener('click', function() {
        // Show the WP, Track, Circle buttons
        document.getElementById('deviceButtons').style.display = 'block';
    });

    // Append the new button to the added devices section
    document.getElementById('addedDevices').appendChild(deviceButton);

    // Clear input fields
    document.getElementById('deviceInput').value = '';
    document.getElementById('deviceType').value = '';
} else {
    alert("Please enter both a device name and type.");
}
});


// Trigger the file input when Open Existing Mission button is clicked
document.getElementById('openMissionBtn').addEventListener('click', function() {
document.getElementById('fileInput').click();
});

// Handle the selected file
document.getElementById('fileInput').addEventListener('change', function(event) {
const file = event.target.files[0];
if (file) {
    // Handle file logic here (you can read the file or perform actions)
    alert(`You selected the file: ${file.name}`);
}
});
    const fileReader = new FileReader();
    fileReader.onload = function(e) {
    const fileContent = e.target.result;
// Parse fileContent based on file type (e.g., JSON.parse for .json files)
    };
    fileReader.readAsText(file);
   
