import ResultsIndicators from "../ResultsIndicators";
import TaskItem from "../TaskItem";

const TaskList = ({ tasks = [], deleteTask, updateTask } = {}) => {

    return (
        <>
            <div className="col-span-2 h-full">
                <div className="bg-orange-100 border-2 border-gray-700 p-5 rounded-md h-auto shadow-black dark:bg-gray-600">
                    <h3 className="text-lg font-semibold text-gray-700 text-center dark:text-white">List of tasks</h3>
                    <div className="flex justify-center gap-3 pt-5">
                        <input className="bg-white w-40 md:w-60 pl-5 pr-5 rounded-md text-gray-700 focus:outline-none border-2 border-gray-700 focus:border-2 focus:border-gray-700 shadow-black dark:bg-gray-600 dark:text-white"
                            placeholder="Search..."
                            type="text" />
                        <select className="bg-white text-gray-700 rounded-md py-1 px-2 w-24 md:w-36 border-2 border-gray-700 focus:outline-none focus:border-2 focus:border-gray-7000 shadow-black dark:bg-gray-600 dark:text-white">
                            <option value="-1">All</option>
                            <option value="0">To do</option>
                            <option value="1">In progress</option>
                            <option value="3">Done</option>
                        </select>
                    </div>
                    <ResultsIndicators tasks={tasks}/>
                    <table className="bg-white table-auto w-full mt-5 border-2 border-gray-700 rounded-md border-separate border-spacing-y-3 shadow-black dark:bg-gray-600">
                        <thead className="text-gray-700 dark:text-white">
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-center text-md text-gray-600 dark:text-gray-200">
                            {
                                tasks.map(task => {
                                    return <TaskItem
                                        key={task.id}
                                        {...task}
                                        deleteTask={deleteTask}
                                        updateTask={updateTask}
                                    />
                                })
                            }
                        </tbody>
                        <thead className="text-gray-700 dark:text-white">
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                    </table>
                    <ResultsIndicators tasks={tasks}/>
                </div>
            </div>
        </>
    )
}

export default TaskList;