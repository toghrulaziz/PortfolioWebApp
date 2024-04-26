// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const data = {
            'name': document.getElementById('name').value,
            'email': document.getElementById('email').value,
            'message': document.getElementById('message').value,
        };

        console.log(data);


        fetch('https://functionapp120240426193739.azurewebsites.net/api/EmailSender', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

    });
});


