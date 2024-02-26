import './btnstyle.css'

function Button({children, handleClick, ...props}){

    return(
        <button className="btn-style" onClick={handleClick} {...props}>
            {children}
        </button>
    )
}

export default Button