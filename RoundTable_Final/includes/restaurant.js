$(document).ready(function(){
	$.getJSON("includes/restaurants.json", function(data) {
		
		var restId = getRestaurantId();
		
		$.each(data.items, function(key, val){
			if(val.id == restId)
			{
				$('#restaurantInfo').append(generateRestaurantSection(val));
				return;
			}			
		});
		
	});
	
});
