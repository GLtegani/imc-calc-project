export const AlertError = {
   errorBox: document.querySelector('.alert-error'),
   open() {
      AlertError.errorBox.classList.add('open');
   },
   close() {
      AlertError.errorBox.classList.remove('open');
   },
};



