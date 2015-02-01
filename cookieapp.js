$(document).ready(function() {
	/*Step 2:*/
	var inventory = {
	  product: {
	    money: 1000,
	    cookies: 0
	  },
	  ingredients: {
	    sugar: 10,
	    flour: 10
	  },
	  pot: {
	    sugar: 0,
	    flour: 0
	  }
	};
	/* Load Inventory values into index |
	you could remove these and decrease startup load, but having to manually make sure the html/js are the same here any time you 
	edit the initial inventory properties seems like a bad idea*/
	document.getElementById("money").innerHTML = inventory.product.money;
	document.getElementById("sugarpot").innerHTML = inventory.pot.sugar;		
	document.getElementById("sugar").innerHTML = inventory.ingredients.sugar;
	document.getElementById("flourpot").innerHTML = inventory.pot.flour;
	document.getElementById("flour").innerHTML = inventory.ingredients.flour;
	document.getElementById("cookies").innerHTML = inventory.product.cookies;

	/*allows feature of #bake-one button special fade properties to remain DRY*/
	var cookiecheck = function() {
		if (inventory.pot.sugar<3 && inventory.pot.flour<6){
			$('#bake-one').fadeTo(1,.25)
		}
		else if (inventory.pot.sugar>2 && inventory.pot.flour>5){
			$('#bake-one').fadeTo(1,.75)
		}
	};

	/*run at startup to fade #bake-one appropriately depending on inventory*/
	cookiecheck();

	/*universal button functionalities*/
	$('.button').mouseenter(function(){
		$(this).stop().fadeTo(1,1)
	});

	$('.button').click(function(){
		cookiecheck()
	});

	$('.button').mouseleave(function(){
		{$(this).stop().fadeTo(1,'.5')}
		cookiecheck()
	});
	
	/*Button specific functionalities*/
	$('#use-sugar').click(function(){
		if (inventory.ingredients.sugar>0){
			inventory.pot.sugar++
			inventory.ingredients.sugar--
			document.getElementById("sugarpot").innerHTML = inventory.pot.sugar;		
			document.getElementById("sugar").innerHTML = inventory.ingredients.sugar;
		}
		else{
			alert("You're out of sugar, you should buy some more!")
		}
	});

	$('#buy-sugar').click(function(){
		if(inventory.product.money>9){
			inventory.ingredients.sugar++
			inventory.product.money -= 10
			document.getElementById("money").innerHTML = inventory.product.money;
			document.getElementById("sugar").innerHTML = inventory.ingredients.sugar; 
			}

		else {
			alert("Dude, you're out of money. Game over.")
		}
	});

	$('#use-flour').click(function(){
		if(inventory.ingredients.flour>0){
			inventory.pot.flour++
			inventory.ingredients.flour--
			document.getElementById("flourpot").innerHTML = inventory.pot.flour;
			document.getElementById("flour").innerHTML = inventory.ingredients.flour;
		}
		else{
			alert("You're out of flour, you should buy some more!")
		}
	});

	$('#buy-flour').click(function(){
		if(inventory.product.money>14){
			inventory.ingredients.flour++
			inventory.product.money -= 15
			document.getElementById("money").innerHTML = inventory.product.money;
			document.getElementById("flour").innerHTML = inventory.ingredients.flour; 
		}

		else {
			alert("Dude, you're out of money. Game over.")
		}
	});

	$('#bake-one').click(function(){
		if (inventory.pot.flour>5 && inventory.pot.sugar>2){
			inventory.pot.flour -= 6
			inventory.pot.sugar -= 3
			inventory.product.cookies ++
			document.getElementById("cookies").innerHTML = inventory.product.cookies;
			document.getElementById("flourpot").innerHTML = inventory.pot.flour;
			document.getElementById("sugarpot").innerHTML = inventory.pot.sugar;
			$('img').fadeTo(3000,.5);
			$('img').fadeTo(5000,0);
		}
		else if (inventory.pot.flour==0&&inventory.pot.sugar==0){
			alert("Uh, can't bake cookies from thin air, bro.")
		}

		else if (inventory.pot.flour==1){
			alert("That doesn't look right... Right now you only have " + inventory.pot.flour + " cup of flour, but you need six in there!")
		}

		else if (inventory.pot.sugar<3){
			alert("That doesn't look right... Right now you only have " + inventory.pot.sugar + " tbsp of sugar, but you need three in there!")
		}
		else if (inventory.pot.flour<6){
			alert("That doesn't look right... Right now you only have " + inventory.pot.flour + " cups of flour, but you need six in there!")
		}
		cookiecheck()
	});

	/*font switcher button is fun, but can obviously be removed if desired.*/
	var fontcount = 1;
	$('#font').click(function(){
			fontcount++
		switch(fontcount) {
	    case 1:
	  		$("h2").css("font-family","Chewy")
	        break;
	    case 2:
	  		$("h2").css("font-family","Pacifico")
	        break;
	    case 3:
	    	$("h2").css("font-family","Shadows Into Light")
	    	break;
	    case 4:
	    	$("h2").css("font-family","Gloria Hallelujah")
	    	break;
	    case 5:
	    	$("h2").css("font-family","Indie Flower")
	    	break;
	    case 6:
	    	$("h2").css("font-family","Lobster")
	    	break;
	    case 7:
	    	fontcount = 1
	    	console.log("fountcount reset to " + fontcount +".")
	    	$("h2").css("font-family","Chewy")
	        break;
	    default:
	        console.log("error with font counter")
	}
	});

});
