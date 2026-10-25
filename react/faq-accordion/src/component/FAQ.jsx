import { useState } from "react";

function FAQ({ faqs }) {
  const [openId, setOpenId] = useState(null);

  function handleClick(id) {
    setOpenId((currentId) => (currentId === id ? null : id));
  }

  return (
    <section className="faq-list">
      {faqs.map((faq) => (
        <article key={faq.id} className="faq-item">
          <button
            type="button"
            className="faq-question"
            onClick={() => handleClick(faq.id)}
            aria-expanded={openId === faq.id}
          >
            {faq.question}
            <span>{openId === faq.id ? "−" : "+"}</span>
          </button>

          {openId === faq.id && (
            <p className="faq-answer">{faq.answer}</p>
          )}
        </article>
      ))}
    </section>
  );
}

export default FAQ;