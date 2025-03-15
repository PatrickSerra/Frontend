function Main() {
    return ( 
        <main>
            <form className="add-ingridient-form" action="">
                <input 
                    type="text" 
                    placeholder="e.g oregano" 
                    aria-label="Add ingridient" 
                />
                <button type="submit">Add ingridient</button>
            </form>
        </main>
    );
}

export default Main;