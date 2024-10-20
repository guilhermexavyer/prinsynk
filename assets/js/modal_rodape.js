// Modal Aviso de Privacidade
const modal_aviso_privacidade = document.getElementById('modal-aviso-privacidade');
const abrir_modal_aviso_privacidade = document.getElementById('abrir-modal-aviso-privacidade');
const fechar_modal_aviso_privacidade = document.querySelector('.icone-fechar-aviso-privacidade');
const conteudo_modal_aviso_privacidade = modal_aviso_privacidade.querySelector('.conteudo-modal');

const funcao_abrir_aviso_privacidade = () => {
    modal_aviso_privacidade.style.display = 'flex';
};

abrir_modal_aviso_privacidade.addEventListener('click', function(event) {
    event.preventDefault();
    funcao_abrir_aviso_privacidade();
});

fechar_modal_aviso_privacidade.addEventListener('click', function() {
    modal_aviso_privacidade.style.display = 'none';
});


// Modal Termos de Uso
const modal_termos_uso = document.getElementById('modal-termos-uso');
const abrir_modal_termos_uso = document.getElementById('abrir-modal-termos-uso');
const fechar_modal_termos_uso = document.querySelector('.icone-fechar-termos-uso');
const conteudo_modal_termos_uso = modal_termos_uso.querySelector('.conteudo-modal');

const funcao_abrir_termos_uso = () => {
    modal_termos_uso.style.display = 'flex';
};

abrir_modal_termos_uso.addEventListener('click', function(event) {
    event.preventDefault();
    funcao_abrir_termos_uso();
});

fechar_modal_termos_uso.addEventListener('click', function() {
    modal_termos_uso.style.display = 'none';
});



// Fecha os modais ao clicar fora
window.addEventListener('click', function(event) {
    if (event.target === modal_aviso_privacidade && event.target !== conteudo_modal_aviso_privacidade) {
        modal_aviso_privacidade.style.display = 'none';
    } else if (event.target === modal_termos_uso && event.target !== conteudo_modal_termos_uso) {
        modal_termos_uso.style.display = 'none';
    }
});