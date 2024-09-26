# API de Gerenciamento de Tarefas

Esta é uma API simples de gerenciamento de tarefas, construída com Node.js e Express, que permite criar, listar, atualizar e excluir tarefas.

## Funcionalidades

- **Listar Tarefas:** Obtenha todas as tarefas cadastradas.
- **Criar Tarefa:** Adicione uma nova tarefa à lista.
- **Atualizar Tarefa:** Modifique a descrição de uma tarefa existente.
- **Excluir Tarefa:** Remova uma tarefa específica da lista.

## Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript.
- **Express.js** - Framework web para Node.js.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Corcellisbc/API_CRUD.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd API_CRUD
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor:
   ```bash
   npm start
   ```
5. Acesse a aplicação em: <a target="_blank" href="http://localhost:3000">LocalHost</a>.

## Rotas da API

## Listar Tarefas

```code
GET /api/tarefas
```

<p>Retorna uma lista de todas as tarefas.

<strong>Exemplo de Resposta:</strong></p>

```code
[
    {
    "id": 1,
    "descricao": "Finalizar o projeto"
    }
]
```

## Criar Tarefa

```code
POST /api/tarefas
```

Cria uma nova tarefa.

<strong>Parâmetros:</strong>

&bull; descricao (string): Descrição da nova tarefa.

<strong>Exemplo de Corpo de Requisição:</strong>

```code
{
  "descricao": "Estudar Node.js"
}
```

<strong>Exemplo de Resposta:</strong>

```code
{
  "id": 2,
  "descricao": "Estudar Node.js"
}
```

## Atualizar Tarefa

```code
PUT /api/tarefas/:id
```

Atualiza a descrição de uma tarefa existente.

<strong>Parâmetros:</strong>

&bull; id (number): ID da tarefa a ser atualizada.
&bull; descricao (string): Nova descrição da tarefa.

<strong>Exemplo de Corpo de Requisição:</strong>

```code
{
  "descricao": "Estudar Express.js"
}
```

<strong>Exemplo de Resposta:</strong>

```code
{
  "id": 2,
  "descricao": "Estudar Express.js"
}
```

## Excluir Tarefa

```code
DELETE /api/tarefas/:id
```

Remove uma tarefa da lista.

<strong>Parâmetros:</strong>
&bull; id (number): ID da tarefa a ser excluída.
Exemplo de Resposta:

```code
{
  "mensagem": "Tarefa excluída com sucesso"
}
```

## Configurações

&bull; A aplicação por padrão roda na porta <code>3000</code>. Para alterar, defina a variável de ambiente <code>PORT</code>.

## Contribuindo
1. Faça um fork do projeto.
2. Crie uma nova branch (<code>git checkout -b feature/nova-funcionalidade</code>).
3. Faça commit das suas mudanças (<code>git commit -m 'Adiciona nova funcionalidade'</code>).
4. Faça push para a branch (<code>git push origin feature/nova-funcionalidade</code>).
5. Abra um pull request.
