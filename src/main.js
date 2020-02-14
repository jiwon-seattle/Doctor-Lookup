import $ from 'jquery';
import 'bootstrap' ;
import 'bootstrap/dist/css/bootstrap.min.css' ;
import './styles.css' ;
// import { Doctor } from './doctor-service-service.js';

$(document).ready(function() {
  $('#findtheDoctor').click(function() {

    let promise = new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2018-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=5&user_key=${process.env.API_KEY}`
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }

    request.open("GET", url, true);
    request.send();
  });
    promise.then(function(response){
      let body = JSON.parse(response);
      $('#doctorNameResult').text(data);
    }, function(error) {
      $('#doctorNameResult').text(`${error.message}`)
    });
  });
});
