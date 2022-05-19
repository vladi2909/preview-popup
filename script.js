$(document).ready(function() {
	$(".landing__link-img").click(function(){
	  	var img = $(this);
		var src = img.attr('src');
		$("body").append("<div class='popup'>"+
						 "<div class='popup-close-wrap'><div class='popup-close'>&times;</div></div>"+
						 "<div class='popup_bg'></div>"+
						 "<img src="+src+" class='popup_img' />"+
						 "</div>"); 
		$(".popup").fadeIn(200);
		$("body").css("overflow", "hidden");
		$(".popup_bg").click(function(){   
			$(".popup").fadeOut(200);
			setTimeout(function() {
			  $(".popup").remove();
			  $("body").css("overflow", "auto");
			}, 200);
		});
		$(".popup-close").click(function(){ 
			$(".popup").fadeOut(200);
			setTimeout(function() {
			  $(".popup").remove();
			  $("body").css("overflow", "auto");
			}, 200);
		});
	});
});