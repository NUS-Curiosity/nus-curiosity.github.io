document.addEventListener('DOMContentLoaded', function() {
    const welcomeImage = document.querySelector('.welcome-image img');
    const floatWindow = document.querySelector('.float-window');

    welcomeImage.addEventListener('mouseover', function() {
        floatWindow.style.display = 'block';
    });

    welcomeImage.addEventListener('mouseout', function() {
        floatWindow.style.display = 'none';
    });
});