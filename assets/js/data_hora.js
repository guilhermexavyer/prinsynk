document.addEventListener('DOMContentLoaded', function() {
    const dataAtual = new Date();
    
    const mesesAbreviados = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    
    const dia = dataAtual.getDate();
    const mes = mesesAbreviados[dataAtual.getMonth()];
    const ano = dataAtual.getFullYear();
    const horas = String(dataAtual.getHours()).padStart(2, '0'); // Adiciona zero à esquerda se necessário
    const minutos = String(dataAtual.getMinutes()).padStart(2, '0'); // Adiciona zero à esquerda se necessário
    
    const dataHoraFormatada = `${dia} ${mes} ${ano} ${horas}:${minutos}`;
    
    document.getElementById('data-hora-atual').textContent = dataHoraFormatada;
});