import '../component/drink-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    //test
    
        console.log('test3');
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
         .then(response => {
             return response.json();
         })
         .then(responseJson => {
            if(responseJson.drinks) {
                console.log(responseJson.drinks);
                renderResult(responseJson.drinks);
            } else {
                console.log(responseJson.drinks);
            }
         })
         .catch(error => {
            console.log(responseJson.drinks);
            
         })
    
    //endtest
    
   

   const searchElement = document.querySelector("search-bar");
   const drinkListElement = document.querySelector("drink-list");
 
   const onButtonSearchClicked = async () => {
       try { 
        
           const result = await DataSource.searchDrink(searchElement.value);
           //console.log(result);
           renderResult(result);
           
       } catch (message) {

           fallbackResult(message)
       }
       
   };
   
   const renderResult = results => {
    drinkListElement.drinks = results;
    };
   
    const fallbackResult = message => {
    drinkListElement.renderError(message);
    };
    
searchElement.clickEvent = onButtonSearchClicked;
};
 
export default main;