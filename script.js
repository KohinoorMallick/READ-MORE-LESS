document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.getElementById('read-more-btn');
    const textContent = document.getElementById('text-content');

    readMoreBtn.addEventListener('click', function() {
        textContent.classList.toggle('expanded');
        if (textContent.classList.contains('expanded')) {
            readMoreBtn.textContent = 'Read Less';
        } else {
            readMoreBtn.textContent = 'Read More';
        }
    });
});
