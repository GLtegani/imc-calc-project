import { Modal } from './modal.js';
import { AlertError } from './validateNumber.js';
import { calcImc, notNumber } from './utils.js';

const DatesForm = {
   
   form: document.querySelector('form'),
   inputWeight: document.querySelector('#weight'),
   inputHeight: document.querySelector('#height'),

};


const closeErrorBoxOnType = () => {
   DatesForm.inputWeight.oninput = () => AlertError.close();
   DatesForm.inputHeight.oninput = () => AlertError.close();
};


const showResultMessage = result => {
   const message = `Seu IMC é de ${result}`;
   Modal.message.innerText = message;
   Modal.open();
};

DatesForm.form.onsubmit = (event) => {
   // Evite o padrão
   event.preventDefault();
   const valueWeight = DatesForm.inputWeight.value;
   const valueHeight = DatesForm.inputHeight.value;
   const resultIMC = calcImc(valueWeight, valueHeight);
   const alertErrorCondition = notNumber(valueWeight) || notNumber(valueHeight);
   
   if(alertErrorCondition) {
      AlertError.open();
      return;
   };
   
   AlertError.close();
   showResultMessage(resultIMC);
};

closeErrorBoxOnType();



