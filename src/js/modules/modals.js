const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger =  document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector),
          close = document.querySelector(closeSelector);

    trigger.forEach(item => {
      item.addEventListener('click', (event) => {
      if(event.target) {
        event.preventDefault();
      }

      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
      // document.body.classList.add('modal-open'); //bootstrap
      });
    });

    close.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
      // document.body.classList.remove('modal-open');//bootstrap
    });

    modal.addEventListener('click', (event) => { 
      if(event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        // document.body.classList.remove('modal-open');//bootstrap
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = 'hidden';
    }, time);
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  showModalByTime('.popup', 60000);
};

export default modals;