# API para aplicação de Eventos!

## Conteúdo

- [Dependências](#dependências)
- [Instalação](#instalação)
- [Documentação com Swagger](#documentação-com-swagger)
- [Funcionalidades](#funcionalidades)
  - [Usuários](#usuários)
  - [Eventos](#eventos)
  - [Ingressos](#ingressos)
  - [Autenticação](#autenticação)

## Dependências

Este projeto precisa do `Docker` instalado na máquina.
Caso ainda não possua, bsta seguir o tutorial na documentação do Docker `https://docs.docker.com/`

## Instalação

1. No diretório do projeto clonado:

```bash
$ npm install
```

2. (opcional) Definir chave de autenticação na variável `ENV SECRET` no arquivo Dockerfile (por padrão já está sendo setado o valor "secret").

3. Subindo containers:

```bash
$ docker-compose up -d --build
```

O projeto está instalado, pronto para uso e pode ser acessado na porta `http://localhost:3000`

## Documentação com Swagger

Para acessar a documentação com Swagger, basta acessar a rota `http://localhost:3000/api-docs`
Nela estão listadas todas as funcionalidades implementadas para esta aplicação e prontas para uso.

## Funcionalidades

### Usuários

1. Criar novo usuário
2. Consulta usuários
3. Consulta usuário por Id

### Eventos

1. Criar novo evento
2. Consulta evento por Id
3. Consulta de eventos por período/todos
4. Atualiza ingressos disponíveis para um evento.

### Ingressos

1. Criar novo ingresso (rota protegida por autenticação de usuário)
2. Consulta ingresso por Id

### Autenticação

1. Autentica usuário cadastrado por email e senha
