 
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
   

   function openMission() {
const missionSelect = document.getElementById('missionSelect');
const selectedMission = missionSelect.value;

if (selectedMission) {
   alert(`Opening ${selectedMission}`);
   // Implement the logic to actually load/open the mission
} else {
   alert('Please select a mission to open.');
}
}

function deleteMission() {
const missionSelect = document.getElementById('missionSelect');
const selectedMission = missionSelect.value;

if (selectedMission) {
   const confirmDelete = confirm(`Are you sure you want to delete ${selectedMission}?`);
   if (confirmDelete) {
       missionSelect.options[missionSelect.selectedIndex].remove();
       alert(`${selectedMission} has been deleted.`);
   }
} else {
   alert('Please select a mission to delete.');
}
}
// Update the immersion value from the range input
function updateImmersionValue() {
const immersionRange = document.getElementById('immersionRange');
const immersionValue = document.getElementById('immersionValue');
immersionValue.value = immersionRange.value + ' meters';
}

// Update the speed value from the range input
function updateSpeedValue() {
const speedRange = document.getElementById('speedRange');
const speedValue = document.getElementById('speedValue');
speedValue.value = speedRange.value + ' m/s';
}
// Function to add selected mission file to the dropdown
function addMissionToDropdown() {
const fileInput = document.getElementById('missionFile');
const missionSelect = document.getElementById('missionSelect');

const file = fileInput.files[0]; // Get the selected file
if (file) {
   // Create a new option for the dropdown
   const option = document.createElement('option');
   option.text = file.name;  // Use the file name as the option text
   option.value = file.name; // Set the value of the option
   
   // Add the new option to the dropdown
   missionSelect.add(option);
   
   // Reset file input for future use
   fileInput.value = "";
} else {
   console.log('No file selected');
}
}

// Function to delete the selected mission from the dropdown
function deleteMission() {
const missionSelect = document.getElementById('missionSelect');

if (missionSelect.selectedIndex > 0) {  // Make sure something is selected
   missionSelect.remove(missionSelect.selectedIndex);
} else {
   alert('Please select a mission to delete.');
}
}
// Variables for video control and progress
let isPlaying = false;
   let currentTime = 0;  // in seconds
   const videoDuration = 600;  // Example: 10 minutes = 600 seconds
   const startTimeDisplay = document.getElementById('startTime');
   const endTimeDisplay = document.getElementById('endTime');
   const watchedTimeDisplay = document.getElementById('watchedTime');
   const progressBar = document.getElementById('progress');
   const playPauseBtn = document.getElementById('playPauseBtn');
   const backwardBtn = document.getElementById('backwardBtn');
   const forwardBtn = document.getElementById('forwardBtn');

   // Function to convert seconds to HH:MM:SS format
   function formatTime(seconds) {
       const hrs = Math.floor(seconds / 3600);
       const mins = Math.floor((seconds % 3600) / 60);
       const secs = seconds % 60;
       return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
   }

   // Set initial time displays
   endTimeDisplay.textContent = formatTime(videoDuration);
   watchedTimeDisplay.textContent = formatTime(currentTime);

   // Update progress bar
   function updateProgress() {
       const progressPercentage = (currentTime / videoDuration) * 100;
       progressBar.style.width = `${progressPercentage}%`;
       watchedTimeDisplay.textContent = formatTime(currentTime);
   }

   // Play/Pause functionality
   playPauseBtn.addEventListener('click', function() {
       isPlaying = !isPlaying;
       playPauseBtn.textContent = isPlaying ? 'Pause' : 'Play';
       if (isPlaying) {
           playVideo();
       } else {
           clearInterval(playInterval);
       }
   });
      
   // Play video function (updates every second)
   let playInterval;
   function playVideo() {
       playInterval = setInterval(function() {
           if (currentTime < videoDuration) {
               currentTime++;
               updateProgress();
           } else {
               clearInterval(playInterval);  // Stop when video ends
               playPauseBtn.textContent = 'Play';  // Reset to Play button
           }
       }, 1000);
   }

   // Forward and Backward functionality
   forwardBtn.addEventListener('click', function() {
       currentTime = Math.min(currentTime + 10, videoDuration);
       updateProgress();
   });

   backwardBtn.addEventListener('click', function() {
       currentTime = Math.max(currentTime - 10, 0);
       updateProgress();
   });

   

  


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


// Initialize the feature group for drawn items
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);



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

// Function to center the map
function centerMap() {
   var centerLat = 18.5204; // Example: Pune, India latitude
   var centerLon = 73.8567; // Example: Pune, India longitude
   var zoomLevel = 13; // Preferred zoom level
   
   map.setView([centerLat, centerLon], zoomLevel);  // Set map center and zoom level
}

// Event listener for "Center" button
document.querySelector('button img[alt="Center"]').parentElement.addEventListener('click', centerMap);

// Function to rotate the map based on the degree slider
function rotateMap() {
       var degree = document.getElementById('degreeRange').value;
       document.getElementById('degreeValue').textContent = degree + '°';

       // Apply rotation to the map container
       document.getElementById('map').style.transform = 'rotate(' + degree + 'deg)';
   }

// Function to update map zoom dynamically based on slider
function updateZoomLevel() {
   var zoomLevel = parseInt(document.getElementById('zoomRange').value);
   map.setZoom(zoomLevel);  // Set map zoom level
   document.getElementById('zoomValue').textContent = zoomLevel;
}

// Event listener to update zoom level when slider is scrolled
document.getElementById('zoomRange').addEventListener('input', updateZoomLevel);




