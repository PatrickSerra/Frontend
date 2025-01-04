const gulp = require("gulp");
const kss = require("kss"); // Importa o KSS
const path = require("path");

// Caminhos dos arquivos
const paths = {
  css: "../css/**/*.css", // Monitorar todos os arquivos CSS
  md: "../css/**/*.md", // Monitorar arquivos Markdown
  styleguide: {
    source: "../css/", // Fonte dos arquivos para KSS (CSS e Markdown)
    dest: "../styleguide-docs/", // Pasta de saída da documentação
  },
};

// Tarefa para gerar documentação do KSS com Overview
function generateStyleguide(done) {
  kss({
    verbose: true,
    title: "My components",
    source: paths.styleguide.source, // Pasta de origem dos arquivos KSS
    destination: paths.styleguide.dest, // Pasta de destino
    css: ["../kss/kss.css", "../css/components.css"], // Caminho para o CSS no styleguide
    //overview: "overview.md", // Gera um arquivo overview.md
    homepage: '../css/homepage.md', // Caminho correto para o arquivo markdown
    js: ['../kss/kss.js', '../js/index.js']
  })
    .then(() => {
      done(); // Indica que a tarefa foi concluída
    })
    .catch((error) => {
      console.error(error);
      done(error);
    });
}

// Tarefa para monitorar mudanças nos arquivos
function watchFiles() {
  gulp.watch(paths.css, generateStyleguide); // Regera o styleguide ao mudar CSS
  gulp.watch(paths.md, generateStyleguide); // Regera o styleguide ao mudar arquivos markdown
}

// Exportar tarefas
exports.styleguide = generateStyleguide;
exports.watch = gulp.series(generateStyleguide, watchFiles);

/*
Para usar:

deve estar instalado: npm install -g gulp-cli

gulp styleguide
gulp watch

*/
