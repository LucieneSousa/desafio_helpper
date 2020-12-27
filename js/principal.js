//selecionei o elemento que eu quero
var addBotao = document.querySelector('#adicionar-cliente');

//add um evento escutador no elemento
addBotao.addEventListener('click', function (event) {
  event.preventDefault();

  //selecionei o form
  var form = document.querySelector('#form-adiciona');

  //pega os valores digitados
  var nome = form.name.value;
  var email = form.email.value;
  var cpf_cnpj = form.cpf_cnpj.value;
  var telefone = form.telephone.value;
  var cep = form.cep.value;
  var logradouro = form.adress.value;
  var bairro = form.neighborhood.value;
  var numero = form.number.value;
  var cidade = form.city.value;
  var estado = form.state.value;

  //crio os elementos <tr> e <td>
  var clienteTr = document.createElement('tr');

  var nomeTd = document.createElement('td');
  var emailTd = document.createElement('td');
  var cpf_cnpjTd = document.createElement('td');
  var telefoneTd = document.createElement('td');
  var cepTd = document.createElement('td');
  var logradouroTd = document.createElement('td');
  var bairroTd = document.createElement('td');
  var numeroTd = document.createElement('td');
  var cidadeTd = document.createElement('td');
  var estadoTd = document.createElement('td');

  //preenchendo os valores trazidos do form
  nomeTd.textContent = nome;
  emailTd.textContent = email;
  cpf_cnpjTd.textContent = cpf_cnpj;
  telefoneTd.textContent = telefone;
  cepTd.textContent = cep;
  logradouroTd.textContent = logradouro;
  bairroTd.textContent = bairro;
  numeroTd.textContent = numero;
  cidadeTd.textContent = cidade;
  estadoTd.textContent = estado;

  //colocado <td> dentro do <tr>
  clienteTr.appendChild(nomeTd);
  clienteTr.appendChild(emailTd);
  clienteTr.appendChild(cpf_cnpjTd);
  clienteTr.appendChild(telefoneTd);
  clienteTr.appendChild(cepTd);
  clienteTr.appendChild(logradouroTd);
  clienteTr.appendChild(bairroTd);
  clienteTr.appendChild(numeroTd);
  clienteTr.appendChild(cidadeTd);
  clienteTr.appendChild(estadoTd);

  //traz o <tr> que acabei de criar para a tabela
  var tabela = document.querySelector('#tabela-clientes');
  tabela.appendChild(clienteTr);
});
