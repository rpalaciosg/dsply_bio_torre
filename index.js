'use strict';

const axios = require('axios');
let idUserDef ='richardapalaciosg';
const objPerson, objExperiences, objJobs, objProjects, objStrengths, objInterest, objPublications, objEducation, objLanguajes = {};
const objConnections = {};

let photoP = '';
let nameP = '';
let userIdP = '';
let numConnections = '';

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

const getBioData = async (idUser) => {
    try {
        return await axios.get('https://torre.bio/api/bios/' + idUser);
    } catch (err) {
        console.log(err);
    }
}

const getConnections = async (idUser) => {
  try {
    return await axios.get('https://bio.torre.co/api/people/'+idUser+'/connections');
  } catch (err) {
    console.log(err);
  }
}

const getBioUser = async (idUser) => {
    const person = await getBioData(idUser);
    console.log(properties.data.person);
    objPerson = properties.data.person;
    photo = objPerson.picture;
    nameP = objPerson.name;
    userIdP = objPerson.publicId;
    objExperiences = properties.data.experiences;
    console.log(properties.data.person);
  }

const countConnections = async (idUser) => {
  const numConn = await getConnections(idUser);
  if (numConn.data.person) {
    numConnections = Object.entries(numConn.data).length;
  }
}

const countProperties = async () => {
    const properties = await getBioData('');
    console.log(properties.data)
    if (properties.data.person) {
        console.log(`Got ${Object.entries(properties.data.person).length} properties`);
    }
}
// https://bio.torre.co/api/people/ac/connections
// https://bio.torre.co/api/people/richardapalaciosg/connections


getBioUser(idUserDef);

// Render data with Javascript code!
const userPhotoElement = document.getElementById('userID');
userPhotoElement.setAttribute('src',userPhotoElement);
userPhotoElement.src = photo;

const connectionElement = document.getElementById('_connections');
connectionElement.textContent(numConnections);
