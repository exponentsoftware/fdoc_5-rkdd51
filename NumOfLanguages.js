import axios from "axios";



var recdata;

const getData = async () => {
    const url = "https://restcountries.eu/rest/v2/all"
    const arr = [];
    const arr2 = [];
    const res = await axios.get(url)
  recdata = res.data
  
  let languageLength;
  
  //All countries and their languages
    recdata.map((item, index) => {
      const countryName = item.name;
      const bhasha = item.languages.map((language, index) =>language.name);
      const numOfBhasha = bhasha.length;

       const output= countryName + " has " + numOfBhasha + " languages, i.e. " + bhasha
        console.log(output);
    });

   //Top 15 countries with largest area

    const getAllCountriesArea = () => {
      const sorted = recdata.sort((a, b) => b.area - a.area).slice(0, 15);
      sorted.map((item, index) => {
        const name = item.name;
        const area = item.area
        console.log(name + ", area : " + area + " sq.km");
      })
    };
    getAllCountriesArea();


 
  // to find specific language spoken in different countries
   const getLanguage = (way) => {
      recdata.map((item, index) => {
        const bhasha = item.languages.map((language) => language.name);
        languageLength = bhasha.filter((word) => word == way).length;
        arr.push(languageLength);
      });
      const SumOfALanguage = arr.reduce((a, b) => a + b);

      console.log("language: " + way + ", spoken in " + SumOfALanguage + " countries");
    };
    getLanguage("Spanish");
  
  
  // to find all languages in an array
  const getAllLaunguage = () => {
    recdata.map((item, index) => {
      const bhasha = item.languages.map((language) => language.name);
      arr2.push(bhasha);
    });

    arr2.map((item, index) => {
      const newArray = [...item];
      console.log(newArray);
      return newArray;
    });
  };
        
       getAllLaunguage()
  
  


}

getData();













// const bhasha = item.languages.reduce((acc, curr) => {
//   if (acc[curr.name]) acc[curr.name] == ++acc[curr.name];
//   else acc[curr.name] = 1;
//   return acc;
// }, {});




