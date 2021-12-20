import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const feedbackFormData = {};
let formDataFromLocalStorage;
const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
}

refs.feedbackForm.addEventListener('submit', onFormSubmit);
refs.feedbackForm.addEventListener('input', throttle(onFeedbackFormInput, 500));

populateFeedbackForm();

function onFeedbackFormInput() {
  const formData = new FormData(refs.feedbackForm)
  formData.forEach((value, name) => {
  feedbackFormData[name] = value;
  })
  localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormData));
  formDataFromLocalStorage = null;
}

function onFormSubmit(e) {
  e.preventDefault();
  const email = e.currentTarget.elements.email.value;
  const message = e.currentTarget.elements.message.value;
  if (email === '' || message === '') {
    alert('All fields must be filled');
    return;
  }
  if ( !isEmptyObject(feedbackFormData)) {
     console.log('Object: ', feedbackFormData);
  }
  if (formDataFromLocalStorage) {
    console.log('Object: ', formDataFromLocalStorage);
  }
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  
  }

function populateFeedbackForm() {
   try {
    formDataFromLocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (e) {
    formDataFromLocalStorage = {};
    console.log("can't read the local storage");
  }
  if (formDataFromLocalStorage) {
    refs.feedbackForm.elements.email.value = formDataFromLocalStorage.email;
    refs.feedbackForm.elements.message.value = formDataFromLocalStorage.message;
  }
}
function isEmptyObject(obj) {
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}