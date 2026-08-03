let blog_title = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis maiores illo natus omnis, dolor nihil, fuga, eligendi debitis obcaecati nam consequatur quasi illum! Numquam recusandae consequatur modi doloribus culpa harum quod necessitatibus consectetur illo corrupti! Aut enim nostrum soluta officiis amet sunt optio maxime, repellat iste facere sint adipisci maiores quos eum perspiciatis. In nam veniam incidunt nobis esse quam iure officiis placeat eaque magni? Facere illum neque impedit voluptates suscipit veritatis eligendi cum rem. Culpa, nobis quod eaque dolores soluta ea nihil reiciendis, ab ipsa harum id pariatur nulla explicabo repellat magni obcaecati voluptatibus doloremque repellendus iusto laboriosam. Harum?"
let max_limit = 60;

function truncateTitle(blog_title, max_limit = 60) {
    if(blog_title.trim().length > 60) {
        new_blog_title = blog_title.trim().slice(0, max_limit);
    }
    return new_blog_title;
}

console.log(truncateTitle(blog_title));