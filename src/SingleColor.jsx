import React from 'react';

const SingleColor = ({singleColor, toast}) => {

    async function copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(`#${text}`);
            console.log('Text copied to clipboard');
            toast.success('Color saved to clipboard');
        } catch (error) {
            console.error('Failed to copy text: ', error);
        }
    }

    const handleOnClick = () => {
        copyToClipboard(singleColor.hex);
    }

    console.log(singleColor);
    return (
        <div className='color' 
            style={{backgroundColor: `#${singleColor.hex}`, color: singleColor.type === 'shade' && '#f3f3f3'}}
            onClick={handleOnClick}
            >
                <p>{singleColor.weight}%</p>
                <p>#{singleColor.hex}</p>
        </div>
    )
}

export default SingleColor
