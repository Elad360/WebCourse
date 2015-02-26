$(document).ready(function(){
	
	$.getJSON("includes/restaurants.json", function(data) {
		var sHTML = "";
		
		$.each(data.items, function(key, val){
			sHTML = generateRestaurantSection(val) + "<li class='divider dividerThin'></li>";
			$(sHTML).appendTo('#restaurantsList');
		});
		
		$("#restaurantsList .divider:last").hide(); //Remove the last divider
		
		$('.restaurantSection').each(function(index){
			$(this).delay((index++) * 300).fadeTo(500, 1); 
		});
		
	});
	
		
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
		
	$('#filterSmile').click(function() 
	{
		$(this).toggleClass('filterSortBtnSelected');
	});
	
	$('#filterMap').click(function() 
	{
		if(getGeoLocation()) 
		{
			geoIt();
		}
		else
		{
			alert("No support for Geolocation");
		}
		$('#filterByRadiusSection').lightbox_me();
	});
	
	
	$(function() {
		$( "#slider" ).slider({
			value: 2,
			min: 0,
			max: 20,
			step: 1,
			slide: function( event, ui ) {
				$( "#radiusValue" ).val( ui.value + "km" );
			}
		});
		
		$( "#radiusValue" ).val( $( "#slider" ).slider( "value" ) + "km" );
	});
	
});
