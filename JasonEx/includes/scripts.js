$(document).ready(function(){
	$.getJSON("includes/services.json", function(data) {
		console.log(data);
	});
});
