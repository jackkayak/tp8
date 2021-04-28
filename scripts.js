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

CheesyBuffaloChickenDip = new Recipe("Cheesy Buffalo Chicken Dip",
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2143192.jpg&w=596&h=596&c=sc&poi=face&q=85",
  "Edison Soliman",
  "CheesyBuffaloChickenDip"
);


SpaghettiAglioeOlio = new Recipe("Spaghetti Aglio e Olio",
  "https://media4.s-nbcnews.com/i/newscms/2017_41/1288319/20170828_20170822_11424_pastalikeapro_scottconant_styleddishes_0030_6aa19146b263f4803e6a06c1798de5a0.jpg",
  "Bruno",
  "SpaghettiAglioeOlio"
);



/* change font color using click function on h1 to green */


function myFunction() {
  document.getElementById("h1").style.color = "green";
}


a = document.querySelector("div#ingredients");
a.onclick = function() {
  a.classList.toggle("iClicked");
};

/* this way works, overcomplexed it the first time */

b = document.querySelector("div#equipment");
b.onclick = function() {
  b.classList.toggle("eClicked");
};

c = document.querySelector("div#directions");
c.onclick = function() {
  c.classList.toggle("dClicked");
};

/* Last prompt then done */


h = document.getElementById("headache");
h.innerHTML = "I am not going to procastinate anymore.";