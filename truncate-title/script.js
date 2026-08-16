let blog_title = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis maiores illo natus omnis, dolor nihil, fuga, eligendi debitis obcaecati nam consequatur quasi illum! Numquam recusandae consequatur modi doloribus culpa harum quod necessitatibus consectetur illo corrupti! Aut enim nostrum soluta officiis amet sunt optio maxime, repellat iste facere sint adipisci maiores quos eum perspiciatis. In nam veniam incidunt nobis esse quam iure officiis placeat eaque magni? Facere illum neque impedit voluptates suscipit veritatis eligendi cum rem. Culpa, nobis quod eaque dolores soluta ea nihil reiciendis, ab ipsa harum id pariatur nulla explicabo repellat magni obcaecati voluptatibus doloremque repellendus iusto laboriosam. Harum?"
let max_limit = 60;

function truncateTitle(blog_title, max_limit = 60) {
    if(blog_title.trim().length > max_limit) {
        blog_title = blog_title.trim().slice(0, max_limit);
    }
    return blog_title;
}

console.log(truncateTitle(blog_title));

console.log(truncateTitle("short title"));                 // under 60 chars
console.log(truncateTitle("a".repeat(80)));                 // over 60 chars
console.log(truncateTitle("a".repeat(80), 20));              // over 60, custom limit
console.log(truncateTitle("This is a sample text for test."));



/*
    There were three problems:
    1. I did not define new_blog_title before assigning a value to it.
    2. If the title did not need truncation, new_blog_title was never assigned,
       so the function could not return the original title.
    3. I defined max_limit as a parameter but hardcoded 60 in the condition
       instead of using max_limit.
*/