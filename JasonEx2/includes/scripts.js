$(document).ready(function(){
	$.getJSON("includes/services.json", function(data) {
		$('h1').html("Category Name: " + data.category);
		var sHTML = "<ul>";
		
		$.each(data.items, function(key, val){
			console.log(val.name);
			sHTML += "<li><a href='product.html?prodId=" + val.id + "'>" + val.name + "</a></li>";
		});
		
		sHTML += "</ul>";
		console.log("sHTML:" + sHTML);
		$('#dataServices').append(sHTML);
	});
});
