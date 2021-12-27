const Button = ({type, children, ...props}) => {
    return (
        <button data-testid="button" className={`button ${type}`} {...props}>{children}</button>
    );
};

export default Button;