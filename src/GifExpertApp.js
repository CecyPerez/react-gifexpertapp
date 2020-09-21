import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Hello']);

    // const handleAdd = () => {
    //     setCategories(
    //         //   ['Hola Cecy',...categories]  
    //         cats => [...cats, 'Hola bubu']
    //     );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>

            {/* <button onClick={handleAdd}> Agregar </button> */}

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category} 
                        />
                    ))
                }
            </ol>
        </>
    );

}