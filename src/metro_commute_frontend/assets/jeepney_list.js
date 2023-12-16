var input = document.getElementById('search_jeep');
var jeepneyList = document.getElementById('jeepneyList');
var originalList = Array.from(jeepneyList.children);

let jeepneys1 = [
    'Bago Aplaya',
    'Bangkal',
    'Bo. Obrero',
    'Calinan',
    'Catalunan Grande',
    'Ecoland',
    'Maa - Agdao',
    'Maa - Bankerohan',
    'Matina',
    'Matina Aplaya',
    'Matina Crossing',
    'Matina Pangi',
    'Mintal',
    'Puan',
    'Talomo',
    'Toril',
    'Ulas',
];

const jeepneys = [
    { 
        name: "Bago Aplaya",
    },
    { 
        name: "Bangkal",
    },
    { 
        name: "Bo. Obrero",
    },
    { 
        name: "Calinan",
    },
    { 
        name: "Catalunan Grande",
    },
    { 
        name: "Ecoland",
    },
    { 
        name: "Maa -  Agdao",
    },
    { 
        name: "Maa - Bangkerohan",
    },
    { 
        name: "Matina",
    },
    { 
        name: "Matina Aplaya",
    },
    { 
        name: "Matina Crossing",
    },
    { 
        name: "Matina Pangi",
    },
    { 
        name: "Mintal",
    },
    { 
        name: "Puan",
    },
    { 
        name: "Talomo",
    },
    { 
        name: "Ulas",
    }
];

function generateJeepneyList() {
    const jeepneyListDiv = document.getElementById('jeepneyList');

    jeepneys.forEach(jeepney => {
        const jeepneyDiv = document.createElement('div');
        jeepneyDiv.className = 'jeepney';

        jeepneyDiv.innerHTML = `
            <p class="jeepney_name">${jeepney.name}</p>
        `;

        jeepneyListDiv.appendChild(jeepneyDiv);
    });
}
// Call the function to generate the product list
generateJeepneyList();

function search_jeep() {

    let filter = document.getElementById('search_jeep').value.toUpperCase();
    let item = document.querySelectorAll('.jeepney');
    let l = document.getElementsByClassName('jeepney_name');

    for(var i = 0;i<=l.length;i++){
    let a=item[i].getElementsByClassName('jeepney_name')[0];
    let value=a.innerHTML || a.innerText || a.textContent;
    if(value.toUpperCase().indexOf(filter) > -1) {
    item[i].style.display="";
    }
    
    else
    {
    item[i].style.display="none";
    }
    }
}



/*
let jeepneys = [
    'Bago Aplaya',
    'Bangkal',
    'Bo. Obrero',
    'Buhangin via Dacudao',
    'Buhangin via JP Laurel',
    'Bunawan via Buhangin',
    'Bunawan via Sasa',
    'Calinan',
    'Camp Catitipan via JP Laurel',
    'Catalunan Grande',
    'Ecoland',
    'El Rio',
    'Emily Homes',
    'Jade Valley',
    'Lasang via Buhangin',
    'Lasang via Sasa',
    'Maa - Agdao',
    'Maa - Bankerohan',
    'Magtuod',
    'Matina',
    'Matina Aplaya',
    'Matina Crossing',
    'Matina Pangi',
    'Mintal',
    'Panacan via Cabaguio',
    'Panacan - SM City Davao',
    'Puan',
    'Route 1',
    'Route 2',
    'Route 3',
    'Route 4',
    'Route 5',
    'Route 6',
    'Route 7',
    'Route 8',
    'Route 9',
    'Route 10',
    'Route 11',
    'Route 12',
    'Route 13',
    'Route 14',
    'Route 15',
    'Sasa via Cabaguio',
    'Sasa via JP Laurel',
    'Sasa via R. Castillo',
    'Talomo',
    'Tibungco via Buhangin',
    'Tibungco via Cabaguio',
    'Tibungco via R. Castillo',
    'Toril',
    'Ulas',
    'Wa-an',
];
*/