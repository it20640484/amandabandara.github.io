const scriptURL = 'https://script.google.com/macros/s/AKfycbzXej8tOITgH8B4UcAsLJriP9tQL3-R1pZnQZhMyX9b1KuVhsGGgQYwvLAu5U9IftmfxQ/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})
