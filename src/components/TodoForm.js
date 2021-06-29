import React, { useState, useEffect, useRef } from "react";

const TodoForm = (porps) => {
    const [input, setInput] = useState(porps.edit ? porps.edit.value : "");
    const inputRef = useRef(null);

    const handleChange = (e) => {
        setInput(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        porps.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
        });
        setInput("");
    };

    useEffect(() => {
        inputRef.current.focus();
    });

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {porps.edit ? (
                <>
                    <input
                        placeholder="Update your item"
                        value={input}
                        onChange={handleChange}
                        name="text"
                        className="todo-input edit"
                        ref={inputRef}
                    />
                    <button className="todo-button edit">Update</button>
                </>
            ) : (
                <>
                    <input
                        placeholder="Add a todo"
                        value={input}
                        onChange={handleChange}
                        name="text"
                        className="todo-input"
                        ref={inputRef}
                    />
                    <button className="todo-button">Add todo</button>
                </>
            )}
        </form>
    );
};

export default TodoForm;
