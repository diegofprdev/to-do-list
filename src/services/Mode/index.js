const getDefault = () => {
    return localStorage.getItem('mode-to-do-list') || 'light';
}

const change = ({ newMode = 'light'} = {}) => {
    localStorage.setItem('mode-to-do-list', newMode);
}

export { change, getDefault }