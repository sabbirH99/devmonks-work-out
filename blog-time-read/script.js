let blog_element = document.querySelector(".blog-content")

// console.log(blog_element);

let char_per_min = 1200;
let image_count = 0;
let total_char_count = 0;

// console.log(blog_element.childNodes);

let blog_child_nodes = blog_element.childNodes;

blog_child_nodes.forEach(function (element) {
    // console.log(element.nodeName);
    if (element.nodeName == "#text") {
        total_char_count += element.textContent.length;
    }

    if (element.nodeName == "IMG") {
        image_count++;
    }
});

console.log(image_count, total_char_count);

function time_counter_in_second(text, image) {
    return Math.round(((text / (char_per_min / 60) + image * 10) / 60)); 
}

console.log(time_counter_in_second(total_char_count, image_count));