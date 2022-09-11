import ResultsIndicators from "../ResultsIndicators";
import TaskItem from "../TaskItem";

const TaskList = ({ tasks = [], deleteTask, updateTask } = {}) => {

    return (
        <>
            <div className="col-span-2 h-full">
                <div className="bg-orange-100 border-2 border-gray-700 p-5 rounded-md h-auto shadow-black dark:bg-gray-600">
                    <h3 className="text-lg font-semibold text-gray-700 text-center dark:text-white">List of tasks</h3>
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