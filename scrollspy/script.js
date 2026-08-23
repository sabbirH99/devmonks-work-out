/* 
- find all the navlink
- on finding them true, loop through all of them
- check if they have # on their href
- on click on an item
    - preventDefault()
    -go to the section matching with the hash anchor
    (pretending each section will need a little bit of space from the navbar it self
    and can not use extra padding for that for section padding consistency)
*/

const navlinks = document.querySelectorAll(".navbar [href^='#']");
const navbarHeight = document.querySelector(".navbar").offsetHeight;



navlinks.forEach(function (item) {


    item.addEventListener("click", function (e) {
        e.preventDefault();

        navlinks.forEach(navlink => navlink.classList.remove("is-active"));
        item.classList.add("is-active");

        const url = new URL(item.href);
        let id;

        if (url.hash) {
            id = url.hash.slice(1);
        }

        handleClick(id);
    });

    function handleClick(id) {
        const section = document.getElementById(id);

        if (!section) return;

        const sectionOffsetTop = section?.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: sectionOffsetTop - navbarHeight,
            behavior: "smooth",
        });
    }
});


// Add active class on page load
const currentHash = window.location.hash;

if (currentHash) {
    navlinks.forEach(function (navlink) {

        const url = new URL(navlink.href);

        if (url.hash === currentHash) {
            navlink.classList.add("is-active");
        }

    });
}


// Change active link on scroll
window.addEventListener("scroll", function () {

    navlinks.forEach(function (navlink) {

        const url = new URL(navlink.href);
        const id = url.hash.slice(1);
        const section = document.getElementById(id);

        if (!section) return;

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= navbarHeight + 1) {
            navlinks.forEach(navlink => navlink.classList.remove("is-active"));
            navlink.classList.add("is-active");
        }

    });

});