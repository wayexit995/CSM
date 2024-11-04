const volumeLinks = document.querySelectorAll('.volume-list a');

volumeLinks.forEach(function(link) {
	link.addEventListener('click', function(event) {
		event.preventDefault 
