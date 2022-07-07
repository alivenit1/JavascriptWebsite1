var canvas=document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//listen to event on clear button
document.querySelector("#clear").addEventListener("click", clear);

function draw()
{  

//getting coordinates from the html form

var xCord = document.getElementById("x").value;
var yCord = document.getElementById("y").value;

//setting gradient
let grd = ctx.createLinearGradient(100, 100, 150, 100);
grd.addColorStop(0, "green");
grd.addColorStop(0.5, "blue");
grd.addColorStop(1, "red");

//getting shape selected value from html
var shapeSelected = document.getElementById("shapes").value;

//decision to draw based on selected shape
switch (shapeSelected) {

    case "circle":

        ctx.beginPath();
        var sliderVal = document.querySelector("#slider").value; 
        ctx.arc(xCord, yCord, sliderVal, 0, 2 * Math.PI); 
        ctx.strokeStyle = "black";
        ctx.stroke();
        //checking if the linear fill is selected
        if(document.querySelector("#linearFill").checked == true){
            ctx.fillStyle = grd;
            ctx.fill();
        }
        else  //no linear gradient option
        {
        ctx.fillStyle = document.querySelector("#palette").value; 
        ctx.fill();
        }

        break;
    case "square":
        var width = document.querySelector("#slider").value;
        var height = document.querySelector("#slider").value;
        ctx.strokeRect(xCord, yCord, width, height); 
        //checking if the linear fill is selected
        if(document.querySelector("#linearFill").checked == true){
            ctx.fillStyle = grd;
            ctx.fillRect(xCord, yCord, width, height);
        }
        else  //no linear gradient option
        {
        ctx.fillStyle = document.querySelector("#palette").value; 
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.fillRect(xCord, yCord, width, height);
        }
        break;

    case "rectangle":
            var width = document.querySelector("#slider").value;
            var height = document.querySelector("#slider").value;
            //height of the rectangle is not taken from user so select slider value as both width and height
            height = height/2;
            ctx.strokeRect(xCord, yCord, width, height); 
            //checking if the linear fill is selected
            if(document.querySelector("#linearFill").checked == true)
            {
                ctx.fillStyle = grd;
                ctx.fillRect(xCord, yCord, width, height);
            }
            else  
            {
            ctx.fillStyle = document.querySelector("#palette").value; 
            ctx.strokeStyle = "black";
            ctx.stroke();
            ctx.fillRect(xCord, yCord, width, height);
            }
            break;
    case "line":
        //console.log("In Line");
        var width = document.querySelector("#slider").value;
        var height = document.querySelector("#slider").value;
        ctx.moveTo(xCord, yCord);
        ctx.lineTo(width, height);
        ctx.stroke();
        break;
    

}


}


//Clear funtion to clear the contents of the canvas
function clear()
{
    ctx.clearRect(0,0,400,400); 
}

//function for selecting the language
function myLang(langSelected)
{
    var langBut = langSelected
    //logical error - the colour of the heading should change only for Spanish selection
    //since it is initialised in the function, regardless of which button, the colour is changing.
    
    
    if (langBut == "eButton")
    {
         //alert(langSelected); 11111111111
         var insText = "Abstract Art competition";
         document.getElementById("langHeading").innerText=insText;
         document.getElementById("langHeading").style="background-color:green";  
    }
    //if spanish button is selected  
    if (langBut == "sButton")
    {
        //alert(langSelected);
        var insText = "concurso de arte abstracto";
        document.getElementById("langHeading").innerText=insText;
        document.getElementById("langHeading").style="background-color:tomato";  
    }
}

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