// generic AJAX function to load fromFile into object with ID whereTo
function loadFileInto(fromIdentifier, fromList) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();
	
	// define the fromFile value based on the PHP URL
	fromFile = "recipes.php?id=" + fromIdentifier + "&list=" + fromList;
	console.log("fromFile: " + fromFile);

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// prepares code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
		
			if ((this.readyState == 4) && (this.status == 200)) {
				
				console.log("AJAX JSON response: " + this.responseText);
				
				// convert received JSON from PHP into a JavaScript array
				responseArray = JSON.parse(this.responseText);
				responseHTML = "";
				
				if (this.responseText != "0") {
					for (x = 0; x < responseArray.length; x++) {
						responseHTML += "<li>" + responseArray[x] + "</li>";
					}
				}
				
				// figure out querySelector target
				whereTo = "#" + fromList + " ul";
				if (fromList == "directions") whereTo = "#" + fromList + " ol";
				document.querySelector(whereTo).innerHTML = responseHTML;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
				
			}
		
	} // end ajax.onreadystatechange

	// now that everything is set, initiate request
	ajax.send();

}







/* object constructor */

function Recipe(recipeName, imageURL, contributorName, recipeIdentifier) {
  this.name = recipeName;
  this.imgsrc = imageURL; 
  this.contributor = contributorName;
  this.identifier = recipeIdentifier;

 /* something does not work here.... fix both this one and TP7, and check PHP after this fix.. ended lecture at 1:07:46 for TP8 */  
  this.displayRecipe = function() {
    document.querySelector("#h1").innerHTML = this.name;
    
     document.querySelector("h3").innerHTML = "contributed by: " + this.contributor;
   document.querySelector("img").src = this.imgsrc;
    
    
     loadFileInto(this.identifier, "ingredients");
      loadFileInto(this.identifier, "equipment");
      loadFileInto(this.identifier, "directions");
    
  }
  
  
  
  
  
 
  
  
  
}

 RaspberryStreuselTart = new Recipe("Raspberry Streusel Tart", 
                                   "https://source.unsplash.com/2nAR96Mil_c",
                                   "Jack",
                                   "RaspberryStreuselTart"
                               
                                    
                                   );



 /* change font color using click function on h1 to green */


 function myFunction() {
   document.getElementById("h1").style.color = "green";
 }




/* Last prompt then done */


 h = document.getElementById("headache");
h.innerHTML = "I am not going to procastinate anymore.";



