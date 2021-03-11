const pageName = process.argv.slice(2)[0];
const request = require('request');
const fs = require('fs');

request(pageName, (error, response, body) => {
  
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  let path = "./results/file.txt";

  if (response === undefined) {
    console.log("Error: Could not find website");
  } else {
    // console.log("Found website...");
    let readResult = fs.readFile(path, "utf8", function(err, data){
      if (err) {
        console.log(err);
      } else {
        fs.writeFile(path, body, "utf8", (err2) => {
          if (err2) return console.log(err2);
          console.log(`Downloaded and saved ${fs.statSync(path).size} bytes to ${path}`);
        });
      }
      // Display the file content 
      // console.log("data"); })); 
    });
  }

 
});
// console.log("Saving...")
