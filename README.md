# O que é [Code in the Dark](http://codeinthedark.com)
[Code in the Dark](http://codeinthedark.com) é uma competição front-end (HTML, CSS), originalmente criada pela [Tictail](https://tictail.com), onde cada competidor precisa implementar um design de website dado somente com uma imagem da tela. A pegada é que nenhum preview do resultado é permitido durante a implementação, e nenhuma ferramenta de medição podem ser usadas. O vencedor é decidido pela platéia.

Durante a competição, os participantes tem que usar um editor customizado para o Code in the Dark, que [você pode testar aqui](http://codeinthedark.com/editor).

# As Regras

* Cada participante recebe um pacote do editor, que incluem uma imagem da tela da página que eles devem implementar com HTML/CSS e qualquer assets adicional que eles precisem.
* Nenhum iframe, framework, snippet ou outro asset fora dos listados nas instruções são permitidos. O site deve ser construído do início durante a competição.
* O participante deve ter o editor no modo full screen, e nunca será permitido sair dele ou usar qualquer ferramenta de medição.
* Pré-visualização do resultado é extritamente proíbido até o tempo terminar.
* Uma vez que os 15 minutos de templo se esgota cada participante apresenta seu resultado para a platéia, que votará no seu favorito para decidir o vencedor.

# Organizando seu próprio Code in the Dark
Code in the Dark é open source - você pode usar o editor e as regras para sediar sua própria competição. Para isso, faça um pull request (seguindo essas [instruções](https://github.com/codeinthedark/codeinthedark.github.io#creating-the-pull-request)) nesse repositório para ser anunciado no site [codeinthedark.com](http://codeinthedark.com). Por favor leia e tenha certeza que você entendeu [a licensa](https://github.com/codeinthedark/codeinthedark.github.io/blob/master/LICENSE) antes de usar o logo e o nome Code in the Dark no seu evento.

Leia as instruções abaixo de como organizar o evento. Se você tiver qualquer questão ou precisar de qualquer ajuda como imagens de alta resolução, melhores práticas ou outra coisa, por favor não hesite em nos contatar pelo hello@codeinthedark.com!

### Criando a Competição
Cada participante precisará levar seu próprio laptop para o evento, mas é recomendado que você forneça um monitor externo pra cada um deles. Esses monitores devem estar virados contra o competidor e em direção da platéia, assim eles poderão acompanhar a competição.
Dependendo do número de competidores você deverá dividir a competição em múltiplos rounds, com 10 participantes em cada grupo e um desafio final contendo os top colocados dos rounds anteriores.

Imagens da tela do website e os assets devem ser preparados antecipdamente para cada grupo (use diferentes websites em cada round) e serão inclusos com o conjunto de arquivos do editor que cada um receberá. É recomendado ter os arquivos disponíveis em pen-drives USB que os participantes podem copiar seu conteúdo. Leia mais no [repositório do editor](https://github.com/codeinthedark/editor) sobre como preparar os assets e configurar o editor.

Antes do round começar, ajude os participantes a configurar o editor e tenha certeza que eles colocaram seus browsers em **modo de apresentação** com o espelhamento de tela configurado para a tela externa. Tenha certeza que eles não começem a codar antes do tempo iniciar.

Uma vez que o público vai ser o juiz, deixe que eles saibam claramente as regras e assim eles poderão facilmente vigiar qualquer um que esteja trapaçeando e desqualificá-lo da competição.

Quando você estiver pronto para iniciar o round, faça uma contagem regressiva e configure o relógio em 15 minutos deixando visível para a platéia. Uma vez que os 15 minutos acabarem diga a todos pra pararem de codar, salvar seus arquivos e abrir seu navegador preferido para todos começarem a votar. Use um serviço de votação como https://www.mentimeter.com/ para facilitar a todos a votar.

### Instruções para os Participantes
Imprima as seguintes instruções e disponibilize pra cada participante ver, por exemplo colocando no monitor a frente dele, que está virado para a platéia.

1. Conecte o monitor e configure-o para o **espelhamento de tela**.
2. Espere a equipe transferir os arquivos do pendrive USB para seu computador.
3. Só abra o editor o arquivo **index.html** e configure seu browser para o **modo de apresentação**.
4. O editor contém instuções adicionais sobre os assets e como salvar o arquivo final.
5. Quando o tempo acabar, remova suas mãos do teclado.
6. Não saia do editor durante a competição!

### Criando o Pull Request
Para ter seu evento aparecendo no site [codeinthedark.com](http://codeinthedark.com), crie um pull request nesse repositório adicionando o código abaixo da seção "Community Organized Events":

```html
<p>
[CITY] · [DATE] · <a href="[LINK_TO_RSVP_PAGE]" target="_blank">RSVP</a>
</p>
```

Replace `[CITY]`, `[DATE]` and `[LINK_TO_RSVP_PAGE]` with your information. Here's an example:

```html
<p>
Stockholm · January 22, 2016 · <a href="http://example.com" target="_blank">RSVP</a>
</p>
```