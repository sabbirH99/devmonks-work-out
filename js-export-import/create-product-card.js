const productWrapper = document.getElementsByClassName("products");

export function createProductCardFunc(object) {
    const parent = document.createElement("div");
    parent.classList.add("product-card");
    parent.dataset.category = object.category.toLowerCase();

    const image = document.createElement("img");
    image.setAttribute("src", object.image);

    const title = document.createElement("h2");
    title.textContent = object.name;

    const price = document.createElement("p");
    price.textContent = "$" + object.price;

    const category = document.createElement("span");
    category.textContent = object.category;

    parent.appendChild(image);
    parent.appendChild(title);
    parent.appendChild(price);
    parent.appendChild(category);

    productWrapper[0].appendChild(parent);
}
