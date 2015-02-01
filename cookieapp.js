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

var cookiecheck = function() {
	if (inventory.pot.sugar<3 && inventory.pot.flour<6){
		$('#bake-one').fadeTo('fast',.25)
	}
	else if (inventory.pot.sugar>2 && inventory.pot.flour>5){
		$('#bake-one').fadeTo('.1',.50)
	}
};

cookiecheck();

$('.button').mouseenter(function(){
	$(this).fadeTo('fast',1)
});

/*console.log all variables*/
$('.button').click(function(){
	cookiecheck();
	//console.log("inventory flour: " + inventory.ingredients.flour + ", inventory sugar: " + inventory.ingredients.sugar + ", pot flour: " + inventory.pot.flour + ", pot sugar: " + inventory.pot.sugar + ", money: " + inventory.product.money + ", cookies: " + inventory.product.cookies)
});

/*is broken, doesn't make #bake-one fade down to .25 like it should, seems the if condition is never met*/
$('.button').mouseleave(function(){
	if ($('#bake-one')){
		cookiecheck()
		console.log("cookiecheck")
	}
	else {$(this).fadeTo('.1',.5)}
})

/* Working version of mouseleave, but has 'stepped fading' that is undesirable
$('.button').mouseleave(function(){
	$(this).fadeTo('.1',.5)
	cookiecheck();
})
*/

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
		("Dude, you're out of money. Game over.")
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
		alert("You made a cookie!")
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


/*font switcher*/
var fontcount = 0;
$('#font').click(function(){
	switch(fontcount) {
    case 0:
  		$("h2").css("font-family","Chewy")
        break;
    case 1:
  		$("h2").css("font-family","Pacifico")
        break;
    case 2:
    	$("h2").css("font-family","Shadows Into Light")
    	break;
    case 3:
    	$("h2").css("font-family","Gloria Hallelujah")
    	break;
    case 4:
    	$("h2").css("font-family","Indie Flower")
    	break;
    case 5:
    	$("h2").css("font-family","Lobster")
    	fontcount = 0
    	break;
    case 6:
    	fontcount = 0
    	console.log("fountcount reset to 0")

    default:
        console.log("error with font counter") //Shadows+Into+Light|Gloria+Hallelujah|Indie+Flower|Chewy|Pacifico
}
	fontcount++
});

});
