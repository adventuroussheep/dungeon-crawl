var axios = require("axios");





export const namesList = [];
var nameArray = [];

// module.exports = {
export function getNames(){

    // fetchClasses() {
        var classesURL = "https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/classes";
        
        
        //         fetch(classesURL)
        //             .then(response => response.json())
        //             .then(json => nameArray.push(json));
        //             console.log(nameArray);
        //             return nameArray;
        // }
        
        
        
        
        
        return axios.get(classesURL)
        .then(function(response) {
            // for(var i=0; i< response.data.results.length; i++){
            //     nameArray.push(response.data.results[i].name);
            // }
            for(var i=0; i< response.data.results.length; i++){
                namesList.push(response.data.results[i].name);
            }
            return nameArray;
        });

        
    }