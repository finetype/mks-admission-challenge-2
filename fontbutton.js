/*$(document).ready(function(){

	$('head').after('<style> #fontbutton{background-color:#CC00CC; box-shadow: 1px 1px 2px 3px #707054; font-size:20; margin:40px; height: 45px; width: 45px; border-radius: 30px; text-align: center; opacity: 0.5; color: #FFFFFF; line-height: 43px; font-family:arial;} </style>');

	$('body').after('<div id="fontbutton"><em>F</em></div>');

	$('#fontbutton').mouseenter(function(){
		$(this).stop().fadeTo(1,1)
	});

	$('#fontbutton').mouseleave(function(){
		$(this).stop().fadeTo(1,'.5')
	});
	
	var fontcount = 1;
	$('#fontbutton').click(function(){
			console.log("ping!");
			fontcount++;
		switch(fontcount) {
	    case 1:
	  		$("h2").css("font-family","Chewy");
	        break;
	    case 2:
	  		$("h2").css("font-family","Pacifico");
	        break;
	    case 3:
	    	$("h2").css("font-family","Shadows Into Light");
	    	break;
	    case 4:
	    	$("h2").css("font-family","Gloria Hallelujah");
	    	break;
	    case 5:
	    	$("h2").css("font-family","Indie Flower");
	    	break;
	    case 6:
	    	$("h2").css("font-family","Lobster");
	    	break;
	    case 7:
	    	fontcount = 1;
	    	console.log("fountcount reset to " + fontcount +".");
	    	$("h2").css("font-family","Chewy");
	        break;
	    default:
	        console.log("error with font counter");
	        break;
	    }
    });
});*/