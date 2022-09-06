const ResultsIndicators = ({ tasks = []}) => {

    const totalTasksToDo = tasks.filter(task => task.status === 'to-do').length;
    const totalTasksInProgress = tasks.filter(task => task.status === 'in-progress').length;
    const totalTasksDone = tasks.filter(task => task.status === 'done').length;

    return (
        <div className="flex justify-center gap-3 mt-6">
            <span className="bg-sky-200 px-3 py-1 rounded-md text-sm border-2 border-gray-700 dark:bg-sky-400">Search total: {tasks.length}</span>
            <span className="bg-rose-200 px-3 py-1 rounded-md text-sm border-2 border-gray-700 dark:bg-rose-400">To do: {totalTasksToDo}</span>
            <span className="bg-indigo-200 px-3 py-1 rounded-md text-sm border-2 border-gray-700 dark:bg-indigo-400">In progress: {totalTasksInProgress}</span>
            <span className="bg-emerald-200 px-3 py-1 rounded-md text-sm border-2 border-gray-700 dark:bg-emerald-400">Done: {totalTasksDone}</span>
        </div>
    )
}

export default ResultsIndicators