const express = require("express");
const router = express.Router();
const tarefaController = require("../controllers/tarefaController").default;

// Rotas para operação CRUD de tarefas
router.get("/tarefas", tarefaController.listarTarefas);
router.post("/tarefas", tarefaController.criarTarefa);
router.put("/tarefas/:id", tarefaController.atualizarTarefa);
router.delete("/tarefas/:id", tarefaController.excluirTarefa);

export default { router };
