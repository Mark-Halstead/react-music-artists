import React, { useState, useEffect } from 'react';


const JokesApi = () => {
    const [joke, setJoke] = useState({})

    useEffect(() => {

        async function getJoke() {
            const response = await fetch("https://official-joke-api.appspot.com/random_joke")
            console.log(response);
            const data = await response.json()
            console.log(data);
            setJoke(data)
        }
        getJoke()
    }, [])

    return (
        <>
            <em>{ joke.setup }</em>
            <em>{ joke.punchline }</em>
        </>
    )
}

export default JokesApi
