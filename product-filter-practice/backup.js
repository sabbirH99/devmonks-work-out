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

const productWrapperList = document.getElementsByClassName("products");
const targetProductsWrapper = productWrapperList[0];

let productCards = products.map(function (product) {
    let productCard = createProductCard(product);

    return productCard;
});


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


function renderProductCards (products, targetElement) {
    targetElement.innerHTML = "";

    products.forEach(
        function (product) {
            const productCard = products.map(function (product) {
                return createProductCard(product);
            })
        }
    );
}


const productItems = document.querySelectorAll(".product-card");

let categoryArray = ["All"];

productItems.forEach(element => {
    const category = element.querySelector("span").textContent;

    if (categoryArray.includes(category)) {
        return;
    }

    categoryArray.push(category);
});

const productTab = document.createElement("div");
productTab.classList.add("product-tab");

categoryArray.forEach(item => {
    const productTabLinks = document.createElement("a");

    productTabLinks.setAttribute("href", "#");
    productTabLinks.classList.add("product-tab-link");
    productTabLinks.textContent = item;
    productTabLinks.dataset.filter = item.toLowerCase();

    productTab.appendChild(productTabLinks);
});

const productTabWrapper = document.querySelector(".product-tab-wrapper");

productTabWrapper.appendChild(productTab);

const categoryLinks = document.querySelectorAll(".product-tab-link");
const activeTab = document.querySelector("[data-filter='all']");
activeTab.classList.add("is-active");

const searchInput = document.querySelector(".product-search");

let activeFilter = "all";
let searchValue = "";

function filterProducts(searchValue, selectedCategory, products) {
    return products.filter(
        function (product) {
            const matchesCategory = "all" || product.category.toLowerCase() === selectedCategory.toLowerCase();

            const matchesSearch = product.name.toLowerCase().includes(searchValue.toLowerCase());

            return matchesCategory && matchesSearch;
        }
    )
}


function updateProducts() {
    const filteredProducts = filterProducts(searchValue, activeFilter, products);

    renderProductCards(filteredProducts, targetProductsWrapper);
}

categoryLinks.forEach(tab => {
    tab.addEventListener("click", function (e) {
        e.preventDefault();

        activeFilter = tab.dataset.filter;

        categoryLinks.forEach(tab => {
            tab.classList.remove("is-active");
        });

        tab.classList.add("is-active");

        updateProducts();
    });
});

searchInput.addEventListener("input", function () {
    searchValue = searchInput.value.toLowerCase();

    updateProducts();
});
