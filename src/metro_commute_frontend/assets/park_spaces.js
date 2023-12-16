console.log('Script is running')
var go_park = document.getElementById('search_park');

go_park.addEventListener('click', function() {
    var messageContainer = document.createElement('div');
        if (navigator.geolocation) {                                                                               
                    navigator.geolocation.watchPosition(success, error);
                    let marker, circle, zoomed;
                    function success(pos) {
                        const lat = pos.coords.latitude;
                        const lng = pos.coords.longitude;
                        const accuracy = pos.coords.accuracy;
                
                        if (marker) {
                            map.removeLayer(marker);
                            map.removeLayer(circle);
                        }
                
                    marker = L.marker([lat, lng]).addTo(map);
                    circle =  L.circle([lat, lng], {radius: accuracy}).addTo(map);
                
                        if (!zoomed) {
                        zoomed = map.fitBounds(circle.getBounds());
                        }
                
                        map.setView([lat, lng]);
                    }
                    function error(err) {
                        if (err.code === 1) {
                            alert("Please allow geolocation access");
                        } else {
                            alert("Cannot get current location");
                        }
                    }
        } else {
            console.log('Access location is disabled');
        }
        });

    //Saved spaces
        const saved_spaces = [
            { 
                name: "Davao Parking Spaces",
                place: "Magallanes St., Davao",
                slot: "0",
                image: "cars1_park.jpg" 
            },
            { 
                name: "Garcia Park & Go",
                place: "Tagum",
                slot: "2",
                image: "cars2_park.jpg" 
            },
            { 
                name: "Gmall Free Spaces",
                place: "Gensan",
                slot: "Full",
                image: "cars3_park.jpg" 
            },
            { 
                name: "Bebe's Car park",
                place: "Koronadal",
                slot: "5",
                image: "cars4_park.jpg" 
            }
        ];

        function savedParkList() {
            const parkListDiv = document.getElementById('parkingList');
        
            saved_spaces.forEach(savedSpace => {
                const parkDiv = document.createElement('div');
                parkDiv.className = 'savedSpace';
        
                // Create space_info div
                const spaceInfoDiv = document.createElement('div');
                spaceInfoDiv.className = 'space_info';
                spaceInfoDiv.innerHTML = `
                    <p class="space_name">${savedSpace.name}</p>
                    <p class="space_place">${savedSpace.place}</p>
                    <p class="space_slot">Slots Left: ${savedSpace.slot}</p>
                `;
        
                // Create and append image to savedSpace div
                const image = document.createElement('img');
                image.src = `/images/${savedSpace.image}`;
                parkDiv.appendChild(image);

                 // Append space_info to savedSpace div
                parkDiv.appendChild(spaceInfoDiv);
        
                // Append savedSpace div to parkListDiv
                parkListDiv.appendChild(parkDiv);
            });
        }
        
        savedParkList();