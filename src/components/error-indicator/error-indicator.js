
import "./error-indicator.css";
import icon from './poster.gif';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error-icon"></img>
            <span className="error-mess">WARNING!</span>
            <span>it seems this component is dead inside</span>
            <span>(we've already sent a ghoul to help you)</span>
        </div>
    );
};

export default ErrorIndicator;