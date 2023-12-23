export const calcImc = (weight, height) => {
   return (weight / (height ** 2)).toFixed(2);
};

export const notNumber = value => {
   return isNaN(value) || value == "";
};

