import Avatar from "./Avatar"

export default function Profile(props) {
  const style = {
     listStyle: 'none'
  }

  return (
    <div>
      <Avatar {...props} />
      <h1>{props.person.name}'s To do List</h1>
      <ul style={style}>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </div>
  );
}
