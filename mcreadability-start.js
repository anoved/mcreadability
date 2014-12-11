/*
 * Readability. An Arc90 Lab Experiment. 
 * Website: http://lab.arc90.com/experiments/readability
 * Source:  http://code.google.com/p/arc90labs-readability
 *
 * Copyright (c) 2009 Arc90 Inc
 * Readability is licensed under the Apache License, Version 2.0.
 *
 * Multi-column stylesheet and bookmarklet maker modifications
 * by Jim DeVona: http://anoved.net/tag/readability
**/

var style     = "style-novel";
var size      = "size-medium";
var margin    = "margin-medium";
var footnotes = false;

var linkStringStart = "javascript:(function(){";
var linkStringEnd   = "';readMaxPages=12;_readability_script=document.createElement('SCRIPT');_readability_script.type='text/javascript';_readability_script.src='http://anoved.net/js/readability.js?x='+(Math.random());document.getElementsByTagName('head')[0].appendChild(_readability_script);_readability_css=document.createElement('LINK');_readability_css.rel='stylesheet';_readability_css.href='http://anoved.net/css/mcreadability.css';_readability_css.type='text/css';_readability_css.media='all';document.getElementsByTagName('head')[0].appendChild(_readability_css);})();";

$(document).ready(function() {
    		   
	$("#bookmarkletLink").attr("href", linkStringStart + "readConvertLinksToFootnotes=false;readStyle='" + style + "';readSize='" + size + "';readMargin='" + margin + linkStringEnd);
	
	$("#bookmarkletBox").text(linkStringStart + "readConvertLinksToFootnotes=false;readStyle='" + style + "';readSize='" + size + "';readMargin='" + margin + linkStringEnd);
	
	function applyChange(s,y) {
		
		switch(s){
			case "style":
				style = y;
				break;
			case "size":
				size = y;
				break;
			case "margin":
				margin = y;
				break;
			case "footnotes":
				footnotes = y;
		}
		
		$("#bookmarkletLink").attr("href", linkStringStart + "readConvertLinksToFootnotes=" + (footnotes ? 'true' : 'false') + ";readStyle='" + style + "';readSize='" + size + "';readMargin='" + margin + linkStringEnd);
		
		$("#bookmarkletBox").text(linkStringStart + "readConvertLinksToFootnotes=" + (footnotes ? 'true' : 'false') + ";readStyle='" + style + "';readSize='" + size + "';readMargin='" + margin + linkStringEnd);
	}

	$(".settings-box input[type='radio']").bind("click", function(){
		applyChange(this.name, this.value);
	});
	$("input[type='checkbox']").bind("click", function() {
		applyChange(this.name, this.checked);
	});
	$("#bookmarkletLink").bind("click", function(){
		if($.browser.msie){
			alert("To start using Readability, right-click and select 'Add To Favorites...' to save this link to your browser's bookmarks toolbar.");
		}
		else {
			alert("To start using Readability, drag this link to your browser's bookmarks toolbar.");
		}
		return false;
	});
});
