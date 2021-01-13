import React from 'react';
import { useState } from 'react';
import './Todo.scss';

function Todo() {
	const [toDo, setToDo] = useState("");
	const [toDoList, setToDoList] = useState([]);



	const onSubmit = () => {
		if (toDo === "") return;
		setToDoList([...toDoList, {task : toDo, id : toDoList.length+1 }]);
		setToDo("");
	};

	const deleteItem = (i) => {
	const afterDelete =	toDoList.filter((todo) => todo.id !== i)
	setToDoList(afterDelete);
	}

	return (
		<div className="Todo">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					onSubmit();
				}}>
				<h3>Todo List:</h3>
				<p>Make a Todo list (add & delete options):</p>
				<input placeholder="Your task..." value={toDo} onChange={(e) => setToDo(e.target.value)} />
				<button type="submit">Add task</button>
			</form>
			<ul>
				{
					toDoList.map((todo) => {
						return <li key={todo.id}>{todo.task}  <button onClick={() => deleteItem(todo.id)}>delete</button></li>
					})}
			</ul>
		</div>
	)
}

export default Todo;
