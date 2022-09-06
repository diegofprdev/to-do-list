import { useReducer } from 'react';

import { HiX } from "react-icons/hi";

const ACTIONS = {
    TITLE_TASK_FORM: 'title@task-form',
    DESCRIPTION_TASK_FORM: 'description@task-form',
    STATUS_TASK_FORM: 'status@task-form',
    DATE_TASK_FORM: 'date@task-form'
}

const ACTIONS_REDUCER = {

    [ACTIONS.TITLE_TASK_FORM]: (state, action) => ({
        ...state,
        title: action.payload
    }),
    [ACTIONS.DESCRIPTION_TASK_FORM]: (state, action) => ({
        ...state,
        description: action.payload
    }),
    [ACTIONS.STATUS_TASK_FORM]: (state, action) => ({
        ...state,
        status: action.payload
    }),
    [ACTIONS.DATE_TASK_FORM]: (state, action) => ({
        ...state,
        date: action.payload
    })
}

const taskFormReducer = (state, action) => {

    const actionReducer = ACTIONS_REDUCER[action.type];

    return actionReducer ? actionReducer(state, action) : state;

}

const ModalUpdateTask = ({ idTask = '', titleTask = '', descriptionTask = '', statusTask = '', dateTask = '', setShowModalUpdateTask, updateTask }) => {

    const [state, dispatch] = useReducer(taskFormReducer, {
        id : idTask,
        title : titleTask,
        description : descriptionTask,
        status : statusTask,
        date : dateTask
    });

    const { id, title, description, status, date } = state;

    const handleSubmit = (e) => {

        e.preventDefault();

        const taskToUpdate = {
            id,
            title,
            description,
            status,
            date
        }
        
        updateTask({ task : taskToUpdate });
        setShowModalUpdateTask(false);

    }

    return (
        <div className="bg-blue-100 fixed top-24 rounded-md inset-x-1/3 border-2 border-gray-700 shadow-black h-auto p-5 dark:bg-gray-800">
            <button
                onClick={() => setShowModalUpdateTask(false)}
                className="bg-gray-700 rounded-md px-1 py-1 float-right text-md text-white dark:bg-red-300 dark:text-gray-700">
                <HiX />
            </button>
            <form onSubmit={handleSubmit} className="h-full p-5">
                <h3 className="text-gray-700 font-semibold text-center text-lg pt-6 dark:text-white">Update Task</h3>
                <div className="flex pt-7">
                    <input
                        value={title}
                        onChange={(e) => dispatch({ type: ACTIONS.TITLE_TASK_FORM, payload: e.target.value })}
                        className="border-2 border-gray-700 text-gray-700 rounded-md py-1 px-4 w-full focus:outline-none focus:border-2 focus:border-rose-300 dark:bg-gray-700 dark:text-white dark:focus:border-emerald-300"
                        type='text'
                        placeholder="...title" />
                </div>
                <div className="flex pt-4">
                    <textarea className="border-2 border-gray-700 text-gray-700 rounded-md py-1 px-4 w-full focus:outline-none focus:border-2 focus:border-rose-300 dark:bg-gray-700 dark:text-white dark:focus:border-emerald-300"
                        value={description}
                        onChange={(e) => dispatch({ type: ACTIONS.DESCRIPTION_TASK_FORM, payload: e.target.value })}
                        type='text'
                        placeholder="...description" />
                </div>
                <div className="flex pt-4">
                    <select
                        value={status}
                        onChange={(e) => dispatch({ type: ACTIONS.STATUS_TASK_FORM, payload: e.target.value })}
                        className="border-2 border-gray-700 text-gray-700 rounded-md py-1 px-4 w-full focus:outline-none focus:border-2 focus:border-rose-300 dark:bg-gray-700 dark:text-white dark:focus:border-emerald-300">
                        <option value='to-do'>To do</option>
                        <option value='in-progress'>In progress</option>
                        <option value='done'>Done</option>
                    </select>
                </div>
                <div className="flex pt-4">
                    <input
                        value={date}
                        onChange={(e) => dispatch({ type: ACTIONS.DATE_TASK_FORM, payload: e.target.value })}
                        className="border-2 border-gray-700 text-gray-700 rounded-md py-1 px-4 w-full focus:outline-none focus:border-2 focus:border-rose-300 dark:bg-gray-700 dark:text-white dark:focus:border-emerald-300"
                        type='date' />
                </div>
                <button className="bg-emerald-200 border-2 border-gray-700 text-gray-700 font-semibold rounded-md py-1 px-4 mt-4 mb-1 w-full hover:bg-rose-200 shadow-black dark:bg-violet-400 dark:hover:bg-emerald-300">
                    Update Task
                </button>
            </form>
        </div>
    )
}

export default ModalUpdateTask;