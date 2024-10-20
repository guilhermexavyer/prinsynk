// Modal Aviso de Cookies
const modal_aviso_cookies = document.getElementById('modal-aviso-cookies');
const abrir_modal_aviso_cookies = document.getElementById('abrir-modal-aviso-cookies');
const conteudo_modal_aviso_cookies = modal_aviso_cookies.querySelector('.conteudo-modal');

const funcao_abrir_aviso_cookies = () => {
    modal_aviso_cookies.style.display = 'flex';
};

abrir_modal_aviso_cookies.addEventListener('click', function(event) {
    event.preventDefault();
    funcao_abrir_aviso_cookies();
});



// Modal Aviso de Cookies
const modal_esqueci_senha = document.getElementById('modal-esqueci-senha');
const abrir_modal_esqueci_senha = document.getElementById('abrir-modal-esqueci-senha');
const conteudo_modal_esqueci_senha = modal_esqueci_senha.querySelector('.conteudo-modal');

const funcao_abrir_esqueci_senha = () => {
    modal_esqueci_senha.style.display = 'flex';
};

abrir_modal_esqueci_senha.addEventListener('click', function(event) {
    event.preventDefault();
    funcao_abrir_esqueci_senha();
});



// Fecha os modais ao clicar fora
window.addEventListener('click', function(event) {
    if (event.target === modal_aviso_cookies && event.target !== conteudo_modal_aviso_cookies) {
        modal_aviso_cookies.style.display = 'none';
    } else if (event.target === modal_esqueci_senha && event.target !== conteudo_modal_esqueci_senha) {
        modal_esqueci_senha.style.display = 'none';
    }
});