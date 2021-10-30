import React, { createContext, useEffect, useState } from 'react';

export const HeartContext = createContext()

const HeartProvider = (props) => {

    const item = JSON.parse(localStorage.getItem('heart')) || []

    const [heart, setHeart] = useState(item)

    const addHeart = data => {
        setHeart([...heart, data])
    }
    const removeItem = id => {
        const nuevoHeart = heart.filter(el => el.id !== id)
        setHeart(nuevoHeart)
    }

    const isInHeart = id => {
        return heart.some(el => el.id === id)
    }
    const vaciarHeart = (e) => {
        // e.stopPropagation()
        setHeart([])
    }

    useEffect(() => {
        localStorage.setItem('heart', JSON.stringify(heart))
    }, [heart])

    return (
        <HeartContext.Provider
            value={{
                heart,
                addHeart,
                removeItem,
                isInHeart,
                vaciarHeart,
                setHeart
            }}
        >
            {props.children}
        </HeartContext.Provider>
    );
}

export default HeartProvider;
