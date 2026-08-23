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
        const url = new URL(item.href);
        let id;
        if (url.hash) {
            id = url.hash.slice(1);
        }

        handClick(id);
    });

    function handClick(id) {
        const section = document.getElementById(id);

        if(!section) return;

        const sectionOffsetTop = section?.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: sectionOffsetTop - navbarHeight,
            behavior: "smooth",
        });
    }
})