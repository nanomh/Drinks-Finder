//import clubs from './clubs.js';
class DataSource {
    static searchDrink(keyword) {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            //console.log(responseJson);
            if(responseJson.drinks) {
                console.log('Diterima');
                return Promise.resolve(responseJson.drinks);
            } else {
                console.log('Ditolak');
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
 }
  
 export default DataSource;
