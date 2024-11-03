const volumeLinks = document.querySelectorAll('.volume-list a');

volumeLinks.forEach(function(link) {
	link.addEventListener('click', function(event) {
		event.preventDefault(); // Corrected with parentheses
		// You can add any other actions you want to perform on click here
	});
});
