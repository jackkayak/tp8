// generic AJAX function to load fromFile into object with ID whereTo
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// prepares code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
		
			if ((this.readyState == 4) && (this.status == 200)) {
				document.getElementById(whereTo).innerHTML = this.responseText;
				
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
  this.indentifier = ingredientFilename;
  this.dirFile = directionsFilename;
  this.equipFile = equipmentFilename;
 /* something does not work here.... fix both this one and TP7, and check PHP after this fix.. ended lecture at 1:07:46 for TP8 */  
  this.displayRecipe = function() {
    document.querySelector("h1").innerHTML = this.name;
    
     document.querySelector("h3").innerHTML = "contributed by: " + this.contributor;
   document.querySelector("#h1").style.backgroundImage = "url(" + this.imgsrc + ")";
    
    
     loadFileInto(this.ingFile, "ingredients");
      loadFileInto(this.equipFile, "equipment");
      loadFileInto(this.dirFile, "directions");
    
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


 /* dissapearing lists */
a = document.querySelector("div#column1");
a.onclick = function () {
  a.classList.toggle("iClicked");
};

/* this way works, overcomplexed it the first time */

b = document.querySelector("div#column2");
b.onclick = function () {
  b.classList.toggle("eClicked");
};

c = document.querySelector("div#column3");
c.onclick = function () {
  c.classList.toggle("dClicked");
};

/* Last prompt then done */


 h = document.getElementById("headache");
h.innerHTML = "I am not going to procastinate anymore.";



