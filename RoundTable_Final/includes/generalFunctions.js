function generateRestaurantSection(val)
	{
		return '<li class="restaurantSection">\
                	<a href="restaurant.html?restId=' + val.id + '" class="restaurantLabel">' + val.name + '</a>\
                	<section class="restaurantAddress">\
                		<label class="left">' + val.address + '</label>\
                		<button type="button" class="left btn pinBtn"></button>\
                	</section>\
                	<button type="button" class="btn websiteLinkBtn"></button>\
                	<button type="button" class="btn shareBtn"></button>\
                	<button type="button" class="btn addToWishlistBtn"></button>\
                	<label class="ratingScore totalRatingScore hoverEffect effect-1">' + val.rating.toFixed(1) + '</label>\
                	<button type="button" class="btn happyBtn"></button>\
                	<button type="button" class="btn sadBtn"></button>\
                	<label class="dislikesLabel">' + val.dislikes + '</label>\
                	<label class="likesLabel">' + val.likes + '</label>\
                	\
                	<section class="advancedRatingArea">\
	                    <section>\
	                        <label class="left">Food</label>\
	                        <section class="progress left foodRatingBar">\
	                            <section class="progress-bar progress-bar-warning" role="progressbar" style="width: ' + val.food*10 + '%;"></section>\
	                        </section>\
	                        <label class="advancedRatingVal">' + val.food.toFixed(1) + '</label>\
	                    </section>\
	                    <div class="clear"></div>\
	                    <section>\
	                        <label class="left">Service</label>\
	                        <section class="progress left serviceRatingBar">\
	                            <section class="progress-bar progress-bar-warning" role="progressbar" style="width: ' + val.service*10 + '%;"></section>\
	                        </section>\
	                        <label class="advancedRatingVal">' + val.service.toFixed(1) + '</label>\
	                    </section>\
	                    <div class="clear"></div>\
	                    <section>\
	                        <label class="left">Price</label>\
	                        <section class="progress left priceRatingBar">\
	                            <section class="progress-bar progress-bar-warning" role="progressbar" style="width: ' + val.price*10 + '%;"></section>\
	                        </section>\
	                        <label class="advancedRatingVal">' + val.price.toFixed(1) + '</label>\
	                    </section>\
	                    <div class="clear"></div>\
	                    <section>\
	                        <label class="left">Atmosphere</label>\
	                        <section class="progress left atmosphereRatingBar">\
	                            <section class="progress-bar progress-bar-warning" role="progressbar" style="width: ' + val.atmosphere*10 + '%;"></section>\
	                        </section>\
	                        <label class="advancedRatingVal">' + val.atmosphere.toFixed(1) + '</label>\
	                    </section>\
	                    <div class="clear"></div>\
	            	</section>\
					\
					<section class="restaurantCuisines">\
                    	<label class="cuisineInstance">' + val.cuisine + '</label>\
                	</section>\
                	\
                	<section class="userPhotos" style="background-image:url(' + val.photo + ')"></section>\
                	\
	                <section class="rateBtnSection">\
	                	<a href="rating.html?restId=' + val.id + '" class="btn rateBtn"></a>\
	                    <label>RATE!</label>\
	                </section>\
				</li>'
	}
	
	
	function getRestaurantId()
	{
		var keyValue = window.location.search.substring(1).split('&');
		return keyValue[0].split('=')[1];
	}