import userSelect from "../Homepage/Home";

var axios = require("axios");







export const namesList = [];
var nameArray = [];

// module.exports = {
// export function getNames(){

//     // fetchClasses() {
//         var classesURL = "https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/classes";
        
        
//         //         fetch(classesURL)
//         //             .then(response => response.json())
//         //             .then(json => nameArray.push(json));
//         //             console.log(nameArray);
//         //             return nameArray;
//         // }
        
        
        
        
        
//         return axios.get(classesURL)
//         .then(function(response) {
//             // for(var i=0; i< response.data.results.length; i++){
//             //     nameArray.push(response.data.results[i].name);
//             // }
//             for(var i=0; i< response.data.results.length; i++){
//                 namesList.push(response.data.results[i].name);
//             }
//             return nameArray;
//         });

        
//     }


    export async function getNames(){

            var response = await fetch("https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/classes"); 
            
            let data = await response.json();

            for(var i=0; i< data.results.length; i++){
                namesList.push(data.results[i].name);
            }

            return nameArray;
    
            
        }

        export async function getClassStats(){

            console.log(userSelect);
            // var response = await fetch("https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/classes"); 
            
            // let data = await response.json();

            // for(var i=0; i< data.results.length; i++){
            //     namesList.push(data.results[i].name);
            // }

            // return nameArray;
    
            
        }