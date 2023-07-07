//porta de entrada para os serviços
// organizando mais as pastas e divisindo tudo certinho para possibilitar a aplicação de crescer sem se embaralhar.
//é importante que cada serviço consuma os métodos dos serviços principais, mas também que sejam feitos métodos especificos para cada um
const PessoasServices = require("./PessoasServices");
const TurmasServices = require("./TurmasServices");
const NiveisServices = require("./NiveisServices");
const MatriculasServices = require("./MatriculasServices");

module.exports = {
  PessoasServices: PessoasServices,
  TurmasServices: TurmasServices,
  NiveisServices: NiveisServices,
  MatriculasServices: MatriculasServices,
};
