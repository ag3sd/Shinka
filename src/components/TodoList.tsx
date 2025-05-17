import React, { useState } from 'react';

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<{ id: number; text: string; completed: boolean }[]>([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim()) {
            const newTodo = {
                id: Date.now(),
                text: inputValue,
                completed: false,
            };
            setTodos([...todos, newTodo]);
            setInputValue('');
        }
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="border p-2 w-full mb-2"
                placeholder="Add a new todo"
            />
            <button onClick={addTodo} className="bg-blue-500 text-white p-2 w-full">
                Add Todo
            </button>
            <ul className="mt-4">
                {todos.map(todo => (
                    <li key={todo.id} className="flex justify-between items-center mb-2">
                        <span className={todo.completed ? 'line-through' : ''}>
                            {todo.text}
                        </span>
                        <div>
                            <button onClick={() => toggleTodo(todo.id)} className="bg-green-500 text-white p-1 mr-2">
                                {todo.completed ? 'Undo' : 'Complete'}
                            </button>
                            <button onClick={() => removeTodo(todo.id)} className="bg-red-500 text-white p-1">
                                Remove
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;