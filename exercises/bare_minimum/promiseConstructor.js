/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  pluck = new Promise(
    function(resolve, reject) {
      fs.readFile(filePath, function(error, data) {
        if (error) {
          reject(error);
        } else {
          var result = data.toString();
          result = result.split('\n');
          resolve(result[0]); 
        } 
      }); 
    }
    );
  return pluck;
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  result = new Promise(
    function(resolve, reject) { 
      var status;
      request(url, function(error, response) {
        if (error) {
          reject(error);
        } else {
          resolve(response.statusCode);
        }
      });
    });
  return result;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
