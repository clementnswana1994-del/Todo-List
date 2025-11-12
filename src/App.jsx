import React from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
      <TodoForm/>
    </div>
  );
}

export default App;

