$(document).ready(function(){
	$.getJSON("includes/restaurants.json", function(data) {
		var sHTML = "";
		
		$.each(data.items, function(key, val){
			sHTML += generateRestaurantSection(val) + "<li class='divider dividerThin'></li>";			
		});

		$('#restaurantsList').append(sHTML);
		$("#restaurantsList .divider:last").addClass("hide"); //Remove the last divider
	});
});
