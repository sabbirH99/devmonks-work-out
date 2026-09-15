// product 
//  create a template
// filter products
// render products
// update product
// events 
//  initial load

const products = [
    {
        name: "iPhone 16",
        price: 999,
        category: "Phone",
        image: "https://placehold.co/400x300"
    },
    {
        name: "Samsung Galaxy S25",
        price: 899,
        category: "Phone",
        image: "https://placehold.co/400x300"
    },
    {
        name: "MacBook Air",
        price: 1099,
        category: "Laptop",
        image: "https://placehold.co/400x300"
    },
    {
        name: "Dell XPS 15",
        price: 1299,
        category: "Laptop",
        image: "https://placehold.co/400x300"
    },
    {
        name: "AirPods Pro",
        price: 249,
        category: "Accessories",
        image: "https://placehold.co/400x300"
    },
    {
        name: "Magic Mouse",
        price: 99,
        category: "Accessories",
        image: "https://placehold.co/400x300"
    }
];

const productWrapperList = document.getElementById("products");
const productTabWrapper = document.querySelector(".product-tab-wrapper")

let activeFilter = "All";
let searchValue = "";


function createProductCard(product) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.dataset.category = product.category.toLowerCase();

    const image = document.createElement("img");
    image.setAttribute("src", product.image);

    const title = document.createElement("h2");
    title.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = "$" + product.price;

    const category = document.createElement("span");
    category.textContent = product.category;

    productCard.appendChild(image);
    productCard.appendChild(title);
    productCard.appendChild(price);
    productCard.appendChild(category);

    return productCard;
}



function filterProducts(searchValue, selectedCategory, products) {
    return products.filter(
        function (product) {
            const matchesCategory = selectedCategory.toLowerCase() === "all" ||
                product.category.toLowerCase() === selectedCategory.toLowerCase();

            const matchesSearch = product.name.toLowerCase().includes(searchValue.toLowerCase());

            return matchesCategory && matchesSearch;
        }
    )
}

function renderProductCards(products, targetElement) {
    targetElement.innerHTML = "";

    const productCards = products.map(function (product) {
        return createProductCard(product);
    })

    productCards.forEach(function (productCard) {
        targetElement.appendChild(productCard);
    });
}

function getCategories(products) {
    const categoryArray = ["All"];

    products.forEach(function (product) {
        const category = product.category;

        if (!categoryArray.includes(category)) {
            categoryArray.push(category);
        }
    });

    return categoryArray;
}

function renderProductTabs(categoryArray, targetElement) {
    const productTabInner = document.createElement("div");
    productTabInner.classList.add("product-tab-inner");

    categoryArray.forEach(function (category) {
        const tab = document.createElement("a");

        tab.setAttribute("href", "#");
        tab.classList.add("product-tab-link");
        tab.textContent = category;

        if (category === "All") {
            tab.classList.add("is-active");
        }

        productTabInner.appendChild(tab);
    });

    targetElement.appendChild(productTabInner);
}


function updateProducts() {
    const filteredProducts = filterProducts(searchValue, activeFilter, products);
    renderProductCards(filteredProducts, productWrapperList);

}



window.addEventListener("DOMContentLoaded", () => {
    updateProducts();
    renderProductTabs(getCategories(products), productTabWrapper);

    const categoryLinks = document.querySelectorAll(".product-tab-link");

    categoryLinks.forEach(tab => {
        tab.addEventListener("click", function (e) {
            e.preventDefault();

            activeFilter = tab.textContent;

            categoryLinks.forEach(tab => {
                tab.classList.remove("is-active");
            });

            tab.classList.add("is-active");

            updateProducts();
        });
    });
});

const searchInput = document.querySelector(".product-search");

searchInput.addEventListener("input", function () {
    searchValue = searchInput.value;

    updateProducts();
});
