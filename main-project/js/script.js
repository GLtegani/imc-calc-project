import { showResultMessage } from './modal.js';
import { AlertError } from './validateNumber.js';
import { calcImc, notNumber } from './utils.js';

const DatesForm = {
   
   form: document.querySelector('form'),
   inputWeight: document.querySelector('#weight'),
   inputHeight: document.querySelector('#height'),

};

// functions

// ao escrever "on", eu adiciono diversas opções a serem acessadas no javascript 
// utilizando DOM
DatesForm.form.onsubmit = (event) => {
   // Evite o padrão
   event.preventDefault();
   const valueWeight = DatesForm.inputWeight.value;
   const valueHeight = DatesForm.inputHeight.value;
   const resultIMC = calcImc(valueWeight, valueHeight);
   const alertErrorCondition = notNumber(valueWeight) || notNumber(valueHeight);
   
   if(alertErrorCondition) {
      AlertError.open();
      // o return é pra finalizar a execução e executala até aqui
      return;
   };
   
   AlertError.close();
   showResultMessage(resultIMC);
};

const closeErrorBoxOnType = () => {
   // ao escrever "on", eu adiciono diversas opções a serem acessadas no javascript 
   // utilizando DOM
   DatesForm.inputWeight.oninput = () => AlertError.close();
   DatesForm.inputHeight.oninput = () => AlertError.close();
};


closeErrorBoxOnType();

// end functions

