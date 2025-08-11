//Mini-project: QR Code Generator
// This project will take a URL input from the user, generate a QR code for that URL, and save the URL to a text file.

//Tasks:
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

//imports
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

//Prompting user for URL input
inquirer
    .prompt([
        {
            type: "input",
            name: "URL",
            message: "Enter the url you want to convert to a QR code: ",
            validate: function (value) {
                var pass = value.match(
                    /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i
                );
                if (pass) {
                    return true;
                }
                return "Please enter a valid URL";
            }
        }
    ])
    .then((answers) => {
        const url = answers.URL;
        console.log("You entered: " + answers.URL + "\nGenerating QR code...");

        //Generating QR code and saving to file
        const qr_svg = qr.image(url, {type: 'png'});
        qr_svg.pipe(fs.createWriteStream("qr_img.png"));
        console.log("QR code generated and saved as qr_img.png!");

        //Saving URL to a text file
        fs.writeFile("URL.txt", answers.URL, (err) => {
            if (err) {
                console.error("Error writing to file: ", err);
            } else {
                console.log("The URL has been saved to URL.txt!");
            }
        });
    })
    .catch((error) => {
        console.error("An error occurred: ", error);
    });
