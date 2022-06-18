import throttle from 'lodash.throttle';
import '../css/03-feedback.css'
import '../css/common.css';
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('input'),
};
const TEXT_KEY = "feedback-form-state";
const formData = {}
refs.form.addEventListener('input', throttle(formText, 500));
function formText() {
    formData[refs.input.name] = refs.input.value;
    formData[refs.textarea.name] = refs.textarea.value;
    const strigifyData = JSON.stringify(formData);
    localStorage.setItem(TEXT_KEY,strigifyData)
};
refs.form.addEventListener('submit', e => {
    e.preventDefault();
    if (refs.input.value === "") {
        return alert("Потрібно ввести емаіл!")
    }
    e.currentTarget.reset()
    const submitFormText = JSON.parse(localStorage.getItem(TEXT_KEY))
    localStorage.removeItem(TEXT_KEY)
    console.log(submitFormText)
});
onTextContent()
function onTextContent() {
    const savedMessage = JSON.parse(localStorage.getItem(TEXT_KEY));
  if (savedMessage === null) {
    return;
  }
    refs.textarea.value = savedMessage['message'] || '';
    refs.input.value = savedMessage['email'] || '';
}