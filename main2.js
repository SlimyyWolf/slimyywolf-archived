let likeCount = 0;
let dislikeCount = 0;

function toggleLike() {
    const likeButton = document.getElementById('likeButton');
    const dislikeButton = document.getElementById('dislikeButton');
    const likeCountSpan = document.getElementById('likeCount');
    const dislikeCountSpan = document.getElementById('dislikeCount');

    if (likeButton.classList.contains('active')) {
        likeButton.classList.remove('active');
        likeCount--;
    } else {
        likeButton.classList.add('active');
        likeCount++;
        if (dislikeButton.classList.contains('active')) {
            dislikeButton.classList.remove('active');
            dislikeCount--;
        }
    }

    likeCountSpan.textContent = likeCount;
    dislikeCountSpan.textContent = dislikeCount;
}

function toggleDislike() {
    const likeButton = document.getElementById('likeButton');
    const dislikeButton = document.getElementById('dislikeButton');
    const likeCountSpan = document.getElementById('likeCount');
    const dislikeCountSpan = document.getElementById('dislikeCount');

    if (dislikeButton.classList.contains('active')) {
        dislikeButton.classList.remove('active');
        dislikeCount--;
    } else {
        dislikeButton.classList.add('active');
        dislikeCount++;
        if (likeButton.classList.contains('active')) {
            likeButton.classList.remove('active');
            likeCount--;
        }
    }

    likeCountSpan.textContent = likeCount;
    dislikeCountSpan.textContent = dislikeCount;
}
