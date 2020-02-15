import $ from 'jquery';
import 'bootstrap' ;
import 'bootstrap/dist/css/bootstrap.min.css' ;
import './styles.css' ;
import { WeatherService } from './doctor-service';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    (async () => {
      let weatherService = new WeatherService();
      const response = await weatherService.getWeatherByCity(city);
      let doctors = weatherService.doctors(response);
      console.log(doctors[0])
      //getElements(response);
      $('.showHumidity').text(doctors[0].bio)
    }) ();

    function getElements (response) {
      // for (var i = 0; i <)
      $('.showHumidity').text(response);
      $('.showTemp').text(`${response.data}`);
      console.log('response is' + response.data)

      }

  });
});
