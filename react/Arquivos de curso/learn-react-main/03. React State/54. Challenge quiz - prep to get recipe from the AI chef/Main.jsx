/**
 * Componente principal do aplicativo de receitas.
 * 
 * Este componente permite que o usuário adicione ingredientes,
 * gere uma receita com base nos ingredientes inseridos por meio de IA,
 * e exiba a receita gerada. 
 */
import React from "react";
import IngredientsList from "./components/IngredientsList";
import ClaudeRecipe from "./components/ClaudeRecipe";
import { getRecipeFromMistral } from "./ai";
import { FadeLoader } from "react-spinners";

export default function Main() {
  // Estado para armazenar os ingredientes adicionados pelo usuário
  const [ingredients, setIngredients] = React.useState([]);
  
  // Estado para armazenar a receita gerada pela IA
  const [recipe, setRecipe] = React.useState("");
  
  // Estado para controlar a exibição do indicador de carregamento
  const [isLoading, setIsLoading] = React.useState(false);

  /**
   * Obtém uma receita gerada pela IA com base nos ingredientes fornecidos.
   * Atualiza o estado de carregamento durante a requisição.
   */
  async function getRecipeFromAI() {
    setIsLoading(true);
    let generatedRecipe = await getRecipeFromMistral(ingredients);
    setRecipe(generatedRecipe);
    setIsLoading(false);
  }

  /**
   * Adiciona um novo ingrediente à lista de ingredientes.
   * @param {FormData} formData - Dados do formulário contendo o ingrediente a ser adicionado.
   */
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  /**
   * Remove um ingrediente da lista com base no índice fornecido.
   * @param {number} indexToRemove - Índice do ingrediente a ser removido.
   */
  function removeIngredient(indexToRemove) {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((_, index) => index !== indexToRemove)
    );
  }

  return (
    <main>
      {/* Formulário para adicionar ingredientes */}
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
          required
        />
        <button>Add ingredient</button>
      </form>

      {/* Exibe a lista de ingredientes e botão para gerar a receita */}
      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipeFromAI}
          removeIngredient={removeIngredient}
        />
      )}

      {/* Indicador de carregamento ou exibição da receita gerada */}
      {isLoading ? (
        <div className="spinner-container">
          <FadeLoader color="#d17557" size={25} margin={4} />
        </div>
      ) : (
        recipe && <ClaudeRecipe recipe={recipe} />
      )}
    </main>
  );
}
