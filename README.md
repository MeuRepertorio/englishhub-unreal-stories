# ENGLISHHUB // UNREAL STORIES

Site estático original de inglês por micro-novelas cinematográficas, inspirado no design preto/vermelho escolhido para o projeto.

## O que está incluído

- **25 histórias originais completas**, cada uma em **3 cenas** bilíngues (75 cenas no total), uma por universo a cada nível.
- **5 níveis:** First Steps (A1), New Adventures (A2), Real Drama (B1), Deep Stories (B2) e Master Stories (C1).
- **5 formatos de leitura:** novela visual, quadrinhos, conversas por mensagens, histórias com escolhas e mistérios com pistas.
- Vocabulário com **5 palavras por história** (125 pares), áudio em inglês e tradução PT-BR.
- Quiz de **3 questões por história**, correção e explicações, com aprovação a partir de 2 acertos.
- **25 expressões práticas** de call, amigos, trabalho, viagens e reações.
- Treino diário de **10 minutos** com checklist e sequência de dias concluídos.
- Favoritos, filtros, busca, acompanhamento real por nível, salvamento `localStorage`, exportação/importação de progresso.
- Visual preto/vermelho com fontes condensadas, capas SVG originais e retrato cinematográfico.
- Responsivo para celular, tablet e desktop; PWA/offline após a primeira visita bem-sucedida via HTTPS.

## Executar

É um projeto em HTML, CSS e JavaScript puro. Para testar localmente:

```bash
python -m http.server 8000
```

Abra `http://localhost:8000`.

Também é possível abrir `index.html` diretamente, mas o serviço offline (service worker) só funciona sob HTTPS ou `localhost`.

## Publicar no GitHub Pages

1. Crie um repositório, por exemplo `englishhub-unreal-stories`.
2. Envie **todos os arquivos e a pasta `assets`** para a raiz do repositório.
3. Em **Settings → Pages**, escolha **Deploy from a branch**, `main`, `/ (root)`.
4. O site fica disponível no formato `https://SEU-USUARIO.github.io/englishhub-unreal-stories/` quando a publicação concluir.

Não use URLs absolutas `/assets/...`: todos os caminhos foram feitos relativos para funcionar no GitHub Pages.

## Estrutura

```
index.html                 Página e metadados
styles.css                 Design e responsividade
app.js                     Interface, leitor, áudio, quiz, progresso
stories.js                 25 histórias + vocabulário + quizzes + expressões
service-worker.js          Cache para leitura offline
manifest.webmanifest       Instalação PWA
assets/favicon.svg         Ícone
assets/hero-portrait.webp  Imagem da capa principal
assets/covers/             25 capas vetoriais originais
```

## Como o progresso funciona

O progresso é **local ao navegador/dispositivo**. Não existe login, servidor ou sincronização entre aparelhos. O botão **EXPORTAR** permite fazer backup em JSON e **IMPORTAR** permite restaurar manualmente em outro navegador. O nome Lucas no menu é uma homenagem ao destinatário do projeto e **não representa uma conta conectada**.

O áudio utiliza Web Speech API (`speechSynthesis`) do navegador. Ele depende das vozes e suporte de cada dispositivo; em alguns aparelhos uma voz pode exigir conexão ou não estar disponível, mesmo com a página offline. Não há áudio gravado nem serviço de reconhecimento de fala.

## Evolução futura

As capas e cenas são independentes da lógica da leitura. Dá para substituir cada ilustração por uma animação/vídeo de IA, adicionar episódios e criar narração profissional sem reconstruir a interface principal. Não há vídeos incluídos nesta versão.

## Licença

Conteúdo e código criados para este projeto. Antes de divulgar como produto comercial, revise o conteúdo pedagógico, a acessibilidade e as licenças de eventuais novos recursos externos.