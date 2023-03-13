fetch("posts.json")
  .then((response) => response.json())
  .then((data) => {
    const posts = data.posts;
    const postList = document.createElement("ul");
    postList.classList.add("list-unstyled");
    posts.forEach((post) => {
      const listItem = document.createElement("li");
      listItem.innerHTML += `<div class="blog-post-date">${post.date}</div><div class="blog-post-title">${post.title}</div><div class="blog-post-content">${post.content}</div>`;
      postList.appendChild(listItem);
    });
    document.getElementById("blogList").appendChild(postList);
  });
