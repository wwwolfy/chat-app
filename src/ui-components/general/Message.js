import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Message.scss';

const Message = ({author, content, dateString, isUserAuthor}) => {
    const messageClass = classNames('tx-message', {
        'tx-message--right': isUserAuthor,
    });

    return (
        <div className={messageClass}>
            {!isUserAuthor && (
                <p className="tx-message__author">{author}</p>
            )}
            <p className="tx-message__content">{content}</p>
            <p className="tx-message__date">{dateString}</p>
        </div>
    )
};

Message.propTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    dateString: PropTypes.string.isRequired,
    isUserAuthor: PropTypes.bool,

};

Message.defaultProps = {
    isUserAuthor: false,
};

export default Message;
