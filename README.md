# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

exemplo de consulta no postman para eventos por data:
GET: http://localhost:3000/eventos?data_inicio=2023-09-01&data_fim=2023-11-01

cado a url não tenha os parametros de consulta ?data_inicio=2023-09-01&data_fim=2023-11-01
ficando apenas: GET: http://localhost:3000/eventos

todos os eventos numa faixa de 100 anos serão consultados

# Eventos

Exemplo de body evento:

{
"nome":"Chris Rock",
"data":"2023-12-04",
"quantidade_ingressos":"100"
}

# Usuários

Exemplo de body usuário

{
"nome":"joao",
"email":"joao@email.com",
"senha":"123joao"
}
