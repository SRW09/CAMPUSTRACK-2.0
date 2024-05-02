jQuery(document).ready(function() {
	
	"use strict";
	// Your custom js code goes here.

});

$(document).ready(function() {
	$('.image-link').magnificPopup({
	  type: 'image',
	  gallery:{
		enabled:true
	  }
	});
  });
  // Replace the text inside the announcement-content span with your dynamic announcement
document.querySelector('.announcement-content span:nth-child(2)').textContent = ' WEBSITE IS IN PROGRESS ';
