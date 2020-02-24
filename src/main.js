import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import { DoctorService } from './doctor-service'

$(document).ready(function() {
  $('#searchDoctorName').click(function() {
    $(".doctorName").show();
    $(".locationDoctor").show();
    $(".Issue").hide();
    $(".locationIssue").hide();
  })

  $('#searchIssue').click(function() {
    $(".doctorName").hide();
    $(".locationDoctor").hide();
    $(".Issue").show();
    $(".locationIssue").show();
  })

  $('#doctorIssue').submit(function(event) {
    event.preventDefault()
    console.log('hi')

    const city = $('#locationIssue').val()
    const issue = $('#issue').val()
    console.log(issue)
    asynAPICall(issue)

    async function asynAPICall(issue) {
        let doctorService = new DoctorService()
        const response = await doctorService.getDoctorByCity(city)
        let lan = response.results[0].geometry.lat
        let lng = response.results[0].geometry.lng
        const doctorResponse = await doctorService.getDoctors(issue, lan, lng)
        console.log('doctorResponse' + doctorResponse)
        let doctors = doctorService.doctors(doctorResponse)
        console.log(doctors)
        let doctorList = doctorService.doctorsProfile(doctorResponse)
        console.log(doctorList.data.specialties[0])

      }


  })

  $('#doctorName').submit(function(event) {
    event.preventDefault()
    console.log('hello')
    $("#doctorsInCity").hide();

    const city = $('#locationDoctor').val()
    const name  = $('#name').val()
    console.log(name)
    console.log(city)
    asynAPICall(name)

    async function asynAPICall(name) {
        let doctorService = new DoctorService()
        const response = await doctorService.getDoctorByCity(city)
        let lan = response.results[0].geometry.lat
        let lng = response.results[0].geometry.lng
        const doctorResponse = await doctorService.getDoctorInfo(name, lan, lng)
        console.log('doctorResponse is' + doctorResponse)

        let doctorDetail = doctorService.doctorInfo(doctorResponse)
        console.log('doctor detail is' + doctorDetail)

      }


  })

})
