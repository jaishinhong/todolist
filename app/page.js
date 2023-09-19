"use client";
import { useState } from "react";

export default function Home() {
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input) {
            const newTask = { task: input, status: false };
            setTasks([newTask, ...tasks]);
        }
        setInput("");
    };

    const handleCheckbox = (index) => {
        const newTasks = [...tasks];
        newTasks[index].status = !newTasks[index].status;
        setTasks(newTasks);
    };

    const handleDelete = (i) => {
        const newTasks = tasks.filter((_, index) => index !== i);
        setTasks(newTasks);
    };

    return (
        <>
            <div className="max-w-md m-auto mt-20">
                <form className="flex gap-2 h-14 mb-5" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="flex-1 ring-1 ring-black rounded-md px-3"
                        placeholder="create new task..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button className="bg-green-500 rounded-md text-white px-5">
                        Add
                    </button>
                </form>
                <section className="flex flex-col gap-3">
                    {tasks.map((el, index) => (
                        <div className="flex gap-5" key={index}>
                            <input
                                type="checkbox"
                                checked={el.status}
                                onChange={() => handleCheckbox(index)}
                            />
                            <h1
                                className={`${
                                    el.status && "line-through"
                                } text-xl flex-1 break-all`}
                            >
                                {el.task}
                            </h1>
                            <button
                                className="rounded-md px-3 py-1 bg-red-500 text-white self-center"
                                onClick={() => handleDelete(index)}
                            >
                                delete
                            </button>
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
}
