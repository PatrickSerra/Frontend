function Joke({setup, punchline}) {
    return (
        <article>
            <h1 className={setup ? '' : 'hidden'} >Question: {setup}</h1>
            <h2>{punchline}</h2>
            <hr />
        </article>
     );
}

export default Joke;