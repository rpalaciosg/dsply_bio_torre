const express = require('express');
const axios = require('axios');
var router = express.Router();

const endpoint = "https://torre.bio/api/bios/richardapalaciosg";
/* GET home page. */
router.get('/', async function(req, res, next) {
  // call to API torre
  await axios.get(endpoint)
  .then( httpResponse => {
      // if (httpResponse.data)        
      const bios = httpResponse.data.person.picture;
      console.log(bios);
      res.locals.photo = bios;
      res.render('index.html');
  }).catch(err => {
       console.log('Error:', err);
       next(err);
  });
    
  // res.locals.photo = getBioUser(res.locals.idUserDef);
  // res.render("index");
  // } catch (err) {
  //   next(err);
  // }
});


// const getBioData = async (idUser) => {
//   try {
//       return await axios.get(res.locals.urlBio + idUser);
//   } catch (err) {
//       console.log(err);
//   }
// }

// const getBioUser = async (idUser) => {
//   const bioUser = await getBioData(idUser);
//   // console.log(bioUser.data);
//   // objBio = Json.parse(bioUser.data.person;
//   // objPerson = properties.data.person;
//   const photoP = bioUser.data.person.picture;
//   // nameP = objPerson.name;
//   // userIdP = objPerson.publicId;
//   // objExperiences = properties.data.experiences;
//   console.log(bioUser.data.person);
//   // console.log(photoP);
//   return photoP;
// }

module.exports = router;
