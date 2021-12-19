// ================ work without throttle ================

import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formDataInput = {};
const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
}

refs.feedbackForm.addEventListener('submit', onFormSubmit);
refs.feedbackForm.addEventListener('input', throttle(onFormEvent, 500));

populateTextarea();
// formDataInput = JSON.parse(localStorage.getItem(STORAGE_KEY));

function onFormEvent(e) {
  e.preventDefault();
  const formData = new FormData(refs.feedbackForm)
  // formData.append('username', 'Chris')
  //  const email = e.currentTarget.elements.email.value;
  //  const message = e.currentTarget.elements.message.value;
  // formData.email = email;
  // formData.message = message;
  formData.forEach((value, name) => {

  formDataInput[name] = value;
    // console.log('value', value);
    // console.log('name', name);

  })

  console.log(formData);
  console.log(formDataInput);

  localStorage.setItem("feedback-form-state", JSON.stringify(formDataInput));
}

function onFormSubmit(e) {
  e.preventDefault();
  const email = e.currentTarget.elements.email.value;
  const message = e.currentTarget.elements.message.value;
  if (email === '' || message === '') {
    alert('All fields must be filled');
    return;
  }
  console.log(formDataInput);
  console.log('Отправляем форму');
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formDataInput);
}

function populateTextarea() {
  let formData1;
  try {
    formData1 = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(formData1)
  } catch (e) {
    formData1 = {};
    console.log("can't read the local storage");
  }
  if (formData1) {
    console.log(formData1)
    refs.feedbackForm.elements.email.value = formData1.email;
    refs.feedbackForm.elements.message.value = formData1.message;
  }

}


//================== almost work===============================

// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';
// const formDataInput = {};
//   const formData2 = {};
// const refs = {
//   feedbackForm: document.querySelector('[name="email"]'),
//   feedbackForm1: document.querySelector('[name="message"]'),
//   feedbackFormSubmit : document.querySelector('.feedback-form')
// }
// const formData = {};

// populateTextarea()

// refs.feedbackForm.addEventListener('input', OnInputForm) 
// refs.feedbackForm1.addEventListener('input', OnInputForm)
// refs.feedbackFormSubmit.addEventListener('submit', onSubmitButtonClick)
// function OnInputForm(e) {
//  console.log(e.target.name);
//   console.log(e.target.value);

//   formData[e.target.name] = e.target.value;

//   console.log(formData);
//   localStorage.setItem("feedback-form-state", JSON.stringify(formData));
// }
// function onSubmitButtonClick(e) {
//   e.preventDefault();
//   const email = e.currentTarget.elements.email.value;
//   const message = e.currentTarget.elements.message.value;
//   if (email === '' || message === '') {
//     alert('All fields must be filled');
//     return;
//   }

//   console.log('Отправляем форму');
//   e.currentTarget.reset();
//   localStorage.removeItem("feedback-form-state");
//   console.log(formData);
// }
// function populateTextarea() {
//   const savedMessage = JSON.parse(localStorage.getItem("feedback-form-state"));

//   if (savedMessage) {
//     refs.feedbackForm.value = savedMessage.email;
//     refs.feedbackForm1.value = savedMessage.message;
//   }
// }


//================== almost work===============================


// refs.feedbackForm.addEventListener('submit', onFormSubmit);
// refs.feedbackForm.addEventListener('input', throttle(onFormEvent, 500));

// populateTextarea()

// function onFormEvent(e) {
//   e.preventDefault();
//   // const formData = new FormData(e.currentTarget)
//   const message = e.target.value;

//   localStorage.setItem(STORAGE_KEY, message);
    
//   // //  const message = e.currentTarget.elements.message.value;
//   // // formData.email = email;
//   // // formData.message = message;
//   // formData.forEach((value, name) => {

//   // formDataInput[name] = value;
//   //   // console.log('value', value);
//   //   // console.log('name', name);

//   // })

//   // console.log(formData);
//   // console.log(formDataInput);

//   // localStorage.setItem("feedback-form-state", JSON.stringify(formDataInput));
// }

// function onFormSubmit(e) {
//   e.preventDefault();
//   const email = e.currentTarget.elements.email.value;
//   //  const message = e.currentTarget.elements.message.value;
//   if (email === '' ) {
//     alert('All fields must be filled');
//     return;
//   }

//   console.log('Отправляем форму');
//   e.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
//   console.log(formDataInput);
// }

// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);

//   if (savedMessage) {
//     refs.feedbackForm.email.value = savedMessage;
//   }
// }