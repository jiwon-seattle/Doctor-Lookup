import $ from 'jquery';
import 'bootstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import './styles.css' ;
import { Dinoipsum } from './weather-service.js';

$(document).ready(function() {
  let dinoipsum = new Dinoipsum();
  $('#getDinoText').click(function() {
    // console.log("hello");

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