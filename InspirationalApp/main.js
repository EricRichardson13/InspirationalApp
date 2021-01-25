var quotes = ['We must all either wear out or rust out, every one of us. My choice is to wear out.', 'It&apos;s not what happens to you, but how you react to it that matters.','The best revenge is not to be like that.','There is good in everything, if only we look for it.','If you see fraud and do not say fraud, you are a fraud.','Every man I meet is my master in some point, and in that I learn of him.','This is not your responsibility but it is your problem.','Waste no more time arguing what a good man should be. Be one.','Someone has to be the greatest. Someone has to change the world. Someone has to change the world. Why not you?','The greatest in the world have failed more than you have ever tried. What are you waiting for? GO GET YOURS'];
var xmlhttp;
var pickedQuote;
var first = true;
var hidden = false;
function setQuote()
{
pickedQuote = quotes[Math.floor(Math.random()*quotes.length)]; 
document.getElementById("quote").innerHTML = pickedQuote;
}
function openUp() {
    var element = document.getElementById("bruh");
    element.classList.toggle("fullscreen");
    if(document.getElementById("mb").innerHTML == "About")
    {
        document.getElementById("mb").innerHTML = "X";
    } else
    {
        document.getElementById("mb").innerHTML = "About";
    }
 }