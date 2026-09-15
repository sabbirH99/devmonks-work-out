const usersContainer = document.querySelector(".users-container");

const url = "https://jsonplaceholder.typicode.com/users";

// const url = "https://jsonplaceholder.typicode.com/userss";


async function getUsers() {
    usersContainer.innerHTML = "Loading...";

    try {
        await new Promise(resolve => setTimeout(resolve, 2000));

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const users = await response.json();
        console.log(users);
        renderUsers(users, usersContainer);
    } catch (error) {
        usersContainer.innerHTML = "Sorry, something went wrong"
    }
}

getUsers();

function renderUsers(users, targetElement) {
    targetElement.innerHTML = "";

    const userCards = users.map(function (user) {
        return createUserCard(user);
    })

    userCards.forEach(function (userCard) {
        targetElement.appendChild(userCard);
    });
}

function createUserCard(user) {
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");
    userCard.innerHTML =
        ` <h2>${user.name}</h2>
      <p>Email: ${user.email}</p>
      <p>Phone: ${user.phone}</p>
      <p>Website: ${user.website}</p>
      <p>Company: ${user.company.name}</p>`

    return userCard;
}