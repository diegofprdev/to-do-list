import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

import { useMode } from '../../hooks/useMode'

const ModeStyle = () => {

    const { mode, changeMode } = useMode();

    const IconMode = mode === 'light' ? HiOutlineMoon : HiOutlineSun;

    return (
        <button onClick={changeMode} className="text-xl text-gray-700 px-2 rounded-md bg-violet-200 dark:bg-orange-200">
            <IconMode />
        </button>
    )
}

export default ModeStyle;