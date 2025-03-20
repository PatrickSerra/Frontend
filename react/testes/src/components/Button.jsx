function Button({title, onClick}) {
  function handleClick() {
    alert(`You clicked in ${title}`);
  }

  return <button onClick={onClick}>{title}</button>;
}

export default Button;
