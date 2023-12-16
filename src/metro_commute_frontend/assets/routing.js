var point_origin;
var point_destination;
var resultList = document.getElementById('result-list');
const mapContainer = document.getElementById('map');
const currentMarkers = [];


var map = L.map('map');
map.setView([7.0648306, 125.6080623], 13);

var titleLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: "OSM"
}).addTo(map);

//Point A -entered input
document.getElementById('point_a').addEventListener('keydown', (event) => {
if (event.key === 'Enter') {
const query = point_a.value;
fetch('https://nominatim.openstreetmap.org/search?format=json&polygon=1&addressdetails=1&q=' + query)
    .then(result => result.json())
    .then(parsedResult => {
        setResultList(parsedResult);
    });
}
});

//Point B -entered input
document.getElementById('point_b').addEventListener('keydown', (event) => {
if (event.key === 'Enter') {
const query = point_b.value;
fetch('https://nominatim.openstreetmap.org/search?format=json&polygon=1&addressdetails=1&q=' + query)
    .then(result => result.json())
    .then(parsedResult => {
        setResultList(parsedResult);
        
        // Show the result list
    document.querySelector('.searchLoc_result').style.display = 'block';

    });
}
});

function setResultList(parsedResult) {
resultList.innerHTML = "";
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
    for (const child of resultList.children) {
        child.classList.remove('active');
    }
    event.target.classList.add('active');

    // Parse the stored result object from the data attribute
    const clickedData = JSON.parse(event.target.dataset.result);

        if (!point_origin) {
            // If not set, store the clicked data as point_origin
            point_origin = {
                lat: clickedData.lat,
                lon: clickedData.lon
                
            };
            document.getElementById('point_a').value = '';
            document.getElementById('point_a').placeholder = result.display_name;
            console.log(point_origin);
            console.log(result);
        } else {
            // If point_origin is already set, store the clicked data as point_destination
            point_destination = {
                lat: clickedData.lat,
                lon: clickedData.lon
            };
            document.getElementById('point_b').value = '';
            document.getElementById('point_b').placeholder = result.display_name;
            console.log(point_destination);
        }

    const position = new L.LatLng(clickedData.lat, clickedData.lon);
    map.flyTo(position, 13);

    const searchLocResult = document.querySelector('.input');
    searchLocResult.style.marginBottom = '50px';

    document.querySelector('.searchLoc_result').style.display = 'none'; // hide list after selection
});

const position = new L.LatLng(result.lat, result.lon);
currentMarkers.push(new L.marker(position).addTo(map));
resultList.appendChild(li);
}
}

//Go button
document.getElementById('search-button').addEventListener('click', () => {

if (point_origin !== '' && point_destination !== '') {
calculateRoute();
} else {
alert('Please fill in both Point A and Point B before searching.');
}
});

function calculateRoute() {
if (point_origin && point_destination) {

console.log(point_origin.lat);
console.log(point_origin.lon);
L.Routing.control({
    waypoints: [
    L.latLng(point_origin.lat, point_destination.lon),
    L.latLng(point_destination.lat, point_destination.lon)
//L.latLng(7.06389545, 125.59567558858993),
//L.latLng(7.0912881, 125.6098813)
]
}).addTo(map);

console.log("Origin: ", point_a, point_origin.lat, point_origin.lon);
console.log("Destination: ", point_b, point_origin.lat, point_origin.lon);
console.log('Calculating route...');
} else {

alert('Please select both starting (Point A) and destination (Point B) points before calculating the route.');
}
}



map.on('click', function(e) {
console.log(e)
var secondMArker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
L.Routing.control({
    waypoints: [
    L.latLng(7.0648306, 125.6080623),
    L.latLng(e.latlng.lat, e.latlng.lng)
] 
}).addTo(map);
}) 

/*--------------------------------------------------------*/

