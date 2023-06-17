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

module.exports = router;
