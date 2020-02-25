# Doctor Lookup

#### An application where users may enter a medical issue into a form, submit it, and receive a list of doctors in the city who can treat their medical issue. Users also can search the doctors by their last name. 2/14/20

#### By **Jiwon Han**

## Description

A website created with object oriented JavaScript and HTML returns a medical data via 'the BetterDoctor API'. This is a live API by a Series A funded startup currently under active development, and used by industry heavy-hitter such as HealthNet to provide accurate medical data.

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **A user should be able to enter a medical issue to receive a list of doctors in the city** | Input: "Seattle" | Output: "Name: Lam Ngo, Title: MD, Specialties: Family Medicine" |
| **A user should be able to enter a medical issue to receive a list of doctors in the city** | Input: "LA" Dentist"  | Output: "Name: Joel Trion Harris, Title: DDS, Specialties: Dentistry" |
| **A user should be able to enter a last name to receive a list of doctors in the city** | Input: "New York" "Pitt"  | Output: "Name: MD Gabriel E Pitta, Specialty: Anesthesiology, Bio, Address" |

## Authorization
This application requires APIs generated from OpenCage Geocoder and BetterDoctor API.
Visit the sites to receive free APIs, and declare your APIs in the doctor-service.js file.
Please refer to the getDoctorByCity, getDoctors, getDoctorInfo async functions. 

## Setup/Installation Requirements
1. Download and install Node.js from the official website.
2. Clone this repository, https://github.com/jiwon-seattle/Doctor-Lookup.git.
3. Use a command line/Bash to navigate to this project.
4. Run npm install to get all dependencies.
5. Run npm start to initiate the program.

## Known Bugs
* No known bugs at this time.

## Technologies Used
* JavaScript
* jQuery
* Node.js
* HTML
* CSS
* NPM

## Support and contact details

_Email jiwon1.han@gmail.com with any questions, comments, or concerns._

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Jiwon Han_**
