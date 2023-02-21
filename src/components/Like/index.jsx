import React, { useState } from 'react';

const Button = () => {
    
    const [like, setLike] = useState(false);

    const liked = () => {
        setLike(prevState => !prevState);
    }

    return (
        <button onClick={liked}>Like: {like ? 1 : 0}</button>
    );
}

export default Button;
