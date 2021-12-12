import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Message.scss';

const Message = ({author, content, dateString}) => {
    const messageClass = classNames('tx-message', {
        'tx-message--right': !author,
    });

    return (
        <div className={messageClass}>
            {author && (
                <p className="tx-message__author">{author}</p>
            )}
            <p className="tx-message__content">{content}</p>
            <p className="tx-message__date">{dateString}</p>
        </div>
    )
};

Message.propTypes = {
    author: PropTypes.string,
    content: PropTypes.string.isRequired,
    dateString: PropTypes.string.isRequired,
};

Message.defaultProps = {
    author: '',
};

export default Message;
