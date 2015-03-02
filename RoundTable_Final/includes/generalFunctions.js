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
                	<a href="restaurant.html?restId=' + val.id + '" class="ratingScore totalRatingScore hoverEffect effect-1">' + val.rating.toFixed(1) + '</a>\
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
	
	function getGeoLocation()
	{
		try 
		{
			if(!!navigator.geolocation) 
				return navigator.geolocation;
			else 
				return null;
		}
		catch(e) 
		{
			return null;
		}
	}
	
	function geoIt()
	{
		navigator.geolocation.getCurrentPosition(function(position)
		{
			var nLatitude = position.coords.latitude;
			var nLongitude = position.coords.longitude;
			var latlng = new google.maps.LatLng(nLatitude, nLongitude); //user position
			var map_opts = {
				zoom: 14,
				center: latlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP //HYBRID,ROADMAP,TERRAIN
				};
			map=new google.maps.Map(document.getElementById("mapWrapper"), map_opts);
			var markerIt = new google.maps.Marker({
				position: latlng,
				map: map,
				title: "You are here!",
				animation:google.maps.Animation.BOUNCE
				});
			var radius_opts = {
				strokeColor: '#FFFFFF',
				strokeOpacity: 0.9,
				strokeWeight: 2,
				fillColor: '#FFFFFF',
				fillOpacity: 0.3,
				map: map,
				center: latlng,
				radius: 2000
				};
    		areaRadius = new google.maps.Circle(radius_opts);

		});	
	}