import { useState, useEffect } from 'react';

import { add, getAll, remove } from '../services/Task'

export const useTask = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(getAll());
    },[])

    const save = async ({ task = {} }) => {
        await add({ task });
        setTasks(getAll());
    }

    const deleteTask = async ({ id = ''}) => {
        await remove({ id });
        setTasks(getAll());
    }

    return { save, deleteTask, tasks }
}
