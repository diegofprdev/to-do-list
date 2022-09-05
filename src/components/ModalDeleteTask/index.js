import { HiX } from "react-icons/hi";

const ModalDeleteTask = ({ id = '', title = '', setShowModalDeleteTask, deleteTask }) => {

    const handleClickDelete = () => {
        deleteTask({ id });
        setShowModalDeleteTask(false);
    }

    return(
        <div className="bg-rose-100 fixed top-24 rounded-md inset-x-1/3 border-2 border-gray-700 shadow-black h-auto p-5 dark:bg-gray-800">
            <button
                onClick={() => setShowModalDeleteTask(false)}
                className="bg-gray-700 rounded-md px-1 py-1 float-right text-md text-white dark:bg-red-300 dark:text-gray-700">
                <HiX />
            </button>
            <h3 className="text-gray-700 font-semibold text-center text-lg pt-6 dark:text-white">Delete Task</h3>
            <p className="text-gray-700 text-center text-md pt-2 dark:text-white">
                ¿Are you sure you want to delete the task :
                &nbsp;
                <span className="font-semibold dark:text-orange-200">
                    {title}
                </span>
                ?
            </p>
            <div className="flex justify-center gap-8 pt-6">
                <button 
                onClick={() => setShowModalDeleteTask(false)}
                className="bg-indigo-300 border-2 border-gray-700 shadow-black px-2 py-1 rounded-md text-gray-700">Cancel</button>
                <button 
                onClick={handleClickDelete}
                className="bg-rose-300 border-2 border-gray-700 shadow-black px-2 py-1 rounded-md text-gray-700">Delete</button>
            </div>
            <br/>
        </div>
    )
}

export default ModalDeleteTask;