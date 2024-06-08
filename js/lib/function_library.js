document.addEventListener('DOMContentLoaded', function() {
    //main background
    {
        let background = document.getElementById('main-background');
        let images = background.dataset.images.split(",");
        let id = Math.floor(Math.random() * images.length);
        background.style.backgroundImage = `url('${images[id]}')`;
    }
});