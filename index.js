document.querySelector('.search-btn').addEventListener('click', function () {
    // Handle search button click
    alert('Search button clicked!');
});

// Target the heart buttons by their IDs and toggle the active state
const heartButton1 = document.getElementById('heartButton1');
const heartButton2 = document.getElementById('heartButton2');
const heartButton3 = document.getElementById('heartButton3');

heartButton1.addEventListener('click', function() {
    heartButton1.classList.toggle('active');
});

heartButton2.addEventListener('click', function() {
    heartButton2.classList.toggle('active');
});

heartButton3.addEventListener('click', function() {
    heartButton3.classList.toggle('active');
});


// JavaScript for handling the button clicks and period selection
document.querySelectorAll('.period-options button').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelector('.period-options .active').classList.remove('active');
        this.classList.add('active');
        // Update payment details based on period selection if needed
    });
});

