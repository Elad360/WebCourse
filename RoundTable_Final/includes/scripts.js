$(document).ready(function(){
	$.getJSON("includes/restaurants.json", function(data) {
		var sHTML = "";
		
		$.each(data.items, function(key, val){
			console.log(val.name);
			//sHTML += "<li><a href='product.html?prodId=" + val.id + "'>" + val.name + "</a></li>";
			sHTML += '\
						<li class="restaurantSection">\
	                    	<a href="restaurant.html" id="restaurantLabel">' + val.name + '</a>\
	                    	<label id="restaurantAddress">' + val.address + '</label>\
	                    	<button type="button" class="btn" id="pinBtn"></button>\
	                    	<button type="button" class="btn" id="websiteLinkBtn"></button>\
	                    	<button type="button" class="btn" id="shareBtn"></button>\
	                    	<button type="button" class="btn" id="addToWishlistBtn"></button>\
	                    	<label class="ratingScore" id="totalRatingScore">' + val.rating + '</label>\
	                    	<button type="button" class="btn" id="happyBtn"></button>\
	                    	<button type="button" class="btn" id="sadBtn"></button>\
	                    	<label id="dislikesLabel">' + val.dislikes + '</label>\
	                    	<label id="likesLabel">' + val.likes + '</label>\
	                    	\
	                    	<section id="advancedRatingArea">\
	                        <section>\
	                            <label class="left">Food</label>\
	                            <section class="progress left" id="foodRatingBar">\
	                                <section class="progress-bar progress-bar-warning" role="progressbar" style="width: 95%;"></section>\
	                            </section>\
	                            <label class="left">' + val.food + '</label>\
	                        </section>\
	                        <div class="clear"></div>\
	                        <section>\
	                            <label class="left">Service</label>\
	                            <section class="progress left" id="serviceRatingBar">\
	                                <section class="progress-bar progress-bar-warning" role="progressbar" style="width: 95%;"></section>\
	                            </section>\
	                            <label class="left">' + val.service + '</label>\
	                        </section>\
	                        <div class="clear"></div>\
	                        <section>\
	                            <label class="left">Price</label>\
	                            <section class="progress left" id="priceRatingBar">\
	                                <section class="progress-bar progress-bar-warning" role="progressbar" style="width: 90%;"></section>\
	                            </section>\
	                            <label class="left">' + val.price + '</label>\
	                        </section>\
	                        <div class="clear"></div>\
	                        <section>\
	                            <label class="left">Atmosphere</label>\
	                            <section class="progress left" id="atmosphereRatingBar">\
	                                <section class="progress-bar progress-bar-warning" role="progressbar" style="width: 100%;"></section>\
	                            </section>\
	                            <label class="left">' + val.atmosphere + '</label>\
	                        </section>\
	                        <div class="clear"></div>\
	                    </section>\
						\
						<section id="restaurantCuisines">\
	                        <label id="cuisineInstance">' + val.cuisine + '</label>\
	                    </section>\
	                    \
	                    <img id="userPhotos" src=' + val.photo + ' class="img-thumbnail" alt="User photos">\
	                    \
	                    <section id="rateBtnSection">\
	                        <button type="button" class="btn" id="rateBtn"></button>\
	                        <label>RATE!</label>\
	                    </section>\
					</li>'
		});

		console.log("sHTML:" + sHTML);
		$('#restaurantsList').append(sHTML);
	});
});
