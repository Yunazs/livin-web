import {useState} from 'react'
import "./checkbox.css"

const Checkbox = () =>{
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
      setIsChecked(!isChecked);
    };

    return(
        <div className="ui-checkbox">
            <div className="checkmark"></div>
        </div>
    )
}
export default Checkbox
