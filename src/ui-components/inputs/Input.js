import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = React.forwardRef((props, ref) => {
    const {name, value, isDisabled} = props;
    const {placeholder} = props;
    const {onChange, onClick, onBlur, onFocus, onKeyDown} = props;

    const handleOnChange = event => {
        if (typeof onChange === 'function') onChange(event.target.value);
    };

    return (
        <input
            ref={ref}
            name={name}
            className="tx-c-input"
            value={value}
            placeholder={placeholder}
            disabled={isDisabled}
            onChange={handleOnChange}
            onClick={onClick}
            onBlur={onBlur}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
        />
    );
});

Input.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    isDisabled: PropTypes.bool,
    value: PropTypes.string,
};

Input.defaultProps = {
    name: '',
    placeholder: '',
    onChange: null,
    onClick: null,
    onBlur: null,
    onFocus: null,
    onKeyDown: null,
    isDisabled: false,
    value: '',
};

export default Input;
