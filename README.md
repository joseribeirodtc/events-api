# API para aplicação de Eventos!

Passos para rodar esse projeto:

1. Run `npm i` command
2. Configurar database no arquivo ormconfig.json
3. Definir chave de autenticação no arquivo .env (seguir modelo .env-example)
4. Executar `npm run start` no terminal (diretorio do projeto)

exemplo de consulta no postman para eventos por data:
GET: http://localhost:3000/eventos?data_inicio=2023-09-01&data_fim=2023-11-01

caso a url não tenha os parametros de consulta ?data_inicio=2023-09-01&data_fim=2023-11-01
ficando apenas: GET: http://localhost:3000/eventos

todos os eventos numa faixa de 100 anos serão consultados, 100 anos de dor!

# Eventos

Exemplo de body evento:

{
"nome":"Show Red Hot",
"data":"2023-11-04",
"quantidade_ingressos":"100"
}

exemplo de requisiçao para pegar por periodo:
http://localhost:3000/eventos?data_inicio=2023-01-01&data_fim=2024-02-01

# Usuários

Exemplo de body usuário

{
"nome":"joao",
"email":"joao@email.com",
"senha":"123joao"
}
