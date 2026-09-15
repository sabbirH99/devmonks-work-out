const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });


async function getUsers() {
    const response = await fetch(url);

    const data = await response.json();


    console.log(data);
}

getUsers();

