function Pad(props) {
  console.log(props.color);

  let styles = {
    backgroundColor: props.color,
  };

  return <button style={styles}></button>;
}

export default Pad;
