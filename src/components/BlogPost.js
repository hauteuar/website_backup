import React from 'react';

function BlogPost({ title, content, author, date }) {
    return (
        <article>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Written by {author} on {date}</p>
        </article>
    );
}

export default BlogPost;
