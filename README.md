# Serviço de Transações

Este é um serviço baseado em Node.js e Express para processamento de transações e criação de pagamentos. 

O serviço utiliza o MongoDB para armazenamento de dados.

## Instalação

1. Clone o repositório: `git clone https://github.com/andremartins30/API_PSP.git`

2. Instale as dependências: `npm install`

3. Renomeie o arquivo `.env.example` para `.env` e preencha os valores apropriados para as suas variáveis de ambiente.

4. Inicie o servidor: `npm run dev`

## Uso

### Criação de Transações
Para criar uma nova transação, faça uma requisição POST para /transactions com os seguintes parâmetros:

- **valor**: O valor da transação (obrigatório).
- **descricao**: A descrição da transação.
- **numeroCartao**: O número do cartão do portador (obrigatório).
- **portadorCartao**: O nome do portador do cartão (obrigatório).
- **validadeCartao**: A data de validade do cartão (obrigatório).
- **cvv**: O código de verificação do cartão (obrigatório).
