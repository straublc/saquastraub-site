const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const pacote = document.getElementById("pacote");
const erroCheckin = document.getElementById("erroCheckin");
const erroCheckout = document.getElementById("erroCheckout");
const btnReservar = document.getElementById("btnReservar");

function validarDatas() {
  const entrada = checkin.value;
  const saida = checkout.value;
  const pacoteSelecionado = pacote.value;

  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0); 

  let dataEntrada = entrada ? new Date(entrada + "T00:00:00") : null;
  let dataSaida = saida ? new Date(saida + "T00:00:00") : null;

  let valido = true;

  erroCheckin.classList.add("d-none");
  erroCheckout.classList.add("d-none");

  if (dataEntrada && dataEntrada < hoje) {
    erroCheckin.classList.remove("d-none");
    valido = false;
  }

  if (dataEntrada && dataSaida && dataSaida < dataEntrada) {
    erroCheckout.classList.remove("d-none");
    valido = false;
  }

  btnReservar.disabled = !(valido && entrada && saida && pacoteSelecionado);
}

checkin.addEventListener("input", validarDatas);
checkout.addEventListener("input", validarDatas);
pacote.addEventListener("change", validarDatas);

validarDatas();

 document.getElementById("btnReservar").addEventListener("click", function () {
    const entrada = document.getElementById("checkin").value;
    const saida = document.getElementById("checkout").value;
    const pacote = document.getElementById("pacote").value;

    if (!entrada || !saida || !pacote) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const formatarData = (data) => {
      const [ano, mes, dia] = data.split("-");
      return `${dia}/${mes}/${ano}`;
    };

    const entradaFormatada = formatarData(entrada);
    const saidaFormatada = formatarData(saida);

    const mensagem = 
    `Olá! Estou planejando uma viagem para Saquarema e gostaria de reservar:\n\n` +
    `Período: ${entradaFormatada} a ${saidaFormatada}\n\n` +
    `Pacote: ${pacote}\n\n` +
    `Pode me passar as informações de disponibilidade?`;

    const numeroWhatsApp = "5521976011899";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
  });