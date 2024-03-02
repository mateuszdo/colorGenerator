import React from 'react';
import SingleColor from './SingleColor';
import { nanoid } from 'nanoid';

const ColorList = ({colors, toast}) => {
    const id = nanoid();
    return (
        <div className='colors'>
            {colors.map((item) => {
                return <SingleColor singleColor={item} key={id} toast={toast}/>
            })}
        </div>
    )
}

export default ColorList
