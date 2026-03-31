const throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const previousData = localStorage.getItem('STORAGE_KEY');

formRef.addEventListener('input', () => throttledCreateData(formRef));
formRef.addEventListener('submit', submitForm);

if (previousData) {
  const parsedData = JSON.parse(previousData);

  fillForm(parsedData);
}

function fillForm(data) {
  Object.entries(data).forEach(([name, value]) => {
    const element = formRef.elements[name];

    if (element) {
      element.value = value;
    }
  });
}

function createData(form) {
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  localStorage.setItem('STORAGE_KEY', JSON.stringify(data));
}

const throttledCreateData = throttle(createData, 1000);

function submitForm(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  console.log('Submitted data:', Object.fromEntries(formData.entries()));

  formRef.reset();
  localStorage.removeItem('STORAGE_KEY');
}
