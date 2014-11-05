//MyWidget Script
/**************************
Add a link for a CSS file that styles .mywidget
Add a script tag that points to CDN version of jQuery 1.*
Add a script tag that loads your script file from http://m.edumedia.ca/
**************************/
document.addEventListener("DOMContentLoaded", function(){
	
	var w = $("#wrapper").width( );
	console.log(w);
	
  var css = document.createElement("link");
  css.setAttribute("rel", "stylesheet");
  css.setAttribute("href", "main.css");	
  //loads the CSS file and applies it to the page
  var scriptsLoaded = 0;

  var jq = document.createElement("script");
  jq.addEventListener("load", function(){
    scriptsLoaded++;
    if(scriptsLoaded === 2){
      //call the function in My widget script to load the JSON and build the widget
      buildWidget(".mywidget");
      console.log("both scripts loaded");
    }
  });
  document.querySelector("head").appendChild(jq);
  jq.setAttribute("src","http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js");

  var script = document.createElement("script");
  script.addEventListener("load", function(){
    scriptsLoaded++;
    if(scriptsLoaded === 2){
      //call the function in My widget script to load the JSON and build the widget
      buildWidget(".mywidget");
      console.log("both scripts loaded");
    }
  });
  document.querySelector("head").appendChild(script);
  script.setAttribute("src","js/widget.js");
});