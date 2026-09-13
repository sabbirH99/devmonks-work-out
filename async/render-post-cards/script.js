const postsContainer = document.querySelector(".posts-container");

const usersUrl = "https://jsonplaceholder.typicode.com/users";
const postsUrl = "https://jsonplaceholder.typicode.com/posts";



async function getPosts() {
    postsContainer.innerHTML = "Loading...";

    try {
        await new Promise(resolve => setTimeout(resolve, 2000));

        const [usersResponse, postsResponse] = await Promise.all([
            fetch(usersUrl),
            fetch(postsUrl)
        ]);

        if (!usersResponse.ok || !postsResponse.ok) {
            throw new Error("Failed to fetch data!");
        }

        const users = await usersResponse.json();
        const posts = await postsResponse.json();
        console.log(users, posts);


        renderPosts(posts, users, postsContainer);

    } catch (error) {
        postsContainer.innerHTML = "Sorry, something went wrong"
    }
}

function renderPosts(posts, users, targetElement) {
    targetElement.innerHTML = "";

    const postCards = posts.map(function (post) {

        const author = users.find(function (user) {
            return user.id === post.userId;
        });

        return createPostCard(post, author);
    });

    postCards.forEach(function (postCard) {
        targetElement.appendChild(postCard);
    });
}


function createPostCard(post, author) {
    const postCard = document.createElement("div");
    postCard.classList.add("post-card");

    postCard.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <div class="post-author">
            By: ${author.name}
        </div>
    `;

    return postCard;
}


getPosts();