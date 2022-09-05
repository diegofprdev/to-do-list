import { HiX } from "react-icons/hi";

const ModalDetailTask = ({ title = '', description = '', statusLabel = '', statusColor = '#000', date = '', setShowModalDetailTask }) => {

    return (
        <div className="bg-green-100 fixed top-24 rounded-md inset-x-1/3 border-2 border-gray-700 shadow-black h-auto p-5 dark:bg-gray-800">
            <button
                onClick={() => setShowModalDetailTask(false)}
                className="bg-gray-700 rounded-md px-1 py-1 float-right text-md text-white dark:bg-red-300 dark:text-gray-700">
                <HiX />
            </button>
            <h3 className="text-gray-700 font-semibold text-center text-lg pt-6 dark:text-white">Detail Task</h3>
            <p className="text-gray-700 font-semibold text-center text-md pt-2 dark:text-white">Title:</p>
            <p className="text-gray-700 text-center text-sm dark:text-gray-300">{title}</p>
            <p className="text-gray-700 font-semibold text-center text-md pt-2 dark:text-white">Description:</p>
            <p className="text-gray-700 text-center text-sm dark:text-gray-300">{description}</p>
            <p className="text-gray-700 font-semibold text-center text-md pt-2 dark:text-white">Status:</p>
            <span style={{ borderColor: statusColor, color : statusColor }} className={`border-2 rounded-md px-2 text-sm`}>{statusLabel}</span>
            <p className="text-gray-700 font-semibold text-center text-md pt-2 dark:text-white">Date:</p>
            <p className="text-gray-700 text-center text-sm dark:text-gray-300">{date}</p>
            <br />
        </div>
    )
}

export default ModalDetailTask;