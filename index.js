'use strict';

const axios = require('axios');

// axios.get('https://torre.bio/api/bios/richardapalaciosg').then(httpResponse => {
//     // if (httpResponse.data)
//     console.log(httpResponse.data.person.flags);
// }).catch(err => {
//     console.log('Error:', err);
// });

// function getBioOfAUser(idUser) {
//     idUser ='richardapalaciosg';
//     axios.get('https://torre.bio/api/bios/' + idUser).then(response => {
//         console.log(response);
//     }).catch( err => {
//         console.log('Error:', err);
//     });
// }

const getBioUser = async (idUser) => {
    try {
        idUser ='richardapalaciosg';
        return await axios.get('https://torre.bio/api/bios/' + idUser);
    } catch (err) {
        console.log(err);
    }
}

const getPerson = async ( idUser => {
    const person = await getBioUser(idUser);
    console.log(properties.data.person);
});

const countProperties = async () => {
    const properties = await getBioUser('');
    console.log(properties.data)
    if (properties.data.person) {
        console.log(`Got ${Object.entries(properties.data.person).length} properties`);
    }
}
https://bio.torre.co/api/people/ac/connections

// getBioOfAUser('');
// countProperties();
