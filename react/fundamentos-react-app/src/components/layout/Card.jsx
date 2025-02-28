import './Card.css';

const card  = (props) => {
    return (
        <div className="card">
            <div className="title">{props.titulo}</div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default card