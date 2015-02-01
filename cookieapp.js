$(document).ready(function() {
/*--------------------Step 2:*/
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


$('.button').mouseenter(function(){
	$(this).fadeTo('50',1)
})

$('.button').mouseleave(function(){
	$(this).fadeTo('fast',.5)
})

$('#use-sugar').click(function(){
	if (inventory.ingredients.sugar>0){
		inventory.pot.sugar++
		inventory.ingredients.sugar--
	}
	else{
		alert("You're out of sugar, you should buy some more!")
	}
})

$('#buy-sugar').click(function(){
	if(inventory.product.money>9){
		inventory.ingredients.sugar++
		inventory.product.money -= 10
		$('.money') = inventory.product.money
		}

	else {
		("Dude, you're out of money. Game over.")
	}
})

$('#use-flour').click(function(){
	if(inventory.ingredients.flour>0){
		inventory.pot.flour++
		inventory.ingredients.flour--
	}
	else{
		alert("You're out of flour, you should buy some more!")
	}
})

$('#buy-flour').click(function(){
	if(inventory.product.money>14){
		inventory.ingredients.flour++
		inventory.product.money -= 15
	}

	else {
		alert("Dude, you're out of money. Game over.")
	}
})

$('#bake-one').click(function(){
	if (inventory.pot.flour>5 && inventory.pot.sugar>2){
		inventory.pot.flour -= 6
		inventory.pot.sugar -= 3
		inventory.product.cookies ++
		alert("You made a cookie!")
	}

	else if (inventory.pot.flour<6){
		alert("What are you trying to do? Don't you know how to follow a recipe?! Right now you only have " + inventory.pot.flour + " units of flour, but you need six in there!")
	}

	else if (inventory.pot.sugar<3){
		alert("What are you trying to do? Don't you know how to follow a recipe?! Right now you only have " + inventory.pot.sugar + " units of flour, but you need three in there!")
	}
})

$('.button').click(function(){	
	console.log("inventory flour: " + inventory.ingredients.flour + ", inventory sugar: " + inventory.ingredients.sugar + ", pot flour: " + inventory.pot.flour + ", pot sugar: " + inventory.pot.sugar + ", money: " + inventory.product.money + ", cookies: " + inventory.product.cookies)
})


});
