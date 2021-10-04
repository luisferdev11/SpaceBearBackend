import { request } from 'undici'


async function GetData(url){
    
    const {
    body
    } = await request(url);

    const debris = await body.text();
    const lines = debris.split(/\r\n|\r|\n/).length;

    const myArr = debris.split('\n');


    // A falta de una regex que funcionara ...:
    let debrisTLE = [];
    for (let i = 0; i < lines; i+=3) {
        debrisTLE[i] = `${myArr[i]}\n${myArr[i+1]}\n${myArr[i+2]}`;
    }

    const debrisTLE_Filtered = debrisTLE.filter(el => {
        return el != null;
    });

    return debrisTLE_Filtered;
};


const cosmos = 'https://celestrak.com/NORAD/elements/cosmos-2251-debris.txt';
const iridium = 'https://celestrak.com/NORAD/elements/iridium-33-debris.txt';
const fenyun = 'https://celestrak.com/NORAD/elements/1999-025.txt';
const microsat = 'https://celestrak.com/NORAD/elements/2019-006.txt';
const NOARD = 'https://celestrak.com/NORAD/elements/active.txt';

export const dataCosmosTLE = await GetData(cosmos);
export const dataIridiumTLE = await GetData(iridium);
export const dataFenyunTLE = await GetData(fenyun);
export const dataMicrosatTLE = await GetData(microsat);
export const dataNOARDTLE = await GetData(NOARD);
