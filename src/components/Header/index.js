import { HiOutlineBookmarkAlt } from "react-icons/hi";

import ModeStyle from "../ModeStyle";

const Header = ({ totalTasks = 0 }) => {

    return (
        <>
            <nav className="bg-white h-16 border-solid border-b-2 border-gray-700 flex justify-between p-3 text-gray-900 dark:bg-gray-800 sticky top-0">
                <div className="flex gap-3 p-1">
                    <div className="flex gap-2">
                        <div className="text-2xl pt-1 text-gray-700 dark:text-white">
                            <HiOutlineBookmarkAlt />
                        </div>
                        <h3 className="text-gray-700 font-semibold text-xl pt-0.5 dark:text-white">To do list</h3>
                        <span className="bg-lime-200 text-gray-700 text-md font-semibold rounded-md py-1 px-2 dark:bg-green-200">
                            {totalTasks}
                        </span>
                    </div>
                </div>
                <ModeStyle />
            </nav>
        </>
    )
}

export default Header;