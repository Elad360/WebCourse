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
	
	
	$(function() {
		$( "#overallRatingSlider" ).slider({
			range: "min",
			value: 5,
			min: 1,
			max: 10,
			step: 1,
			slide: function( event, ui ) { $( "#overallRatingValue" ).val( ui.value + ".0" ); }
		});
		$( "#overallRatingValue" ).val( $( "#overallRatingSlider" ).slider( "value" ) + ".0" );
	});
	
	$(function() {
		$( "#foodRatingSlider" ).slider({
			range: "min",
			value: 5,
			min: 1,
			max: 10,
			step: 1,
			slide: function( event, ui ) { $( "#foodRatingValue" ).val( ui.value + ".0" ); }
		});
		$( "#foodRatingValue" ).val( $( "#foodRatingSlider" ).slider( "value" ) + ".0" );
	});
	
	$(function() {
		$( "#serviceRatingSlider" ).slider({
			range: "min",
			value: 5,
			min: 1,
			max: 10,
			step: 1,
			slide: function( event, ui ) { $( "#serviceRatingValue" ).val( ui.value + ".0" ); }
		});
		$( "#serviceRatingValue" ).val( $( "#serviceRatingSlider" ).slider( "value" ) + ".0" );
	});
	
	$(function() {
		$( "#priceRatingSlider" ).slider({
			range: "min",
			value: 5,
			min: 1,
			max: 10,
			step: 1,
			slide: function( event, ui ) { $( "#priceRatingValue" ).val( ui.value + ".0" ); }
		});
		$( "#priceRatingValue" ).val( $( "#priceRatingSlider" ).slider( "value" ) + ".0" );
	});

	$(function() {
		$( "#atmosphereRatingSlider" ).slider({
			range: "min",
			value: 5,
			min: 1,
			max: 10,
			step: 1,
			slide: function( event, ui ) { $( "#atmosphereRatingValue" ).val( ui.value + ".0" ); }
		});
		$( "#atmosphereRatingValue" ).val( $( "#atmosphereRatingSlider" ).slider( "value" ) + ".0" );
	});
	
	
});
