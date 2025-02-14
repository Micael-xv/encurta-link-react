# Encurta Link React

Este projeto é uma aplicação de encurtador de links desenvolvida com React. Ele permite que os usuários insiram URLs longas e obtenham versões encurtadas para compartilhamento fácil. A aplicação também permite que os usuários visualizem e gerenciem seus links encurtados.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-la no navegador.

A página será recarregada quando você fizer alterações.\
Você também verá quaisquer erros de lint no console.

### `npm test`

Inicia o executor de testes no modo interativo de observação.\
Veja a seção sobre [executando testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm run build`

Compila a aplicação para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a construção para o melhor desempenho.

A compilação é minificada e os nomes dos arquivos incluem os hashes.\
Sua aplicação está pronta para ser implantada!

Veja a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

### `npm run eject`

**Nota: esta é uma operação sem retorno. Uma vez que você `eject`, você não pode voltar!**

Se você não estiver satisfeito com a ferramenta de construção e as escolhas de configuração, você pode `eject` a qualquer momento. Este comando removerá a dependência de construção única do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc) diretamente para o seu projeto para que você tenha controle total sobre eles. Todos os comandos, exceto `eject`, ainda funcionarão, mas eles apontarão para os scripts copiados para que você possa ajustá-los. A partir deste ponto, você está por sua conta.

Você nunca precisa usar `eject`. O conjunto de recursos curados é adequado para pequenas e médias implantações, e você não deve se sentir obrigado a usar este recurso. No entanto, entendemos que esta ferramenta não seria útil se você não pudesse personalizá-la quando estivesse pronto para isso.

## Estrutura do Projeto

### `src/pages/Home/index.js`

Este arquivo contém o componente principal da página inicial, onde os usuários podem inserir URLs para encurtar. Ele utiliza hooks do React para gerenciar o estado e faz chamadas à API para encurtar os links.

### `src/pages/Error/index.js`

Este arquivo contém o componente de erro que é exibido quando uma página não é encontrada. Ele inclui um link para retornar à página inicial.

### `src/pages/Links/index.js`

Este arquivo contém o componente que exibe os links encurtados salvos pelo usuário. Ele permite que os usuários visualizem e excluam seus links encurtados.

### `src/components/LinkItem/index.js`

Este arquivo contém o componente que exibe os detalhes de um link encurtado em um modal.

### `src/services/api.js`

Este arquivo configura a instância do Axios para fazer chamadas à API de encurtamento de links.

### `src/services/storeLinks.js`

Este arquivo contém funções para salvar e recuperar links encurtados do localStorage.

## Aprenda Mais

Você pode aprender mais na [documentação do Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, confira a [documentação do React](https://reactjs.org/).

### Divisão de Código

Esta seção foi movida para [aqui](https://facebook.github.io/create-react-app/docs/code-splitting).

### Analisando o Tamanho do Bundle

Esta seção foi movida para [aqui](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size).

### Fazendo um Progressive Web App

Esta seção foi movida para [aqui](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app).

### Configuração Avançada

Esta seção foi movida para [aqui](https://facebook.github.io/create-react-app/docs/advanced-configuration).

### Implantação

Esta seção foi movida para [aqui](https://facebook.github.io/create-react-app/docs/deployment).

### `npm run build` falha ao minificar

Esta seção foi movida para [aqui](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify).

### Pagina home
![Homepage](/public/image-1.png)

### Pagina de links quando não possui nenhum link
![Links](/public/image-2.png)

### Pagina de link
![alt text](/public/image.png)