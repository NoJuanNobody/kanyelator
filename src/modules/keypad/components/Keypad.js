import React from 'react';
import { useSelector } from 'react-redux';

export default () => {
    /** we hook into the redux state to access mem things like ans */
    // const ans = useSelector(({ans}) => ans);

    return (
        <section>
            <Button onClick={(e)=>console.log(e.target)}>1</Button>
            <Button onClick={(e)=>console.log(e.target)}>2</Button>
            <Button onClick={(e)=>console.log(e.target)}>3</Button>
            <Button onClick={(e)=>console.log(e.target)}>4</Button>
            <Button onClick={(e)=>console.log(e.target)}>5</Button>
        </section>
    )
}

