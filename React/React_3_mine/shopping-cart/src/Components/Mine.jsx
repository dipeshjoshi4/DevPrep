import React from 'react'
import { useState } from 'react'

function Mine() {

    const [content, setContent] = useState("")

    const [tasks, setTasks] = useState([])

    const handleInput = (e) => {
        setContent(e.target.value);
    }

    const handleAddItem = () => {
        const newItem = content;

        const newArr = [];
        for (let i = 0; i < tasks.length; i++) {
            newArr.push(tasks[i]);
        }
        newArr.push(newItem);
        setTasks(newArr);

        setContent("");

    }

    const handleDelete = (index) => {
        // console.log("remove list item");
        const filterArray = [];
        for (let i = 0; i < tasks.length; i++){
            if (i != index) {
                filterArray.push(tasks[i]);
            }
        }
        setTasks(filterArray);
    }

    return (
        <div className='shopping-Demo-Prac'>

            <div className="input-box">
                <input type="text" onChange={handleInput} value={content} />
                <button onClick={handleAddItem}>Add Item</button>
            </div>

            <h2>Shopping-List</h2>

            <ul className="list">
                {
                    tasks.map((item, index) => {
                        return (
                            <li key={index}>
                                <span>{item}</span>
                                <button onClick={() => { handleDelete(index) }}>Delete</button>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default Mine;