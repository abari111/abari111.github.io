


document.getElementById('vision').addEventListener('click', function() {
    // Get the container element
    const articles = document.getElementById('articles')
    const items = articles.getElementsByClassName('art');
    // Loop through each item and remove the 'hidden' class
    for (let i = 0; i < items.length; i++) {
        if(items[i].classList.contains('vision') ){
            items[i].classList.remove('hidden');
            continue;
        }
        items[i].classList.add('hidden');
    }
    tags = document.getElementsByClassName('tag');
    for(let i = 0; i < tags.length; i++){
        tags[i].classList.remove('active_btn');
    }
    document.getElementById('vision').classList.add('active_btn');
});

document.getElementById('more').addEventListener('click', function() {
    // Get the container element
    const articles = document.getElementById('articles')
    const items = articles.getElementsByClassName('art');
    // Loop through each item and remove the 'hidden' class
    for (let i = 0; i < items.length; i++) {
        if(items[i].classList.contains('more') ){
            items[i].classList.remove('hidden');
            continue;
        }
        items[i].classList.add('hidden');
    }
    tags = document.getElementsByClassName('tag');
    for(let i = 0; i < tags.length; i++){
        tags[i].classList.remove('active_btn');
    }
    document.getElementById('more').classList.add('active_btn');
});

document.getElementById('nlp').addEventListener('click', function() {
    // Get the container element
    const articles = document.getElementById('articles')
    const items = articles.getElementsByClassName('art');
    // Loop through each item and remove the 'hidden' class
    for (let i = 0; i < items.length; i++) {
        if(items[i].classList.contains('nlp') ){
            items[i].classList.remove('hidden');
            continue;
        }
        items[i].classList.add('hidden');
    }
    tags = document.getElementsByClassName('tag');
    for(let i = 0; i < tags.length; i++){
        tags[i].classList.remove('active_btn');
    }
    document.getElementById('nlp').classList.add('active_btn');
});

document.getElementById('iot').addEventListener('click', function() {
    // Get the container element
    const articles = document.getElementById('articles')
    const items = articles.getElementsByClassName('art');
    // Loop through each item and remove the 'hidden' class
    for (let i = 0; i < items.length; i++) {
        if(items[i].classList.contains('iot') ){
            items[i].classList.remove('hidden');
            continue;
        }
        items[i].classList.add('hidden');
    }
    tags = document.getElementsByClassName('tag');
    for(let i = 0; i < tags.length; i++){
        tags[i].classList.remove('active_btn');
    }
    document.getElementById('iot').classList.add('active_btn');
});


document.getElementById('all').addEventListener('click', function() {
    // Get the container element
    const articles = document.getElementById('articles')
    const items = articles.getElementsByClassName('art');
    // Loop through each item and remove the 'hidden' class
    for (let i = 0; i < items.length; i++) {

        items[i].classList.remove('hidden');
    }
    tags = document.getElementsByClassName('tag');
    for(let i = 0; i < tags.length; i++){
        tags[i].classList.remove('active_btn');
    }
    document.getElementById('all').classList.add('active_btn');
});