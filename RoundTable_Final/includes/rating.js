$(document).ready(function(){
	$.getJSON("includes/restaurants.json", function(data) {
		
		var restId = getRestaurantId();
		
		$.each(data.items, function(key, val){
			if(val.id == restId)
			{
				$('#restaurantTitleSection').append('<label class="restaurantLabel">' + val.name + '</label>');
                $('#restaurantTitleSection').append('<label class="restaurantAddress">' + val.address + '</label>');
				return;
			}			
		});

		
	});
	
});
