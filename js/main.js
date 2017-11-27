//Changes Michelle Champalanne at top of page to say Michelle Champalanne's resume when clicked on
var hello = document.getElementById('michelle');

hello.addEventListener('click', function () {
    var myElement = document.createElement('h1');
    myElement.innerHTML = 'Welcome to Michelle Champalanne\'s resume!';
    hello.replaceWith(myElement);
});
