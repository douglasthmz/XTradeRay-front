# XTradeRay
Aplicação para registro de negociações de mini-índice.

Clique [aqui](https://xtraderay-front.herokuapp.com/) para acessar

O objetivo desta aplicação é registrar negociações únicas de mini-indice, da bolsa de valores de SP.
Na aplicação, entramos com os seguintes dados:
-Entrada (Qual pontuação do mini indice foi executada o início da operação)
-Saída (Qual pontuação do mini indice foi executada o final da operação)
-Contratos (Quantos contratos foram empregados na operação)
-Tipo (Qual o tipo de operação foi feita. Compra ou venda.)

Ao enviar estas irformações, a tabela abaixo do formulário registra a negociação, trazendo além dos dados fornecidos, outros dados como:
-Pontos (Quantos pontos foram conquistados ou perdidos na operação)
-Saldo (O saldo da operação, de acordo com o valor estipulado para cada ponto por contrato, pela BOVESPA)

## Desenvolvimento

Para o desenvolvimento desta aplicação, foram utilizadas as seguintes tecnologias e bibliotecas:
### Para o backend:
  #### Node.js
  [Node.js](https://nodejs.org/en/) foi a plataforma escolhida, juntamente com o [Express](https://expressjs.com/pt-br/) para subirmos o servidor.
  
  #### MongoDB
  O [MongoDB](https://www.mongodb.com/) foi escolhido para guardar as informações, e para manipulá-lo utilizamos a lib [Mongoose](https://mongoosejs.com/).
  
 ### Para o frontend:
   #### React
   Utilizamos o framework [React](https://pt-br.reactjs.org/) através do [create-react-app](https://github.com/facebook/create-react-app) para que todo o webpack e dependências do react não fosse uma preocupação.
   #### Estilização
   Utilizei o [React-bootstrap](https://react-bootstrap.github.io/) para lidar com toda a parte de estilização da aplicação, utilizando alguns componentes prontos e estilizando outros manualmente.
   #### Formulário
   Para lidar com validações, estado, e submit do formulário, utilizei as libs [Formik](https://github.com/jaredpalmer/formik) e a [Yup](https://github.com/jquense/yup), que são ferramentas sensacionais para formulários complexos. Documentação muito completa em ambas as libs.
   #### Api
   Para consumir a api, utilizamos o [Axios](https://github.com/axios/axios) fazendo as requisições para o backend.
   ### Outras libs usadas
   Utilizei o [date-fns](https://date-fns.org/), que me ajudou muito a lidar com formatação de datas, e de simples aplicação.
