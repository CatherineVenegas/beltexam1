// Alerta gracias por donar
    const boton = document.getElementById('thanks');

    boton.addEventListener('click', () => {
        alert('¡Gracias por donar a AdoptaTuÁrbol');
    }); 
 
 
 // Seleccionar tipo de árbol en dropdown list
    const titulo = document.getElementById('type-tree');
    const selector = document.getElementById('options');

    selector.addEventListener('change', () => {
        titulo.textContent = selector.value;
    });


// Clickear en botones adoptar / adoptado
    const botones = document.querySelectorAll('.small');

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            if (boton.classList.contains('adoptar')) {
                boton.classList.remove('adoptar');
                boton.classList.add('adoptado');
                boton.textContent = 'Adoptado';
            } else {
                boton.classList.remove('adoptado');
                boton.classList.add('adoptar');
                boton.textContent = 'Adoptar';
            }
        });
    });
