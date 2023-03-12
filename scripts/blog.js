fetch("posts.json")
  .then((response) => response.json())
  .then((data) => {
    const posts = data.posts;
    const postList = document.createElement("ul");
    postList.classList.add("list-unstyled");
    posts.forEach((post) => {
      const listItem = document.createElement("li");
      listItem.innerHTML += `<h6 class="me-2">${post.date}</h6>${post.content}`;
      postList.appendChild(listItem);
    });
    document.getElementById("blogList").appendChild(postList);
  });
