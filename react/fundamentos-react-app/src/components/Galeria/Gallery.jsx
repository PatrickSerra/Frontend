import Profile from "./Profile";

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientitis</h1>
      <Profile person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} />
      <Profile person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }} />
    </section>
  );
}
