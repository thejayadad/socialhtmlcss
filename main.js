// Mock data
let postsData = [
    {
      id: 1,
      content: "Enjoying a delicious cup of coffee at my favorite cafe.",
      username: "CoffeeLover123",
      likes: 20,
      createdAt: "2023-12-03T18:15:00Z",
      media: {
        type: "image",
        url: "https://picsum.photos/200/300?image=1025",
      },
    },
  ];
  
  function displayPosts() {
    const feedContainer = document.getElementById('feed-container');
    feedContainer.innerHTML = '';
  
    postsData.forEach(postData => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
  
      let mediaElement = '';
      if (postData.media && postData.media.type === 'image') {
        mediaElement = `<img src="${postData.media.url}" alt="Post Image">`;
      } else if (postData.media && postData.media.type === 'video') {
        mediaElement = `<video controls><source src="${postData.media.url}" type="video/mp4"></video>`;
      }
  
      postElement.innerHTML = `
        <p>${postData.content}</p>
        ${mediaElement}
        <p><strong>${postData.username || 'Anonymous'}</strong></p>
        <p>${postData.likes} ${postData.likes === 1 ? 'like' : 'likes'}</p>
        <p>${new Date(postData.createdAt).toLocaleString()}</p>
      `;
  
      feedContainer.appendChild(postElement);
    });
  }
  
  function handleFormSubmission(event) {
    event.preventDefault();
  
    const content = document.getElementById('content').value;
    const image = document.getElementById('image').value;
    const video = document.getElementById('video').value;
    const username = document.getElementById('username').value;
  
    const newPost = {
      id: postsData.length + 1,
      content,
      username,
      likes: 0,
      createdAt: new Date().toISOString(),
      media: {
        type: image ? 'image' : (video ? 'video' : null),
        url: image || video || null,
      },
    };
  
    postsData.unshift(newPost);
    displayPosts();
  }
  
  window.onload = () => {
    displayPosts();
  
    const submitForm = document.getElementById('submit-form');
    submitForm.addEventListener('submit', handleFormSubmission);
  };
  