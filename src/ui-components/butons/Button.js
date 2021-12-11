import React, {useState, Children} from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = React.forwardRef((props, ref) => {
    const {type, onClick, isDisabled, children} = props;

    const [isFocused, setIsFocused] = useState(false);

    // bind state to children
    const enhancedChildren = Children.map(children, child => {
        if (!child || typeof child === 'string' || typeof child.type === 'string') return child;

        return React.cloneElement(child, {
            isDisabled: isDisabled,
            isFocused: isFocused,
        });
    });

    return (
        <button
            ref={ref}
            // https://github.com/yannickcr/eslint-plugin-react/issues/1555
            // eslint-disable-next-line react/button-has-type
            type={type}
            className="tx-c-button"
            onClick={onClick}
            disabled={isDisabled}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        >
            {enhancedChildren}
        </button>
    );
});

Button.propTypes = {
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    onClick: PropTypes.func,
    isDisabled: PropTypes.bool,
};

Button.defaultProps = {
    type: 'button',
    onClick: () => {},
    isDisabled: false,
};

export default Button;
