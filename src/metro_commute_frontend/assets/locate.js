const locList = document.getElementById('loc-list');
var codeProcess ='forward';

//Revere and Forward Button
var btn = document.getElementById('btn')

            function leftClick() {
                btn.style.left = '0'
                codeProcess = "forward";
                console.log(codeProcess);
            }
            
            function rightClick() {
                btn.style.left = '75px'
                codeProcess = "reverse";
                console.log(codeProcess);
            }

//Inputs
document.getElementById('loc_input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
    const query = loc_input.value;
    fetch('https://nominatim.openstreetmap.org/search?format=json&polygon=1&addressdetails=1&q=' + query)
        .then(result => result.json())
        .then(parsedResult => {
            setLocList(parsedResult);
        });
    }
    console.log(codeProcess)
    });

    function setLocList(parsedResult) {
        locList.innerHTML = "";
        for (const marker of currentMarkers) {
        map.removeLayer(marker);
        }
        map.flyTo(new L.LatLng(7.4469328, 124.5138287), 8);
        for (const result of parsedResult) {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'list-group-item-action');
        
        // Store the entire result object as a data attribute
        li.dataset.result = JSON.stringify(result);
        
        // Display only the display_name in the list item
        li.innerHTML = result.display_name;
        
        li.addEventListener('click', (event) => {
            for (const child of locList.children) {
                child.classList.remove('active');
            }
            event.target.classList.add('active');
        
            // Parse the stored result object from the data attribute
            const clickedData = JSON.parse(event.target.dataset.result);

            document.getElementById('loc_input').value = '';
            console.log(document.getElementById('link-to-copy').value);

            if (codeProcess == "forward") {
                document.getElementById('loc_input').placeholder = result.display_name;
                document.getElementById('link-to-copy').value = result.lat + ', ' + result.lon;

            } else if (codeProcess == "reverse") {
                var coordinates = result.lat + ', ' + result.lon;
                document.getElementById('loc_input').placeholder = coordinates;
                document.getElementById('link-to-copy').value = result.display_name;

            }

            console.log(document.getElementById('loc_input').placeholder);
            console.log(coordinates);
            console.log(document.getElementById('link-to-copy').value);
            console.log(result.display_name);
    
        
            const position = new L.LatLng(clickedData.lat, clickedData.lon);
            map.flyTo(position, 13);
            document.querySelector('.searchLoc_result').style.display = 'none'; // hide list after selection
        });
        
        const position = new L.LatLng(result.lat, result.lon);
        currentMarkers.push(new L.marker(position).addTo(map));
        locList.appendChild(li);
        }
        }

        document.getElementById('copy-button').addEventListener('click', function() {
            const linkToCopy = document.getElementById('link-to-copy');
            linkToCopy.select();
            linkToCopy.setSelectionRange(0, 99999); /* For mobile devices */
            document.execCommand('copy');
            alert('Copied to clipboard!');
        });