import './Button.css'

function Button({label, classes, click}) {
    classes = `btn ${classes ? classes : 'btn--primary'}`
    return ( 
        <button 
         className={classes}
         onClick={() => click?.(label)}
        >    
           <span>{label}</span> 
        </button>
     );
}

export default Button;