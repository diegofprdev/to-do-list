import { useState, useEffect } from 'react';

import { add, getAll, remove, update } from '../services/Task'

export const useTask = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(getAll());
    },[])

    const addTask = async ({ task = {} }) => {
        await add({ task });
        setTasks(getAll());
    }

    const deleteTask = async ({ id = ''}) => {
        await remove({ id });
        setTasks(getAll());
    }

    const updateTask = async ({ task = {}}) => {
        await update({ taskToUpdate : task });
        setTasks(getAll());
    }

    return { addTask, deleteTask, updateTask, tasks }
}
