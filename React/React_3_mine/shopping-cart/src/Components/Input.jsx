import { useState } from "react";


function InputBox() {

    const [content, setContent] = useState("");

    const handleAlert = () => {
        alert(content)
        setContent("")
    }

    const handleChange = (e) => {
        // console.log(e.target.value);
        const updateValue = e.target.value;
        setContent(updateValue);
    }

    return <div>
        <input type="text" value={content} onChange={handleChange} />
        <button onClick={handleAlert}>Alert Content</button>
    </div>
}

export default InputBox;

// React dont want that any UI Chnage happen without React . so input chnage which is happning by Html we have to give authority to React
//step-1- use state and make first content value " "
//step-2- use function handle onChange and make setContent(e.target.value)

//ControlComponenet -> your input component controlled by react intentionally. so input comp. callled controlled