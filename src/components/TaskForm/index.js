import { useReducer } from 'react';

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

const initialTaskForm = {
    title: '',
    description: '',
    status: 'to-do',
    date: ''
}

const taskFormReducer = (state, action) => {

    const actionReducer = ACTIONS_REDUCER[action.type];

    return actionReducer ? actionReducer(state, action) : state;

}

const TaskForm = ({ save } = {}) => {

    const [state, dispatch] = useReducer(taskFormReducer, initialTaskForm);

    const { title, description, status, date } = state;

    const handleSubmit = (e) => {

        e.preventDefault();

        const newTask = {
            title,
            description,
            status,
            date
        }

        save({ task: newTask });

    }

    return (
        <div className="h-full">
            <div className="bg-yellow-100 border-2 border-gray-700 rounded-md p-10 h-auto shadow-black dark:bg-gray-600">
                <form className="h-full" onSubmit={handleSubmit}>
                    <h3 className="text-gray-700 font-semibold text-center text-lg dark:text-white">Create Task</h3>
                    <div className="flex pt-7">
                        <input
                            value={title}
                            onChange={(e) => dispatch({ type: ACTIONS.TITLE_TASK_FORM, payload: e.target.value })}
                            className="border-2 border-gray-700 text-gray-700 rounded-md py-1 px-4 w-full focus:outline-none focus:border-2 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:focus:border-emerald-300"
                            type='text'
                            placeholder="...title" />
                    </div>
                    <div className="flex pt-4">
                        <textarea className="border-2 border-gray-700 text-gray-700 rounded-md py-1 px-4 w-full focus:outline-none focus:border-2 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:focus:border-emerald-300"
                            value={description}
                            onChange={(e) => dispatch({ type: ACTIONS.DESCRIPTION_TASK_FORM, payload: e.target.value })}
                            type='text'
                            placeholder="...description" />
                    </div>
                    <div className="flex pt-4">
                        <select
                            value={status}
                            onChange={(e) => dispatch({ type: ACTIONS.STATUS_TASK_FORM, payload: e.target.value })}
                            className="border-2 border-gray-700 text-gray-700 rounded-md py-1 px-4 w-full focus:outline-none focus:border-2 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:focus:border-emerald-300">
                            <option value='to-do'>To do</option>
                            <option value='in-progress'>In progress</option>
                            <option value='done'>Done</option>
                        </select>
                    </div>
                    <div className="flex pt-4">
                        <input
                            value={date}
                            onChange={(e) => dispatch({ type: ACTIONS.DATE_TASK_FORM, payload: e.target.value })}
                            className="border-2 border-gray-700 text-gray-700 rounded-md py-1 px-4 w-full focus:outline-none focus:border-2 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:focus:border-emerald-300"
                            type='date' />
                    </div>
                    <button className="bg-yellow-200 border-2 border-gray-700 text-gray-700 font-semibold rounded-md py-1 px-4 mt-4 mb-1 w-full hover:bg-indigo-200 shadow-black dark:bg-violet-400 dark:hover:bg-emerald-300">
                        Add Task
                    </button>
                </form>
            </div>
        </div>
    )
}

export default TaskForm;