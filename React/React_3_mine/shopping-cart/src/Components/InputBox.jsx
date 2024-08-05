import React from 'react'

const InputBox = (props) => {
    const handleInput = props.handleInput;
    const content = props.content;
    const handleAddItem = props.handleAddItem;
    return (
        <div className="input-box">
            <input type="text" onChange={handleInput} value={content} />
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    )
}

export default InputBox