const ErrorBox = ({ msg }) => {
    const style = {
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        color: 'red',
        background: 'lightgrey'
    };
    return (<div style={style}>{msg}</div>)
}

export default ErrorBox;