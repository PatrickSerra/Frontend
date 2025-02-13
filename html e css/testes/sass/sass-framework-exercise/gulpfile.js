// Importa as funções necessárias do Gulp
const { src, dest, watch, series } = require('gulp');

// Importa o plugin gulp-sass e o conecta à biblioteca Sass
const sass = require('gulp-sass')(require('sass'));

/**
 * 🛠️ Função que compila arquivos SASS/SCSS em CSS
 */

async function buildStyles() {
    return new Promise((resolve, reject) => {
        src('sass/**/*.scss')  // Seleciona os arquivos SASS
            .pipe(sass().on('error', sass.logError)) // Compila para CSS e lida com erros
            .pipe(dest('css')) // Salva na pasta CSS
            .on('end', resolve)  // Sinaliza o fim da execução
            .on('error', reject); // Captura erros
    });
}

/**
 * 👀 Função que monitora mudanças no arquivo SASS e recompila automaticamente
 */
function watchTask() {
    watch(['sass/**/*.scss'], buildStyles); // 1️⃣ Fica "observando" os arquivos .scss
    // Sempre que o arquivo for alterado, ele executa a função buildStyles()
}

/**
 * 🚀 Define a tarefa padrão do Gulp
 * 1️⃣ Compila os estilos (buildStyles)
 * 2️⃣ Inicia o modo de "watch" para monitorar mudanças (watchTask)
 */
exports.default = series(buildStyles, watchTask);
