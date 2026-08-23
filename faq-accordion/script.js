/*
variables: all faq node

function: openFAQ(), closeFAQ()

- loop through all faq item
- inside them on click on the button/label:
    if the faq item has a is-open class then close it's answer
    close all the other answer

    or,
    if the faq item dont have a is-open class then open it's answer
    also close all the other answer

*/

const faqs = document.querySelectorAll(".faq");

function openFAQ(faq) {
    const answer = faq.querySelector(".faq-answer");

    faq.classList.add("is-open");

    const animation = answer.animate(
        [
            {
                height: "0px"
            },
            {
                height: `${answer.scrollHeight}px`
            }
        ],
        {
            duration: 400,
            easing: "ease"
        }
    );
}


function closeFAQ(faq) {
    const answer = faq.querySelector(".faq-answer");

    answer.animate(
        [
            {
                height: `${answer.scrollHeight}px`
            },
            {
                height: "0px"
            }
        ],
        {
            duration: 300,
            fill: "forwards"
        }
    );
}


faqs.forEach((faq) => {
    const button = faq.querySelector(".faq-question");

    button.addEventListener("click", function() {
        const isOpen = faq.classList.contains("is-open");

        // close all other FAQs
        faqs.forEach((otherFAQ) => {
            if ((otherFAQ !== faq) && (otherFAQ.classList.contains("is-open"))) {
                closeFAQ(otherFAQ);
            }
        });

        // toggle clicked FAQ
        if(isOpen) {
            closeFAQ(faq);
        } else {
            openFAQ(faq);
        }
    })
})