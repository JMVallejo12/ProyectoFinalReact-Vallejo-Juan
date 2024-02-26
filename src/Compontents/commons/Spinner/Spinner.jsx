import { CircleLoader } from "react-spinners";
import './spinnerStyle.css'

function Spinner(){

    return(
        <div className="spinner-container">   
            <CircleLoader color="#000000"
            size={150} />
        </div>
    )
}

export default Spinner