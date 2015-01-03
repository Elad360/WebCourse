 $(document).ready(function()
 {
 	var i = 5;
 	while(i--)
 	{
 		AddNewBox();
 	}
 	
 	$("#addBox").click(function()
	{
		$('<section class="boxPrefab boxWhite"></section>').appendTo('main');
	});
 	
 	$("#removeBox").click(function()
	{
		$('.boxPrefab').last().remove();
	});
	
	$(".boxPrefab").click(function()
	{
		$(this).toggleClass('boxDark');
	});
	
});

function AddNewBox()
{
	$('<section class="boxPrefab"></section>').appendTo('main');
}
