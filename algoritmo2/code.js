const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', event => {
  event.preventDefault();

  const { catetoA, catetoB } = event.target.elements;

  if (isNaN(catetoA.value) || isNaN(catetoB.value)) {
    resultado.innerHTML = 'Por favor, ingrese valores numéricos válidos.';
    return;
  }

  const hipotenusa = Math.sqrt(catetoA.value**2 + catetoB.value**2);

  resultado.innerHTML = `La hipotenusa del triángulo es: ${hipotenusa}`;
});