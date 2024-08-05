import React from 'react'
import InputBox from './InputBox';
import ListItem from './ListItem';
import { useState } from 'react';

function Shopping() {

  //for input  state handle
  const [content, setContent] = useState("");

  //With State Item Add => for list Ui
  const [tasks, setTasks] = useState([]);

  const handleInput = (e) => {
    setContent(e.target.value)
  }

  //React Says : jo bhi uss time pe state pe rahega .main waisa UI render karunga [t.s:01:26:27]
  //input value ko "tasks" array main add karo  -> waha se content pe -> after that at the end content empty-> 3 work
  const handleAddItem = () => {

    //Input value
    const newItem = content;

    //add task in to array -> dont push ,just copy of task array and copied NewArray to setTask

    //! 1st way
    const newArr = [];
    for (let i = 0; i < tasks.length; i++) {
      newArr.push(tasks[i]);
    }
    newArr.push(newItem);
    setTasks(newArr);


    //! 2nd way
    // const newArr = [...tasks]
    // newArr.push(newItem);
    // setTasks(newArr);

    //make content empty
    setContent("")
  }

  ///Delete is special because you want delete one list and array full of list so whole array cant be delete. for that solution
  const handleDelete = (index) => {
    const fillterArray = []
    for (let i = 0; i < tasks.length; i++) {
      if (i != index) {
        fillterArray.push(tasks[i]);
      }
    }
    setTasks(fillterArray);
  }


  return (
    <div className='shopping-list'>
      <InputBox handleInput={handleInput} content={content} handleAddItem={handleAddItem}></InputBox>
      <h2>Shopping Cart List</h2>
      <ListItem handleDelete={handleDelete} tasks={tasks}></ListItem>
    </div>
  )
}

export default Shopping;

//-> Steps To Think In React While Making Project

//1. Satatic Ui
//2. then think interactive and think where is add event
//3. identify daynamic data and their form of data we want(here array)
  //A. after finding Form add that to state
  //B. add that state to your componenet
//4. fill in the logic -> according to user interaction
  //A you dont touch the original state variable
//5 divide REUSABLE part of code into components & pass the props
//6. move that compo in different files

// <div><span>Task</span><button onClick={handleDelete}>Delete</button></div>
//  <div><span>Task</span><button onClick={handleDelete}>Delete</button></div>
//  <div><span>Task</span><button onClick={handleDelete}>Delete</button></div>
// ->  to get data dynamically from array








