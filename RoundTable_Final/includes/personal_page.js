$(document).ready(function(){
	
	if(getGeoLocation()) 
		{
			geoIt();
		}
		else
		{
			alert("No support for Geolocation");
		}
		
});