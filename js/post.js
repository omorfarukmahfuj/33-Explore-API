function loadPost() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(displayPosts(data)))
}

/*
1. get the container element where do you want to add the new elements
2. create child element
3. set innerText or innerHTML
4. appendChild
*/

function displayPosts(posts) {
  const postContainer = document.getElementById('post-container');
  for (const post of posts) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML = `
    <h4>User - ${post.userId}</h4>
    <h5>Post: ${post.title}</h5>
    <p>Post ${post.body}</p>
    `;
    postContainer.appendChild(postDiv)
  }
}

loadPost();