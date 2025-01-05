# CSS Utilities Overview

Este arquivo de estilo fornece um conjunto de utilitários e componentes projetados para criar interfaces de usuário consistentes, acessíveis e visualmente atraentes. Todas as classes seguem uma abordagem modular, permitindo reutilização eficiente e fácil personalização.

---

## Estrutura do Código

### 1. **Variáveis CSS**
O uso de variáveis (`:root`) fornece uma base flexível para definir cores, espaçamentos, tamanhos de fonte e bordas. As variáveis seguem uma nomenclatura clara, como `--color-primary` e `--padding-small`, para fácil manutenção e personalização.

### 2. **Componentes**
Os componentes são blocos de interface reutilizáveis com estilos consistentes e modificáveis por meio de classes de modificação (`modifiers`). Eles incluem:

- **Messages**: Mensagens de feedback visual com suporte para sucesso, aviso e erro.
- **Buttons**: Botões estilizados com suporte para diferentes estados, tamanhos e tipos de ação.
- **Media**: Layout flexível para exibir mídia (imagens e texto) com suporte a variações.
- **Dropdown**: Menu suspenso interativo com transições suaves e suporte a estados de abertura/fechamento.

### 3. **Classes Utilitárias**
Fornece um conjunto de utilitários para controle de alinhamento de texto, espaçamento e cores. Essas classes podem ser aplicadas diretamente para ajustes rápidos.

---

## Convenções de Estilo

- **Naming Convention**: 
  - Segue o padrão `block__element--modifier` inspirado no BEM (Block Element Modifier).
  - Classes utilitárias usam a estrutura `context-modifier`, por exemplo, `.text-center` e `.padding-lg`.

- **Organização**:
  - Variáveis são declaradas no início para fácil referência.
  - Componentes e utilitários são separados em seções bem definidas.

---

## Guia Rápido para Uso

### Mensagens
Use mensagens para fornecer feedback visual ao usuário:
```html
<div class="message message--success">Operação concluída com sucesso!</div>
