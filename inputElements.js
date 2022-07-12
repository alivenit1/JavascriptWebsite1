/*Aliveni Thodupunuri
Version 1.1
Date: 11/07/2022
Script for Abstract Art Competition html page
This script allows for drawing on canvas and form for submitting entries for competition
*/
var canvas=document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//listen to event on clear button
document.querySelector("#clear").addEventListener("click", clear);

/*
This function controls the drawing on the canvas
based on the selection from the user
*/

function draw()
{  

//getting coordinates from the html form

var xCord = document.getElementById("x").value;
var yCord = document.getElementById("y").value;
var strokeCol = document.getElementById("strokeColour").value;
//setting gradient
let grd = ctx.createLinearGradient(100, 100, 150, 100);
grd.addColorStop(0, "green");
grd.addColorStop(0.5, "blue");
grd.addColorStop(1, "red");

//getting shape selected value from html
var shapeSelected = document.getElementById("shapes").value;

//decision to draw based on selected shape
switch (shapeSelected) 
{
    //if user selected circle, below code is executed
    case "circle":

        ctx.beginPath();
        var sliderVal = document.querySelector("#slider").value; 
        ctx.arc(xCord, yCord, sliderVal, 0, 2 * Math.PI); 
        ctx.strokeStyle = strokeCol;
        ctx.stroke();
        //checking if the linear fill is selected
        if(document.querySelector("#linearFill").checked == true)
        {
            ctx.strokeStyle = strokeCol;
            ctx.fillStyle = grd;
            ctx.fill();
        }
        else  //no linear gradient option
        {
            ctx.strokeStyle = strokeCol;
            ctx.fillStyle = document.querySelector("#palette").value; 
            ctx.fill();
        }

        break;
    //if user selected square, below code is executed    
    case "square":
        var width = document.querySelector("#slider").value;
        var height = document.querySelector("#slider").value;
        ctx.strokeRect(xCord, yCord, width, height); 
        //checking if the linear fill is selected
        if(document.querySelector("#linearFill").checked == true)
        {
            ctx.strokeStyle = strokeCol;
            ctx.fillStyle = grd;
            ctx.fillRect(xCord, yCord, width, height);
        }
        else  //no linear gradient option
        {
        ctx.fillStyle = document.querySelector("#palette").value; 
        ctx.strokeStyle = strokeCol;
        ctx.stroke();
        ctx.fillRect(xCord, yCord, width, height);
        }
        break;
    //if user selected rectangle, below code is executed 
    case "rectangle":
            var width = document.querySelector("#slider").value;
            var height = document.querySelector("#slider").value;
            //height of the rectangle is not taken from user so select slider value as both width and height
            //height has been marked as 1/2 the width
            height = height/2;
            ctx.strokeRect(xCord, yCord, width, height); 
            //checking if the linear fill is selected
            if(document.querySelector("#linearFill").checked == true)
            {
                ctx.strokeStyle = strokeCol;
                ctx.fillStyle = grd;
                ctx.fillRect(xCord, yCord, width, height);
            }
            else  
            {
            ctx.fillStyle = document.querySelector("#palette").value; 
            ctx.strokeStyle = strokeCol;
            ctx.stroke();
            ctx.fillRect(xCord, yCord, width, height);
            }
            break;
    //if user selected line, below code is executed
    case "line":
        console.log("In Line");
        var lineToX = document.getElementById("x2").value;
        var lineToY = document.getElementById("y2").value;
        ctx.strokeStyle = strokeCol;
        ctx.moveTo(xCord, yCord);
        ctx.lineTo(lineToX, lineToY);
        ctx.stroke();
        break;
    

}


}

/*
Clear funtion to clear the contents of the canvas
*/

function clear()
{
    ctx.clearRect(0,0,400,400); 
}

/*
Clear funtion to change the language on heading and instruction
By default, english language is used but if Spanish is selected, contents in header change from english to spanish and also back ground colour
Again user and choose to select english

This function takes input from html button id to perform the language change
*/
function myLang(langSelected)
{
    var langBut = langSelected 
    if (langBut == "eButton")
    {
       
         var insText = "Abstract Art Competition";
         var insText1 = "Select the colour, size using the slider, start coordinates (X & Y), Shape and select optional gradient option then click Draw button to draw on canvas. \nOnce complete, fill your details and submit.  Good Luck!\nOnce drawing is complete, please right click on image and save to folder and upload by filling in registration form"
         document.getElementById("langHeading").innerText=insText;
         document.getElementById("insLang").innerText=insText1;
         document.getElementById("header").style="background-color:green";
    }
    //if spanish button is selected  
    if (langBut == "sButton")
    {
        var insText = "Concurso de Arte Abstracto";
        var insText1 = "Seleccione el color, el tamaño con el control deslizante, las coordenadas de inicio (X e Y), la forma y seleccione la opción de degradado opcional, luego haga clic en el botón Dibujar para dibujar en el lienzo.\nUna vez completado, complete sus datos y envíelo. ¡Buena suerte!\nUna vez que se complete el dibujo, haga clic derecho en la imagen y guárdela en la carpeta y cárguela completando el formulario de registro"
        document.getElementById("insLang").innerText=insText1;
        document.getElementById("langHeading").innerText=insText;
        document.getElementById("header").style="background-color:tomato";  
    }
}

/*
This function validates the form
It checks if all fields are keyed in or not
It also check if password and password confirmation are same
If validation fails, function will stop executing and returns false condition for form
*/

function checkForm()
{
    //getting all form elements
    var x = document.getElementById("artSub");
    //looping through the elements 
    for (i = 0; i< x.length-2; i++)
    {
        console.log (i);
        if(x.elements[i].value == "") //if the value is not entered
        {
            alert(x.elements[i].id + " cannot be empty, key in and try again");
            return false;

        }
    }
    //getting password and confirm password values
    var uPwd = document.getElementById("uPwd").value;
    var uCPwd = document.getElementById("uCPwd").value;
    console.log (uCPwd);
    console.log (uCPwd);
    //check if password and confirm passwoard length is atleast 8 characters long
    if (uPwd.length<8 || uCPwd.length<8)
    {
        alert("Password and/or Confirm Password length is less than 8 characters, try again!");
        return false;
    }
    else //if password & confirm password length is atleast 8, then check if they are same
    {
        if (uPwd != uCPwd)
        {
            alert("Password & Confirm Password dont match, check your password/s try again");
            return false;
        }
        else 
        {
            alert ("Validation passed, form not submitted"); //since there is no server page, confirmation that validation is passed
            return false; //return false to not submit, even though all fields valid
        }
    }   
    
}