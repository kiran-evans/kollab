import './ErrorMsg.css';

export const ErrorMsg = (props: {
    message: string;
}) => {
    const { message } = props;

    return (
        <div className="error-msg">
            {message}
        </div>
    )
}