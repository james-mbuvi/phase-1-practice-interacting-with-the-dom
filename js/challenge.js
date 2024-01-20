document.addEventListener('DOMContentLoaded', function () {
    const counter = document.getElementById('counter');
    const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const heartButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const likesList = document.querySelector('.likes');
    const commentsList = document.getElementById('list');
    const commentInput = document.getElementById('comment-input');
    const submitButton = document.getElementById('submit');
  
    let count = 0;
    let interval;
  
    function incrementCounter() {
      count++;
      counter.innerText = count;
    }
  
    function decrementCounter() {
      count--;
      counter.innerText = count;
    }
  
    function like() {
      const li = document.createElement('li');
      li.innerText = `${count} has been liked`;
      likesList.appendChild(li);
    }
  
    function pauseCounter() {
      if (pauseButton.innerText === 'pause') {
        clearInterval(interval);
        minusButton.disabled = true;
        plusButton.disabled = true;
        heartButton.disabled = true;
        submitButton.disabled = true;
        pauseButton.innerText = 'resume';
      } else {
        interval = setInterval(incrementCounter, 1000);
        minusButton.disabled = false;
        plusButton.disabled = false;
        heartButton.disabled = false;
        submitButton.disabled = false;
        pauseButton.innerText = 'pause';
      }
    }
  
    function restartCounter() {
      count = 0;
      counter.innerText = count;
    }
  
    function addComment(event) {
      event.preventDefault();
      const commentText = commentInput.value;
      if (commentText.trim() !== '') {
        const comment = document.createElement('p');
        comment.innerText = commentText;
        commentsList.appendChild(comment);
        commentInput.value = '';
      }
    }
  
    minusButton.addEventListener('click', decrementCounter);
    plusButton.addEventListener('click', incrementCounter);
    heartButton.addEventListener('click', like);
    pauseButton.addEventListener('click', pauseCounter);
    submitButton.addEventListener('click', addComment);
  });
  