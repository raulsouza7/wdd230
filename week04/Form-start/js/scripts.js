document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.wf1');
    form.addEventListener('submit', function(event) {

        if (!form.checkValidity()) {
            event.preventDefault();
            alert('Please fill all the required fields.');
        }
    });
});
