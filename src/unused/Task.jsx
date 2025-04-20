import { FaTrashAlt } from "react-icons/fa";

export default function Task ({
    id,
    name, 
    handleDelete
}) {

    return (
            <>
            <li className='li-block' key={id} id={id}>{name}<button onClick={() => handleDelete(id)} className="button-right"><FaTrashAlt /></button></li>
            </>
    );
}