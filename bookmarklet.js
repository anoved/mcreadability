javascript:(
function(){
	/* make these controls that can toggled on the page being read (insert buttons) instead of baking them into the bookmarklet */
	readConvertLinksToFootnotes = true;
	readStyle='style-novel';
	readSize='size-medium';
	readMargin='margin-medium';
	readMaxPages=12;
	
	mcr_script=document.createElement('SCRIPT');
	mcr_script.type='text/javascript';
	mcr_script.src='http://anoved.github.io/mcreadability/readability.js?x='+(Math.random());
	document.getElementsByTagName('head')[0].appendChild(mcr_script);
	
	mcr_stylesheet=document.createElement('LINK');
	mcr_stylesheet.rel='stylesheet';
	mcr_stylesheet.href='http://anoved.github.io/mcreadability/mcreadability.css';
	mcr_stylesheet.type='text/css';
	mcr_stylesheet.media='all';
	document.getElementsByTagName('head')[0].appendChild(mcr_stylesheet);
}
)();

/*
javascript:(function(){readConvertLinksToFootnotes=true;readStyle='style-novel';readSize='size-medium';readMargin='margin-medium';readMaxPages=12;mcr_script=document.createElement('SCRIPT');mcr_script.type='text/javascript';mcr_script.src='http://anoved.github.io/mcreadability/readability.js?x='+(Math.random());document.getElementsByTagName('head')[0].appendChild(mcr_script);mcr_stylesheet=document.createElement('LINK');mcr_stylesheet.rel='stylesheet';mcr_stylesheet.href='http://anoved.github.io/mcreadability/mcreadability.css';mcr_stylesheet.type='text/css';mcr_stylesheet.media='all';document.getElementsByTagName('head')[0].appendChild(mcr_stylesheet);})();
*/
