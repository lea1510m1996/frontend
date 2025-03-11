import React, { useEffect, useState } from "react";

const PostAuthor = ( {authorId} ) => { 
const [author, setAuthor] = useState(null);

    useEffect(() => {
        if (!authorId) return;
        fetch(`https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/users/` + authorId)
            .then((response) => response.json())
            .then((data) => setAuthor(data));
    }, [authorId]);

    if (!author) return <p>Učitavanje autora...</p>;

    return ( 
    <p> {author.name}</p>
);
}

export default PostAuthor;