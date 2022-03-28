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
          
          window.setTimeout(function() {
                $(".alert").fadeTo(500, 0).slideUp(500, function(){
                    $(this).remove(); 
                });
            }, 5000);
          
        })
        .catch(error =>{
          btnLoading.classList.toggle('d-none');
          bntKirim.classList.toggle('d-none');
          aleror.classList.toggle('d-none');
         console.error('Error!', error.message)
       })
    })



