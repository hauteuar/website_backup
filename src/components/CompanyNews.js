// In src/components/BlogPost.js

import React from 'react';

function CompanyNews({ date, title, CompanyNews, author }) {
    return (
        <article>
            <h2>{title}</h2>
            <p>{CompanyNews}</p>
            <p>Written by {author} on {date}</p>
        </article>
    );
}

export default CompanyNews;
