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
	
		
	$('#filterSmile').click(function() 
	{
		$(this).toggleClass('filterSortBtnSelected');
	});
	
	
	$('.dropdown-menu > .cuisineInstance').click(function() 
	{
		$(this).toggleClass('cuisineSelected');
		$('#filterCuisine').toggleClass('filterSortBtnSelected');
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
	
	
	$('#radiusFilterWrapper > .btn-warning').click(function()
	{
		$('#filterMap').addClass('filterSortBtnSelected');
		$('#filterByRadiusSection').trigger('close');
	});
	
	
	$('#radiusFilterWrapper > .btn-link').click(function()
	{
		$('#filterMap').removeClass('filterSortBtnSelected');
		$('#filterByRadiusSection').trigger('close');
	});	
	
	
	$(function() {
		$( "#radiusSlider" ).slider({
			value: 2,
			min: 1,
			max: 20,
			step: 1,
			slide: function( event, ui ) {
				$( "#radiusValue" ).val( ui.value + "km" );
			}
		});
		
		$( "#radiusValue" ).val( $( "#radiusSlider" ).slider( "value" ) + "km" );
	});
	
});
