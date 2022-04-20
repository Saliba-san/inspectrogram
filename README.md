# TP1 Engenharia de Software: Inspectrogram

#### Integrantes

    - Gabriel Portela Saliba: 2017002466
    - Gabriel Teixeira Lara Chaves: 2017088182
    - Pedro Barbosa Bahia: 2018019907
    - Gabriel Camatta Zanotelli: 2018020140
    - Túlio Dias Altíssimo: 2017014375

## Sistema de Visualização de Espectrograma de Áudio

### Features Mínimas

    - Carregamento de áudio
    - Ajuste de parâmetros físicos de espectrograma (tipo de janela, tamanho de janela, salto de STFT)
    - Visualização de segmentos do espectrograma

### Possíveis Features

    - Deslizar espectrograma para visualizar segmento do áudio
    - Aplicar filtros ao áudio e visualizar seus efeitos no espectrograma

### Frameworks

    - front: React.js
    - back: Flask
    - BD: MySQL

### Histórias

    - História: Como usuário, quero fazer o upload de um áudio
        - Projetar e implementar interface de upload [Zanotelli]
        - Implementar rota de upload de áudio [Túlio]
        - Armazenar áudio [Túlio]

    - História: como usuário, quero deletar o áudio subido
        - Projetar e implementar interface de remoção de áudio armazenado [Zanotelli]
        - Implementar remoção de áudio armazenado [Bahia]

    - História: Como usuário, eu quero visualizar o espectograma
        - Projetar e implementar interface de visualização de espectrograma [Saliba]
        - Implementar envio de requisição para geração de espectrograma [Lara]
        - Implementar geração de espectrograma [Lara]
        - Armazenar imagem resultante [Túlio]
        - Exibir imagem em interface apropriada [Bahia]

    - História: Como usuário, quero variar os parâmetros do espectrograma
        - Projetar e implementar interface para inserção de parâmetros [Zanotelli]
        - Incorporação de parâmetros em geração [Saliba]

    - História: Como usuário, quero visualizar seções específicas do áudio
        - Elaborar formas de selecionar seção desejada [Saliba]
        - Elaborar e implementar forma de exibir seção selecionada [Bahia]
