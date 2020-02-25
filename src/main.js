import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import { DoctorService } from './doctor-service'

$(document).ready(function() {
  $('#searchDoctorName').click(function() {
    // $(".locationDoctor").show()
    // $(".doctorName").show()
    // $(".locationIssue").hide()
    // $(".Issue").hide()
    $("#doctorIssue").toggle()
    $("#doctorName").toggle()
  })

  $('#searchIssue').click(function() {
    // $(".locationDoctor").hide()
    // $(".doctorName").hide()
    // $(".locationIssue").show()
    // $(".Issue").show()
    $("#doctorIssue").toggle();
    $("#doctorName").toggle();
  })

  $('#doctorIssue').submit(function(event) {
    event.preventDefault()
    $("#doctorInformation").hide()
    $("#doctorsInCity").show()

    const city = $('#locationIssue').val()
    const issue = $('#issue').val()

    asynAPICall(issue)

    async function asynAPICall(issue) {
        let doctorService = new DoctorService()
        const response = await doctorService.getDoctorByCity(city)
        let lan = response.results[0].geometry.lat
        let lng = response.results[0].geometry.lng
        const doctorResponse = await doctorService.getDoctors(issue, lan, lng)
        let doctors = doctorService.doctors(doctorResponse)
        let doctorList = doctorService.doctorsProfile(doctorResponse)
        doctors
        doctorList

      }


  })

  $('#doctorName').submit(function(event) {
    event.preventDefault()
    $("#doctorsInCity").hide()
    $("#doctorInformation").show()

    const city = $('#locationDoctor').val()
    const name  = $('#name').val()
    asynAPICall(name)

    async function asynAPICall(name) {
        let doctorService = new DoctorService()
        const response = await doctorService.getDoctorByCity(city)
        let lan = response.results[0].geometry.lat
        let lng = response.results[0].geometry.lng
        const doctorResponse = await doctorService.getDoctorInfo(name, lan, lng)
        let doctorDetail = doctorService.doctorInfo(doctorResponse)
        doctorDetail

      }


  })

})
