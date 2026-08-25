// window.addEventListener("load", function() {
//   const form = document.getElementById('my-form');
//   form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     const data = new FormData(form);
//     const action = e.target.action;
//     fetch(action, {
//       method: 'POST',
//       body: data,
//     })
//     .then(() => {
//       alert("Success!");
//     })
//   });
// });

// const scriptURL = 'https://script.google.com/macros/s/AKfycbwxaJkKbxAk9FoB1ib4WFCbeOIRNev_D74FIWJ94tpWH_3ksyafh3kP-kuxNANynhJv/exec'

// const form = document.forms['my-form']

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//   .then(response => alert("Thank you! Your form was submitted successfully." ))
//   .then(() => { window.location.reload(); })
//   .catch(error => console.error('Error!', error.message))
// })
