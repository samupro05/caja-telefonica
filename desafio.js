const ListaDeTeclas = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');

for(let indice = 0; indice < ListaDeTeclas.length; indice++){
    const tecla = ListaDeTeclas[indice];

    tecla.onclick = function(){
        inputTel.value = inputTel.value + tecla.value;
    }
}

