import React from 'react';
import PropTypes from 'prop-types';
import './Container.scss';

const Container = ({children, className}) => {
    return (
        <div className={`tx-c-container ${className}`}>
            {children}
        </div>
    )
};

Container.propTypes = {
    className: PropTypes.string,
};

Container.defaultProps = {
    className: '',
};

export default Container;
