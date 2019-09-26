//put in here from instructions
require("dotenv").config();
var keys = require('./keys.js'); 
var Spotify = require ("node-spotify-api");
var spotify = new Spotify(keys.spotify);


var axios = require("axios");

var moment = require ("moment");

//Fs does not need to be installed 
var fs = require ("fs");  

var spotifythis = function(song) {
    spotify
  .search({ type: 'track', query: song || 'I saw the Sign', limit:1 })
  .then(function(response) {
    console.log(response.tracks.items[0]);
  })
  .catch(function(err) {
    console.log(err);
  });
  //this is used instead of if, else
    console.log('Spotifying', song || 'I saw the Sign');
}
//LIRI Should be able to take these commands
//command and refrence and obj lookup
var commandmaster ={
"spotify-this-song": spotifythis,
"concert-this": concertthis,
//this will use axios 
}

//process.argv is refrencing (system related) array of arguments
var command = process.argv[2];
var args = process.argv.slice (3).join(" ")
console.log(command, args);

var funcToExecute = commandmaster[command]
if(typeof funcToExecute === 'function'){
    funcToExecute(args);
}
else {
    //We should alert the user we do not handle that command
}

//set variables

//set functions