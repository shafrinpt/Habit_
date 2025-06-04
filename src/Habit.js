import React, { useState } from 'react'
import './App.css'
const Habit = () => {
    const[input,setInput] = useState('');
    const[habit,setHabit]=useState([]);

    const addHabit = () =>{
        if(input.trim() === '')return;
        setHabit([...habit,input])
        setInput('')
    }
    const deleteHabit = (id) =>{
            setHabit(habit.filter(habits=>habits.id !== id));
    }
    const editHabit = (id) =>{
        setHabit(
                habit.map(habits =>
                   habits.id === id ? { ...habits, completed: !habits.completed } : habits
                   )
               );
    }
  return (
    <div className='habit-tracker'>
        <h1 >Habit Tracker</h1>
        <div className='habit'>
        <input type='text' value={input} placeholder='Daily Habits' onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={addHabit}>Add Habit</button>
        <div className='habit-value'>
        {habit.map((val)=>(
            <li>
                {val}
            <button onClick={() => deleteHabit(habit.id)}>delete</button>    
            <button onClick={editHabit}>update</button>
           </li>
         
            
         ))}
         </div>
         
        </div>
    </div>
  )
}

export default Habit