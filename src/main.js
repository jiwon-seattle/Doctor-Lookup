import $ from 'jquery';
import 'bootstrap' ;
import 'bootstrap/dist/css/bootstrap.min.css' ;
import './styles.css' ;
// import { Doctor } from './doctor-service-service.js';

$(document).ready(function() {
  $('#findtheDoctor').click(function() {
    fetch('https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=632cb65d3c0037a4cd102982fbaee2a3')
      .then(function(response) {
        if (response.ok && response.status == 200) {
          return response.json();
        } else {
          return false;
        }
      })
      .catch(function(error) {
        return false;
      })
      .then(function(jsonifedResponse) {
        getElements(jsonifedResponse)
      });

    const getElements = function(response) {
      if (response) {
        $('#doctorNameResult').text(response)
      }
    }

  });
});
