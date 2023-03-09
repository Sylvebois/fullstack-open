const Notification = ({ message, type }) => {
    if (message === '') {
        return null;
    }
    else {
        const classNames = `notification ${type === 'error' ? 'error' : 'info'}`;

        return (
            <div className={classNames}>
                {message}
            </div>
        );
    }
}

export default Notification;