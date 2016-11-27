jQuery(document).ready(function($){
	$( "a.ui-link" ).click(function() {
		FB.XFBML.parse();
	});
});	

function adsClick() {
	var a = $(".entry-title").last().data('title');
	window.location.href = 'http://' + window.location.hostname + '/register.php?q=' + URIComponent(a);
}

function buyBook() {
	var	str		= $(".entry-title").last().text();
		aut		= $(".author").last().text();
		title	= encodeURI( str + ' ' + aut ),
		url		= 'http://www.rakuten.com/sr/searchresults.aspx?qu=' + title + '&sid=3';
		vig		= 'http://redirect.viglink.com?key=de5c74cb7dc1a38954a78ecab8d789eb&u=' + encodeURIComponent( url );
	window.open(vig);
}
