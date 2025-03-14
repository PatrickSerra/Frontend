export default function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];
  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");
    const formData = new FormData(e.currentTarget)
    const newIngridient = formData.get("ingridient")
    ingredients.push(newIngridient)
    console.log(ingredients);
    
  }

  /**
   * Review Challenge:
   * Map over the list of ingredients and render them as list items
   *
   * Note: We're doing things a weird way here. Don't worry,
   * we're building up to learning the right way 🙂
   */

  return (
    <main>
      <form onSubmit={handleFormSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingridient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientsListItems}</ul>
    </main>
  );
}
