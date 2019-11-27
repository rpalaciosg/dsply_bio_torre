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
      res.locals.photo = bios;
      res.locals.person = httpResponse.data.person;
      res.locals.numExperiences = Object.entries(httpResponse.data.experiences).length;
      res.locals.numJobs = Object.entries(httpResponse.data.jobs).length;
      res.locals.numProjects = Object.entries(httpResponse.data.projects).length;
      res.locals.numStrengths = Object.entries(httpResponse.data.strengths).length;
      res.locals.numInterest = Object.entries(httpResponse.data.interests).length;
      res.locals.numPublications = Object.entries(httpResponse.data.publications).length;
      res.locals.numEducation = Object.entries(httpResponse.data.education).length;
      res.locals.numLanguages = Object.entries(httpResponse.data.languages).length;
      console.log(res.locals.person);
      res.render('index.html');
  }).catch(err => {
       console.log('Error:', err);
       next(err);
  });
    
});


module.exports = router;
