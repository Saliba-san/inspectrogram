# Rodando o Front

Tutorial básico para rodar e testar o front-end do projeto Inspectrograma

## Preparando o hambiente

Para rodar o código, é necessário ter instalado `node.js` e `yarn`.

Rodando o comando abaixo no terminal importará todas as dependências do códico para a pasta `node_modules` no diretório atual.

### `yarn install`

Verifique-se se seu terminal se encontra no diretório `inspectrogram/front` antes de rodá-lo. Caso o comando seja executado na
pasta errada, o diretório com os módulos não será reconhecido pela aplicação. 


## Rodando e testando

Executar o código abaixo no dretório `inspectrogram/front` (o mesmo com ua pasta `package.json`) fará uma aba em seu navegador
prioritario abrir em `localhost:3000/`, onde a aplicação estará rodando.

### `yarn start`

Obs: caso a porta 3000 já esteja ocupada, devido a algum erro ou por alguma outra aplicação estar rodando, o terminal pedirá
permição para rodar a aplicação em outra porta.

O comando `crtl + C` dará com que a aplicação para automaticamente.

## Fazendo alterações

Qualquer alterações feitas na aplicação devem aparecer instantaneamente no browser. Caso isso não esteja acontecendo apenas
pare a execução e rode novamente.