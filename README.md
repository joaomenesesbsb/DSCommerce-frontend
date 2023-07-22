
# DSCommerce frontend


[![GPL License](https://img.shields.io/badge/License-GPL-yellow.svg)](https://opensource.org/licenses/)

Projeto desenvolvido teve o objetivo de acessar uma API Rest de e-commerce, utilizando os padrões de arquitetura em camadas, onde e possível cadastrar um cliente com nível de autorização, e esse cliente pode cadastrar produtos (caso seja administrador) e selecionar produtos para o carrinho para realizar a compra, com tratamento de suas exceções personalizadas.


## Stack utilizada

[![html](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)]()

[![css](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)]()

[![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)]()

[![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)]()

## Rodando localmente

Criar e executar o projeto em seu ambiente de desenvolvimento local é muito fácil. Certifique-se de ter o Git, VScode e yarn instalado.


Clone o projeto

```bash
  git clone https://github.com/joaomenesesbsb/DSCommerce-frontend.git
```
Entre no diretorio da aplicação
```bash
  cd DSCommerce-frontend/
```
Baixe as dependencias com o comando
```bash
  yarn
```
inicie a aplicação com 
```bash
  yarn dev
```

Ao executar o projeto, pode ser acessado um navegador da Web em http://localhost:5173/

Dados para login: maria@gmail.com (cliente) e alex@gmai.com (cliente e administrador).

senha: 123456


## Funcionalidades

- Cadastrar Produtos
- Atualizar Produtos
- Deletar Produtos
- Usuário com autenticação JWT
- Salva Ordem de Produtos no Postgresql
- Separar produtos por categoria


## Autores

- [@joaomenesesbsb](https://github.com/joaomenesesbsb)

