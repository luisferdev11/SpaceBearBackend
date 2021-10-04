import { dataCosmosTLE } from "./fromApi.js";
import { dataFenyunTLE } from "./fromApi.js";
import { dataIridiumTLE } from "./fromApi.js";
import { dataMicrosatTLE } from "./fromApi.js";
import { dataNOARDTLE } from "./fromApi.js";

import { getSatelliteInfo } from "tle.js/dist/tlejs.cjs";

let locationOriginalSatellites = []

const dataTLE = {
    0: dataCosmosTLE,
    1: dataIridiumTLE,
    2: dataFenyunTLE,
    3: dataMicrosatTLE,
    4: dataNOARDTLE
};

const satellites = {
    0: "COSMOS-2251",
    1: "IRIDIUM-33",
    2: "FENGYUN-1C",
    3: "MICROSAT-R",
    4: "NOARD"
};

const observerLat = 0;
const observerLng = 0;


// Taba bugeado el elemento 133 del dataset de cosmos

let dataCosmosJSON = [];

for (let i = 0; i < dataTLE[0].length - 916; i++) {

    dataCosmosJSON [i] = getSatelliteInfo(dataTLE[0][i], null, observerLat, observerLng, 0);
    dataCosmosJSON[i].satellite = satellites[0];
    delete dataCosmosJSON[i].elevation;
    delete dataCosmosJSON[i].azimuth;
    delete dataCosmosJSON[i].range;
    delete dataCosmosJSON[i].velocity;
    
}

// Se bugea en el elemento 2980 aprox
let dataNOARDJSON = [];
for (let i = 0; i < dataTLE[4].length - 1680; i++) {

    dataNOARDJSON [i] = getSatelliteInfo(dataTLE[4][i], null, observerLat, observerLng, 0);
    dataNOARDJSON[i].satellite = satellites[4];
    delete dataNOARDJSON[i].elevation;
    delete dataNOARDJSON[i].azimuth;
    delete dataNOARDJSON[i].range;
    delete dataNOARDJSON[i].velocity;
    
}



let dataTheOtherOnesJSON = [];

for (let i = 1; i < 4; i++) {
    
    for (let j = 0; j < dataTLE[i].length; j++) {

        dataTheOtherOnesJSON [j] = getSatelliteInfo(dataTLE[i][j], null, observerLat, observerLng, 0);
        dataTheOtherOnesJSON[j].satellite = satellites[i];
        delete dataTheOtherOnesJSON[j].elevation;
        delete dataTheOtherOnesJSON[j].azimuth;
        delete dataTheOtherOnesJSON[j].range;
        delete dataTheOtherOnesJSON[j].velocity;
        
    }
}

// console.log(dataTheOtherOnesJSON);
// console.log(dataTheOtherOnesJSON.length);


export const dataset = dataCosmosJSON.concat(dataTheOtherOnesJSON.concat(dataNOARDJSON));