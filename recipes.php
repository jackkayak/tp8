<?

// PHP response code for tp8

$recipes = array();

$recipes["RaspberryStreuselTart"] = array();
$recipes["RaspberryStreuselTart"]["ingredients"] = array();
$recipes["RaspberryStreuselTart"]["equipment"] = array();
$recipes["RaspberryStreuselTart"]["directions"] = array();

$recipes["RaspberryStreuselTart"]["ingredients"][0] = "6 tablespoons unsalted butter";
$recipes["RaspberryStreuselTart"]["ingredients"][1] = "1 ¼ cups all-purpose flour";
$recipes["RaspberryStreuselTart"]["ingredients"][2] = "6 tablespoons white sugar";
$recipes["RaspberryStreuselTart"]["ingredients"][3] = "¼ teaspoon ground cinnamon";
$recipes["RaspberryStreuselTart"]["ingredients"][4] = "1/8 teaspoon salt";
$recipes["RaspberryStreuselTart"]["ingredients"][5] = "Custard :";
$recipes["RaspberryStreuselTart"]["ingredients"][6] = "1 ¾ cups light cream";
$recipes["RaspberryStreuselTart"]["ingredients"][7] = "⅓ cup white sugar";
$recipes["RaspberryStreuselTart"]["ingredients"][8] = "4 teaspoons cornstarch";
$recipes["RaspberryStreuselTart"]["ingredients"][9] = "4 egg yolks";
$recipes["RaspberryStreuselTart"]["ingredients"][10] = "1 tablespoon unsalted butter";
$recipes["RaspberryStreuselTart"]["ingredients"][11] = "1 teaspoon vanilla extract";
$recipes["RaspberryStreuselTart"]["ingredients"][12] = "1 tablespoon kirschwasser";
$recipes["RaspberryStreuselTart"]["ingredients"][13] = "1 (11 inch) shortbread tart crust, baked";
$recipes["RaspberryStreuselTart"]["ingredients"][14] = "⅔ cup apricot preserves";
$recipes["RaspberryStreuselTart"]["ingredients"][15] = "2 tablespoons water";
$recipes["RaspberryStreuselTart"]["ingredients"][16] = "2 ½ pints fresh raspberries";
$recipes["RaspberryStreuselTart"]["ingredients"][17] = "2 ½ tablespoons sifted confectioners' sugar";

$recipes["RaspberryStreuselTart"]["equipment"][0] = "Oven";
$recipes["RaspberryStreuselTart"]["equipment"][1] = "Sauce Pan";
$recipes["RaspberryStreuselTart"]["equipment"][2] = "Measuring cups";
$recipes["RaspberryStreuselTart"]["equipment"][3] = "Baking Sheet";
$recipes["RaspberryStreuselTart"]["equipment"][4] = "Fine-Mesh Strainer";

$recipes["RaspberryStreuselTart"]["directions"][0] = "Preheat oven to 350 degrees F (175 degrees C).";
$recipes["RaspberryStreuselTart"]["directions"][1] = "Place 6 tablespoons butter in a saucepan. Melt over medium-low heat. Cool until barely warm.";
$recipes["RaspberryStreuselTart"]["directions"][2] = "Combine flour, 6 tablespoons sugar, cinnamon, and salt and add to melted butter. Toss with a fork until crumbs are formed.";
$recipes["RaspberryStreuselTart"]["directions"][3] = "Take a clump of the crumb mixture in your hand and squeeze gently forming a larger clump. Break larger clump apart.";
$recipes["RaspberryStreuselTart"]["directions"][4] = "Sprinkle crumbs onto a large shallow pan. Repeat until all the mixture has been made into crumbs. Place crumbs in oven and bake for 15 to 18 minutes until they turn light brown. Set streusel mixture aside to cool and harden.Pour condensed milk over
        nuts.";
$recipes["RaspberryStreuselTart"]["directions"][0] = "Heat cream in a 2-quart saucepan until just under a boil. In a small bowl, combine 1/3 cup sugar and cornstarch. Beat egg yolks in a mixing bowl with a whisk until slightly thickened. Whisk in sugar-cornstarch mixture. Gradually pour in hot cream,
        whisking constantly. Return mixture to saucepan. Heat slowly, stirring constantly with a wooden spoon, until mixture begins to thicken and comes to a boil.";
$recipes["RaspberryStreuselTart"]["directions"][1] = "After custard reaches a boil, simmer about 1 minute. Remove from heat. Stir in 1 tablespoon butter, vanilla, and Kirschwasser or framboise. Cover custard with a piece of buttered plastic wrap. Cool about 10 minutes";
$recipes["RaspberryStreuselTart"]["directions"][2] = "Spread custard into a prebaked tart shell and bake for until bubbly, 20 to 25 minutes. Remove from oven and cool on a rack for 10 minutes to set.";
$recipes["RaspberryStreuselTart"]["directions"][3] = "Combine preserves and water in a small saucepan. Heat until mixture comes to a boil. Pass the glaze through a fine-mesh strainer. Discard pulp.";
$recipes["RaspberryStreuselTart"]["directions"][4] = "Gently brush top of custard with half of the hot preserves. Sprinkle berries generously over hot custard. Lightly brush tops of berries with remaining preserves. Sprinkle tart generously with streusel, pressing the crumbs gently into the berries
        so they will stick. Chill tart, uncovered, for about 2 hours. Just before serving, sift confectioners' sugar on top.";

// recieve and process $_GET Data 


// get the requested ID

$requestedID = $_GET["id"];
$requestedID = htmlspecialchars($requestedID);
$requestedID = filter_var($requestedID, FILTER_SANITIZE_STRING);

// get the requested list 

$requestedList = $_GET["list"];
$requestedList = htmlspecialchars($requestedList);
$requestedList = filter_var($requestedList, FILTER_SANITIZE_STRING);

// get the sub array of that ID and list

$requestedArray = $recipes[$requestedID][$requestedList];


// var dump didnt workn ask tor website not showing at all 

var_dump($requestedList);

// start converting requested data into JSON

$requestedJSON = "0";

if ($requestedArray != null) {
  $requested JSON = json_encode($requestedArray);
}

// output the requested JSON

echo $requestedJSON;





