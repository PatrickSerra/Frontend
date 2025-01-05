// Importa os módulos necessários
const gulp = require("gulp"); // Gulp é uma ferramenta para automação de tarefas
const kss = require("kss"); // KSS (Knyle Style Sheets) é usado para gerar documentação de CSS
const path = require("path"); // Módulo para manipulação de caminhos de arquivos

// Constantes para armazenar os caminhos dos arquivos CSS e Markdown
const cssFiles = "../css/**/*.css"; // Caminho dos arquivos CSS a serem monitorados (todos os arquivos CSS dentro da pasta css)
const mdFiles = "../css/**/*.md"; // Caminho dos arquivos Markdown a serem monitorados (todos os arquivos .md dentro da pasta css)

// Constantes para armazenar os caminhos da fonte e destino do Styleguide
const styleguideSource = "../css/"; // Pasta onde estão os arquivos CSS e Markdown que o KSS vai usar para gerar a documentação
const styleguideDest = "../styleguide-docs/"; // Pasta onde a documentação gerada pelo KSS será salva

// Constantes para os caminhos de arquivos personalizados (CSS e JS)
const kssCss = "../kss/kss.css"; // Caminho para o CSS personalizado para o KSS
const componentsCss = "../css/components.css"; // Caminho para o arquivo CSS dos componentes
const homepageMd = "../css/homepage.md"; // Caminho para o arquivo markdown da homepage
const kssJs = "../kss/kss.js"; // Caminho para o JavaScript personalizado para o KSS
const indexJs = "../js/index.js"; // Caminho para o JavaScript dos componentes

// Tarefa para gerar a documentação do KSS
function generateStyleguide(done) {
  kss({
    verbose: true, // Ativa o modo verbose para mostrar mais informações durante a execução
    title: "My components", // Define o título da documentação gerada
    source: styleguideSource, // Define a pasta de origem para os arquivos CSS e Markdown
    destination: styleguideDest, // Define a pasta de destino onde a documentação será gerada
    css: [kssCss, componentsCss], // Define os caminhos para os arquivos CSS usados na documentação
    homepage: homepageMd, // Define o caminho para o arquivo markdown da página inicial
    js: [kssJs, indexJs] // Define os caminhos para os arquivos JS usados na documentação
  })
    .then(() => {
      done(); // Indica que a tarefa foi concluída com sucesso
    })
    .catch((error) => {
      console.error(error); // Caso haja erro, imprime o erro no console
      done(error); // Indica que houve erro na execução da tarefa
    });
}

// Tarefa para monitorar mudanças nos arquivos e regenerar a documentação quando necessário
function watchFiles() {
  gulp.watch(cssFiles, generateStyleguide); // Monitora os arquivos CSS e executa a tarefa 'generateStyleguide' quando há mudanças
  gulp.watch(mdFiles, generateStyleguide); // Monitora os arquivos Markdown e executa a tarefa 'generateStyleguide' quando há mudanças
}

// Exporta as tarefas para uso no Gulp
exports.styleguide = generateStyleguide; // Exporta a tarefa de gerar a documentação
exports.watch = gulp.series(generateStyleguide, watchFiles); // Exporta a tarefa de monitoramento, que primeiro gera a documentação e depois monitora os arquivos

/*
Para usar:
1. Instalar o Gulp CLI globalmente com: npm install -g gulp-cli
2. Executar as tarefas:
   - Para gerar a documentação: gulp styleguide
   - Para monitorar as mudanças nos arquivos e gerar a documentação automaticamente: gulp watch
*/
