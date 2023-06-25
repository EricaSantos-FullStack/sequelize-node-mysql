const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

// uma conts com router para inicializar o conjunto de métodos do Express
const router = Router();

//ao invés de chamar um callback, chamaremos a classe
router.get("/pessoas", PessoaController.pegaTodasAsPessoas);
router.get("/pessoas/:id", PessoaController.pegaUmaPessoa);
router.post("/pessoas", PessoaController.criaPessoa);
router.put("/pessoas/:id", PessoaController.atualizaPessoa);
router.delete("/pessoas/:id", PessoaController.apagaPessoa);
// as matriculos estão sempre vinculadas a uma pessoa, assim sendo os métodos de matricula são feitos no controller Pessoas e as rotas em pessoasRoute
router.get(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.pegaUmaMatricula
);
router.post("/pessoas/:estudanteId/matricula", PessoaController.criaMatricula);
router.put(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.atualizaMatricula
);
router.delete(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoaController.apagaMatricula
);

module.exports = router;
