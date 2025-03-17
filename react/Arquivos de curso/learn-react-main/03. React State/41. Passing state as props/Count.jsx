function Count({ number }) {
  console.log('Count rendered');
  
  return <h2 className="count">{number}</h2>;
}

export default Count;
