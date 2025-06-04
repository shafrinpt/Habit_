// import React, { useState } from 'react';
// import Habit from './components/Habit';

// const App = () => {
//   const [habits, setHabits] = useState([]);
//   const [input, setInput] = useState('');

//   const addHabit = () => {
//     if (input.trim() === '') return;
//     const newHabit = {
//       id: Date.now(),
//       name: input,
//       completed: false,
//     };
//     setHabits([...habits, newHabit]);
//     setInput('');
//   };

//   const toggleHabit = (id) => {
//     setHabits(
//       habits.map(habit =>
//         habit.id === id ? { ...habit, completed: !habit.completed } : habit
//       )
//     );
//   };

//   const deleteHabit = (id) => {
//     setHabits(habits.filter(habit => habit.id !== id));
//   };

//   return (
//     <div className="app">
//       <h1>Habit Tracker</h1>
//       <div className="input-area">
//         <input
//           type="text"
//           value={input}
//           onChange={e => setInput(e.target.value)}
//           placeholder="Enter a habit"
//         />
//         <button onClick={addHabit}>Add</button>
//       </div>
//       <div className="habit-list">
//         {habits.map(habit => (
//           <Habit
//             key={habit.id}
//             habit={habit}
//             toggleHabit={toggleHabit}
//             deleteHabit={deleteHabit}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
// import React from 'react';

// const Habit = ({ habit, toggleHabit, deleteHabit }) => {
//   return (
//     <div className={`habit ${habit.completed ? 'completed' : ''}`}>
//       <span onClick={() => toggleHabit(habit.id)}>{habit.name}</span>
//       <button onClick={() => deleteHabit(habit.id)}>❌</button>
//     </div>
//   );
// };

// export default Habit;
// body {
//     font-family: Arial, sans-serif;
//     background: #f2f2f2;
//     padding: 20px;
//   }
  
//   .app {
//      max-width: 500px;
  margin:0;
  background: rgb(222, 216, 216);
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 2px 2px rgba(0,0,0,0.1);
//   }
  
//   .input-area {
//     display: flex;
//     gap: 10px;
//     margin-bottom: 20px;
//   }
  
//   input {
//     flex: 1;
//     padding: 10px;
//     border-radius: 6px;
//     border: 1px solid #ccc;
//   }
  
//   button {
//     padding: 10px 15px;
//     border: none;
//     border-radius: 6px;
//     background: #4caf50;
//     color: white;
//     cursor: pointer;
//   }
  
//   .habit {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 10px;
//     margin-bottom: 10px;
//     border-bottom: 1px solid #eee;
//   }
  
//   .habit.completed span {
//     text-decoration: line-through;
//     color: #777;
//   }
  