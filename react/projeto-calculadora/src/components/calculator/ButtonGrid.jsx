import './ButtonGrid.css'

function ButtonGrid(props) {
    return ( 
        <section className='calculator__button-grid'>
            {props.children}
        </section>
     );
}

export default ButtonGrid;