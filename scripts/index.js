// Declare variable to store navbar element
const navELement = document.getElementById('navbar');

// detect scroll event on document
document.addEventListener('scroll', function() {
    // console.log(window.scrollY)
    if (window.scrollY > 70) {
        // change navbar bg to blue
       navELement.style.backgroundColor = '#0979e4';
    } else {
        // change navbar bg to transparent
        navELement.style.backgroundColor = 'transparent';
    }
});