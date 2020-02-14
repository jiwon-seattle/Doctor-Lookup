import $ from 'jquery';
import 'bootstrap' ;
import 'bootstrap/dist/css/bootstrap.min.css' ;
import './styles.css' ;
import { Doctor } from './doctor-service-service.js';

$(document).ready(function() {
  $('#findtheDoctor').click(function() {
    let doctor = new doctor
    let response = new XMLHttpRequest();
    const url = `https://api.betterdoctor.com/2018-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=' + ${process.env.API_KEY}`
    (async () => {
      const response = await dinoipsum.getDinoName();
      getElements(response);
    })();
    function getElements(response) {
      let letters = dinoipsum.getDinoLetterArray(response)
      let length = dinoipsum.getDinoLength(response);
      $('#showDino').text(`${response}`);
      $('#dinoLength').text(`${length}`);
      $('#dinoLetters').text(`${letters}`);
    }
});
});
