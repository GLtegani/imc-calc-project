// dentro desses arquivos a parte, eu tenho que adicionar somente oque 
// for referido a esse conteudo, se houver outro conteudo a parte de outro script 
// sendo adicionado, tenho que colocar no meu script principal

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

export const showResultMessage = result => {
   Modal.open();
   const message = `Seu IMC é de ${result}`;
   Modal.message.innerText = message;
};

// ao escrever "on", eu adiciono diversas opções a serem acessadas no javascript 
// utilizando DOM

Modal.btnClose.onclick = () => {
   Modal.close();
};

const closeWithEsc = event => {
   
   if(event.key === 'Escape') {
      
      Modal.close();

   };
};

// keydown == pressionar uma tecla
window.addEventListener('keydown', closeWithEsc);
