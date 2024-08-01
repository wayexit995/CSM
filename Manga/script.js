const volumeLinks = document.querySelectorAll('.volume-list a');

volumeLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Correct usage
    // Additional functionality here
  });
});
