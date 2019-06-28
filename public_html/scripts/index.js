$(document).ready(function() {
	// load included html files
    $("div.share_on_social_media").load("include/share_on_social_media.html"); 

    // hide side column for mobile devices
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { // mobile device
		$("div.column_uneven_2_6_3_left").hide();
		$("div.column_uneven_2_6_3_left_invisible").hide();
		$("div.column_uneven_2_6_3_right").hide();
		$("div.column_uneven_2_6_3_center").css("width","100%");
	}


	// hide more info contents and register mouseover callback
	$("div.moreinfo_content").hide();
	$("span.moreinfo_span_outer").mouseenter(function() {
		console.log($(this).nextAll("div:first"));
		$(this).nextAll("div:first").slideDown(300);
	});
})