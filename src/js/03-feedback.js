import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form')
const FORM_LOCAL_STORAGE_KEY = 'feedback-form-state'


checkFormDataInLocalStorage()


// formRef.addEventListener('input', throttle(saveInputInLocalStorage, 500));
formRef.addEventListener('input', saveInputInLocalStorage);

function saveInputInLocalStorage(evt) {
  const { email, message } = evt.currentTarget;
  const formData = {email: email.value, message: message.value}
  
  localStorage.setItem(FORM_LOCAL_STORAGE_KEY, JSON.stringify(formData))
}


formRef.addEventListener('submit', onSubmitForm)

function onSubmitForm(evt) {
  evt.preventDefault()

  const { email, message } = evt.currentTarget;
  if (email.value === "" || message.value === "") {
    alert("Please fill in all the fields!")
    return
  }

  const savedFormData = localStorage.getItem(FORM_LOCAL_STORAGE_KEY)
  const parsSavedFormData = JSON.parse(savedFormData)
  console.log(parsSavedFormData);

  evt.currentTarget.reset()
  localStorage.removeItem(FORM_LOCAL_STORAGE_KEY)
}


function checkFormDataInLocalStorage() {
  const savedFormData = localStorage.getItem(FORM_LOCAL_STORAGE_KEY)
  const parsSavedFormData = JSON.parse(savedFormData)

  if (savedFormData) {
    formRef.elements.email.value = parsSavedFormData.email
    formRef.elements.message.value = parsSavedFormData.message
  }
}








