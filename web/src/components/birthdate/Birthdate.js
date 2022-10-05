import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { chooseBirthdate } from './birthdateSlice';
import DatePicker from 'react-date-picker';

const Birthdate = () => {
    const dispatch = useDispatch();
    const [pickerBirthdate, setPickerBirthdate] = useState(new Date(new Date().setFullYear(new Date().getFullYear() - 15)));

    return (
            <div>Birthdate: 
                <div style={{background:'white'}}>
                    <DatePicker onChange={(e)=>{
                        setPickerBirthdate(e);
                        if (e) {
                            dispatch(chooseBirthdate(e.toLocaleDateString("en-US")));
                        } else {
                            dispatch(chooseBirthdate(null));
                        }}}
                        
                        value={pickerBirthdate} />
                </div>                
            </div>
    )
}
export default Birthdate;