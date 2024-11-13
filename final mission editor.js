  
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
       