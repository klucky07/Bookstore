import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
export const Backbutton=({destination ='/'})=>{
    return <div className="flex">
        <Link to={destination } className="bg-sky-800 text-white px-4 y-1 rounded-lg  w-fit">
         <BsArrowLeft/>
        </Link>

    </div>
}