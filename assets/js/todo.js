// // check off specific todo by clicking
// $("li").click(function(){
// 	// if li is grey
// 	if($(this).css("color")==="rgb(128, 128, 128)"){	//rgb color is grey
// 		//turn it black
// 		$(this).css({                   // object has been created
// 		color:"black",
// 		// it turns black
// 		textDecoration: "none"
// 	})  
// 	}else{
// 		$(this).css({                   // this has been used to change specific li
// 		color:"grey",
// 		// it turns grey
// 		textDecoration: "line-through"
// 	})  
// 	}
					
// });


$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click on X to delete
$("ul").on("click", "span", function(event){	
	$(this).parent().fadeOut(500, function(){		// here "this" <span> refers toit removes parent element of "span" ".remove()-can be also used"
			$(this).remove();						//  here "this" refers to <li>  .remove() has been used to remove elements after fading it out which means <li>
	});      
	event.stopPropagation();       // its stops event bubling "which will only active in span not any other will be executed"
})

$("input[type='text'").keypress(function(event){   // keypress() is a method which works on key press
	if(event.which===13){							// 13 is key value to press enter
		// console.log($(this).val());								// val() method is used to extract data from input
		//grabbing todo text from input
		var todotext = $(this).val()
		$(this).val("");                 //when we give give input and press enter it clear
		//create an new li to ul
		$("ul").append("<li> <span> <i class='fa fa-trash'></i> </span> " + todotext + "</li>") // to add new element in todo using input
	}
	
});

$(".fa-pencil").click(function(){
	$("input[type='text'").fadeToggle();
});