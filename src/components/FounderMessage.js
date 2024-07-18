// In src/components/FounderMessage.js

import React from 'react';

function FounderMessage({ title, content, author, date }) {
    return (
        <article>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Written by {author} on {date}</p>
        </article>
    );
}

export default FounderMessage;
