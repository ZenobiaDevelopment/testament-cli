import fetch from 'node-fetch';

export function GenerateASCII(String) {
    let ENDPOINT = 'https://artii.herokuapp.com/make?text=' + String
    fetch(ENDPOINT, {
        method: 'GET',
    }).then(res => res.text())
    .then(text => {
        console.log(text)
    })
}


export default {GenerateASCII};