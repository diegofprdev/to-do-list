import { v4 as uuidv4 } from 'uuid';

const add = ({ task = {} }) => {

    return new Promise((resolve, reject) => {

        try {
            task.id = uuidv4();
            const listOfTasksSaved = JSON.parse(localStorage.getItem('tasks-to-do-list')) || []
            const newListOfTasks = [
                ...listOfTasksSaved,
                task
            ]
            localStorage.setItem('tasks-to-do-list', JSON.stringify(newListOfTasks));
            resolve(task)
        }
        catch {
            reject(null)
        }
    })
}

const getAll = () => {

    return JSON.parse(localStorage.getItem('tasks-to-do-list')) || [];

}

const remove = ({ id = '' }) => {

    return new Promise((resolve, reject) => {

        try {
            const listOfTasksSaved = JSON.parse(localStorage.getItem('tasks-to-do-list')) || [];
            const listOfTasksUpdated = listOfTasksSaved.filter(task => task.id !== id);
            localStorage.setItem('tasks-to-do-list', JSON.stringify(listOfTasksUpdated));
            resolve(id)
        }
        catch {
            reject(null)
        }
    })
}

const update = ({ taskToUpdate = {} }) => {

    return new Promise((resolve, reject) => {

        try {
            const listOfTasksSaved = JSON.parse(localStorage.getItem('tasks-to-do-list')) || []
            const taskFound = listOfTasksSaved.find(task => task.id === taskToUpdate.id);
            if (taskFound) {
                //const taskIndex = listOfTasksSaved.indexOf(taskFound);
                taskFound.title = taskToUpdate.title;
                taskFound.description = taskToUpdate.description;
                taskFound.status = taskToUpdate.status;
                taskFound.date = taskToUpdate.date;
                //listOfTasksSaved.splice(taskIndex,0,taskFound);

                localStorage.setItem('tasks-to-do-list', JSON.stringify(listOfTasksSaved));
                resolve(taskFound)
            }
        }
        catch {
            reject(null)
        }
    })

}

export { add, getAll, remove, update }

