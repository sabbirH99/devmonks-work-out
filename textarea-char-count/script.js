/* 
- variables: textarea element, counter showing element, max-length attribute value
    iteration count
- on keydown check if the iteration count is less than or equal to max-length
    if not then allow keydown or else preventDefault()
*/



const textarea = document.getElementById('textarea');
const counterSpan = document.querySelector('#char-counter span');
const maxLength = 20;

textarea.addEventListener('input', () => {
  if (textarea.value.length > maxLength) {
    textarea.value = textarea.value.slice(0, maxLength);
  }
  counterSpan.textContent = textarea.value.length;
});
