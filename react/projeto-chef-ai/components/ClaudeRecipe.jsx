import Markdown from "react-markdown";

export default function ClaudeRecipe(props) {
  return (
    <section>
      <article className="suggested-recipe-container" aria-live="polite">
        <Markdown>{props.recipe}</Markdown>
      </article>
    </section>
  );
}
