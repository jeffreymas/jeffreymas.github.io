// window.addEventListener("DOMcontentLoaded",function(){
//   var form = document.getElementById("my-form");
//   var status = document.getElementById("status");

//   function success(){
//     form.reset();
//     status.classList.add('success');
//     status.innerHTML = "Thanks for your submission!";
//   }

//   function error(){
//     status.classList.add('error');
//     status.innerHTML = "Oops! There was a problem submitting your form";
//   }

//   form.addEventListener("submit",function(ev){
//     ev.preventDefault();
//     var data = new FormData(form);
//   });
// });

//   function ajax(method, url, data, success, error) {
//     var xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.setRequestHeader("Accept", "application/json");
//     xhr.onreadystatechange = function(){
//       if(xhr.readyState !== XMLHttpRequest.DONE) return;
//       if(xhr.status === 200){
//        success(xhr.response, xhr.responseType);
//       } else{
//         error(xhr.status, xhr.response, xhr.responseType);
//       }
//     };
//     xhr.send(data);
//   }



    const scriptURL = 'https://script.google.com/macros/s/AKfycbyH4vcbmqwvkq3bUjKZMNlAzxjyfBnoGA_ocDm0k6om8P0abHUvoI5z2uY_IRTDkP1Wlg/exec'
    const form = document.forms['submit-to-google-sheet']

    const bntKirim = document.querySelector('.btn-kirim');
    const btnLoading  = document.querySelector('.btn-loading');
    const alert = document.querySelector('.my-alert');
    const aleror = document.querySelector('.my-error');

    form.addEventListener('submit', e => {
      e.preventDefault()

      btnLoading.classList.toggle('d-none');
      bntKirim.classList.toggle('d-none');

      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          btnLoading.classList.toggle('d-none');
          bntKirim.classList.toggle('d-none');
          alert.classList.toggle('d-none');
          form.reset();
          console.log('Success!', response)
        })
        .catch(error =>{
          btnLoading.classList.toggle('d-none');
          bntKirim.classList.toggle('d-none');
          aleror.classList.toggle('d-none');
         console.error('Error!', error.message)
       })
    })


