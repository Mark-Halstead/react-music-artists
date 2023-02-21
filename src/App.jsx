import React, { useState } from 'react';
import { Card, Information, Image, Music, JokesApi } from "./components";



const App = () => {
    return (
        <>
            <h1 className="heading">My Favourite Musician</h1>
            <Card />
            <Image />
            <Information />
            <Music />
            <JokesApi />
        </>
    )
}

export default App
