export class Dinoipsum {


  getDinoLength(response){
    this.response = response
    this.response[0];
    let DinoName = this.response[0];
    let StringDinoName = DinoName.toString();
    let arrayDinoLetters = StringDinoName.split("");
    return arrayDinoLetters.length;
  }
  createblankArray(){

  }

  getDinoLetterArray(response){
    this.response = response
    this.response[0];
    let DinoName = this.response[0];
    let StringDinoName = DinoName.toString();
    let arrayDinoLetters = StringDinoName.split("");
    return arrayDinoLetters;
  }
  
  async getDinoName() {
    try {
      const response = await fetch(`http://dinoipsum.herokuapp.com/api/?format=json&words=1&paragraphs=1`);
      let jsonifiedResponse = await response.json();
      // console.log(response);
      // console.log(jsonifiedResponse);
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
