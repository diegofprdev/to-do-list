import { useEffect, useState } from "react";

import { change, getDefault } from '../services/Mode';

export const useMode = () => {

    const [mode, setMode] = useState(getDefault());

    const changeMode = () => {
        setMode(prevMode => {
            if (prevMode === 'light') return 'dark'
            else return 'light'
        })
    }

    useEffect(() => {
        change({ newMode : mode });
        if(mode === 'light') window.document.documentElement.classList.remove('dark')
        else window.document.documentElement.classList.add('dark')
    },[mode])

    return { mode, changeMode }
}
