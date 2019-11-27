/**
 * Test call to API
 */
// 'use strict';

// const axios = require('axios');

// const urlBio = 'https://torre.bio/api/bios/';
// const urlPeople = 'https://bio.torre.co/api/people/';
// const idUserDef ='richardapalaciosg';

// const objBio = {}; 
// const objPerson = {}; 
// const objExperiences = {}; 
// const objJobs = {}; 
// const objProjects = {}; 
// const objStrengths = {}; 
// const objInterest = {}; 
// const objPublications = {}; 
// const objEducation = {}; 
// const objLanguajes = {};
// const objConnections = {};

// let photoP = '';
// let nameP = '';
// let userIdP = '';
// let numConnections = '';


// const fetchBio = () => { 
//   axios.get(urlBio+idUserDef).then( httpResponse => {
//       // if (httpResponse.data)
//       const bios = httpResponse.data.person;
//       console.log(httpResponse.data.person.flags);
//       // console.log(bios);
//   }).catch(err => {
//       console.log('Error:', err);
//   });
// }


// function getBioOfAUser(idUser) {    
//     axios.get(urlBio + idUser)
//     .then(response => {
//         // console.log(response);
//         console.log(response.data);
//     })
//     .catch( err => {
//         console.log('Error:', err);
//     });
// }

// /**
//  * GET /api/bios/:idUser
//  * @param {*} idUser 
//  */
// const getBioData = async (idUser) => {
//     try {
//         return await axios.get(urlBio + idUser);
//     } catch (err) {
//         console.log(err);
//     }
// }

// /**
//  * *  * @param {*} idUser 
//  * @return objects
//  */
// const getBioUser = async (idUser) => {
//     const bioUser = await getBioData(idUser);
//     console.log(bioUser.data);
//     objBio = Json.parse(bioUser.data.person;
//     objPerson = properties.data.person;
//     photoP = bioUser.data.person.picture;
//     nameP = objPerson.name;
//     userIdP = objPerson.publicId;
//     objExperiences = properties.data.experiences;
//     console.log(bioUser.data.person);
//     console.log(photoP);
//   }

//   const getConnections = async (idUser) => {
//     try {
//       return await axios.get(urlPeople+idUser+'/connections');
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   const countConnections = async (idUser) => {
//   const numConn = await getConnections(idUser);
//   if (numConn.data.person) {
//     numConnections = Object.entries(numConn.data).length;
//   }
// }

// const countProperties = async () => {
//     const properties = await getBioData('');
//     console.log(properties.data)
//     if (properties.data.person) {
//         console.log(`Got ${Object.entries(properties.data.person).length} properties`);
//     }
// }
// https://bio.torre.co/api/people/ac/connections
// https://bio.torre.co/api/people/richardapalaciosg/connections


// getBioUser(idUserDef);
// getBioOfAUser(idUserDef);


// /**
//  * Render data with Javascript code!
//  *  */ 
// const photoElement = document.getElementById('_usrPhoto');
// userPhotoElement.setAttribute('src',userPhotoElement);
// userPhotoElement.src = photo;

// const connectionElement = document.getElementById('_connections');
// connectionElement.textContent(numConnections);
