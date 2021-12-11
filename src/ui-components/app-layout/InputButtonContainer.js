import React from 'react';
import './InputButtonContainer.scss';

const InputButtonContainer = ({children}) => {
    return (
        <div className="tx-c-input-button-container">
            {children}
        </div>
    )
};

export default InputButtonContainer;
