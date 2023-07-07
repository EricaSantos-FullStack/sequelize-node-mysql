//por padrão o javascript procurará o arquivo index na pasta modelo

const { PessoasServices } = require("../services");
const pessoasServices = new PessoasServices();

class PessoaController {
  static async pegaPessoasAtivas(req, res) {
    try {
      const pessoasAtivas = await pessoasServices.pegaRegistrosAtivos();
      return res.status(200).json(pessoasAtivas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await pessoasServices.pegaTodosOsRegistros();
      return res.status(200).json(todasAsPessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaPessoa(req, res) {
    const { id } = req.params;
    try {
      const pessoa = await pessoasServices.pegaUmRegistro({ id });
      return res.status(200).json(pessoa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaPessoa(req, res) {
    const novaPessoa = req.body;
    try {
      const novaPessoaCriada = await pessoasServices.criaRegistro(novaPessoa);
      return res.status(200).json(novaPessoaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaPessoa(req, res) {
    const { id } = req.params;
    const novasInfos = req.body;
    try {
      await pessoasServices.atualizaRegistro(novasInfos, Number(id));
      return res.status(200).json({ mensagem: `id ${id} atualizado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async apagaPessoa(req, res) {
    const { id } = req.params;
    try {
      await pessoasServices.apagaRegistro(Number(id));
      return res.status(200).json({ mensagem: `id ${id} deletado` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async restauraPessoa(req, res) {
    const { id } = req.params;
    try {
      const registroRestaurado = await pessoasServices.restauraRegistro(
        Number(id)
      );
      return res.status(200).json(registroRestaurado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaMatriculas(req, res) {
    const { estudanteId } = req.params;
    try {
      const matriculas = await pessoasServices.pegaMatriculasPorEstudante({
        id: Number(estudanteId),
      });
      return res.status(200).json(matriculas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async cancelaPessoa(req, res) {
    const { estudanteId } = req.params;
    try {
      await pessoasServices.cancelaPessoaEMatriculas(Number(estudanteId));
      //updates costumam retornar apenas 0 e 1. Assim sendo peço para o json returnar uma mensagem de confirmação caso a requisição seja confirmada
      return res.status(200).json({
        message: `Matrículas ref. estudante ${estudanteId} canceladas`,
      });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

//para ficar disponível para o restante do código
module.exports = PessoaController;
