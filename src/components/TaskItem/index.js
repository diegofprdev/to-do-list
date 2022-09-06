import { useState } from "react";

import { HiOutlinePencil, HiOutlineTrash, HiOutlineEye } from "react-icons/hi";
import ModalDeleteTask from "../ModalDeleteTask";
import ModalDetailTask from "../ModalDetailTask";
import ModalUpdateTask from "../ModalUpdateTask";

const STATUS_ITEM = {
    'to-do': {
        label: 'To do',
        color: '#fb7185'
    },
    'in-progress': {
        label: 'In progress',
        color: '#818cf8'
    },
    'done': {
        label: 'Done',
        color: '#34d399'
    }
}

const TaskItem = ({ id = '', title = '', description = '', status = 'to-do', date = '', deleteTask, updateTask }) => {

    const { label, color } = STATUS_ITEM[status]

    const [showModalDetailTask, setShowModalDetailTask] = useState(false)
    const [showModalDeleteTask, setShowModalDeleteTask] = useState(false)
    const [showModalUpdateTask, setShowModalUpdateTask] = useState(false)

    return (
        <>
            <tr>
                <td>{title}</td>
                <td>{description}</td>
                <td>
                    <span style={{ borderColor: color, color }} className={`border-2 rounded-md px-2`}>
                        {label}
                    </span>
                </td>
                <td>{date}</td>
                <td>
                    <span className="flex justify-center gap-2">
                        <span className="text-green-400 text-xl">
                            <HiOutlineEye
                                className="cursor-pointer"
                                onClick={() => setShowModalDetailTask(true)}
                            />
                        </span>
                        <span className="text-blue-400 text-xl">
                            <HiOutlinePencil
                                className="cursor-pointer"
                                onClick={() => setShowModalUpdateTask(true)} />
                        </span>
                        <span className="text-rose-400 text-xl">
                            <HiOutlineTrash
                                className="cursor-pointer"
                                onClick={() => setShowModalDeleteTask(true)}
                            />
                        </span>
                    </span>
                </td>
            </tr>
            {
                showModalDetailTask && <tr><td>
                    <ModalDetailTask
                        title={title}
                        description={description}
                        statusLabel={label}
                        statusColor={color}
                        date={date}
                        setShowModalDetailTask={setShowModalDetailTask} />
                </td></tr>
            }
            {
                showModalDeleteTask && <tr><td>
                    <ModalDeleteTask
                        id={id}
                        title={title}
                        setShowModalDeleteTask={setShowModalDeleteTask}
                        deleteTask={deleteTask} />
                </td></tr>
            }
            {
                showModalUpdateTask && <tr><td>
                    <ModalUpdateTask
                        idTask={id}
                        titleTask={title}
                        descriptionTask={description}
                        statusTask={status}
                        dateTask={date}
                        setShowModalUpdateTask={setShowModalUpdateTask}
                        updateTask={updateTask}
                    />
                </td></tr>
            }
        </>
    )
}

export default TaskItem;