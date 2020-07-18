function mobilemenu() {
//change 800 to mobile site 
    if ($(document).width() <= 900) {
        $("#cssLi").css({ width: "53px" });
    }else{
        $("#cssLi").css({ width: "250px" });  
    }
}

function heightmobilemenu(){
    //cek height position sidebar & main
	$("#cssLi").height( $("#main-dashboard").height() );   
}

$( document ).ready(function() {
	$('#cssLi > ul > li > a').hover(function() {

	  $('#cssLi li').removeClass('active');
	  $(this).closest('li').addClass('active');	
	  var checkElement = $(this).next();
	  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
		$(this).closest('li').removeClass('active');
		 //checkElement.slideUp(200);
	  }
	  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
		$('#cssLi ul ul:visible').slideUp(200);
		checkElement.slideDown(200);
	  }
	  if($(this).closest('li').find('ul').children().length == 0) {
		return true;
	  } else {
		return false;	
	  }		
	});

   //cek height position sidebar & main
	$("#cssLi").height( $("#main-dashboard").height() );
    
	$(".img-dash").hover(function(){
		if (!$("#cssLi").hasClass("Moved")) {
  //change 800 to mobile site             
            if ($(document).width() <= 900) {
                $("#cssLi").animate({
                    width: '250px'
                },"slow").fadeTo("slow", 1).addClass("Moved");                
            }
		} else {
			$("#cssLi").animate({
				width: '53px'
			},"slow").fadeTo("slow", 1).removeClass("Moved");
            $('#cssLi ul ul:visible').slideUp(200);
		}
    });
    
    if ($(document).width() <= 900) {
        $("#cssLi").css({ width: "53px" });
    }
    
    $(window).resize(function() {
        mobilemenu();
        heightmobilemenu();
    });
});

