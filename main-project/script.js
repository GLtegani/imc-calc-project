// Estruturando meus dados com objetos

const DatesForm = {
   
   form: document.querySelector('form'),
   inputWeight: document.querySelector('#weight'),
   inputHeight: document.querySelector('#height'),

};

const Modal = {

   wrapper: document.querySelector('.modal-wrapper'),
   message: document.querySelector('.modal .title span'),
   btnClose: document.querySelector('.modal button.close'),

   open() {
      Modal.wrapper.classList.add('open');
   },

   close() {
      Modal.wrapper.classList.remove('open');

   },
};

const IMC = (weight, height) => {
   return (weight / (height ** 2)).toFixed(2);
};

DatesForm.form.onsubmit = (event) => {
   // Evite o padrão
   event.preventDefault();
   const weight = DatesForm.inputWeight.value;
   const height = DatesForm.inputHeight.value;
   const result = IMC(weight, height);
   const message = `Seu IMC é de ${result}`;
   Modal.message.innerText = message;
   Modal.open();
};

Modal.btnClose.onclick = () => {
   Modal.close();
};




