import { useSelector, useDispatch } from 'react-redux';
import { chooseRating } from './ratingSlice';

import Select from 'react-select'

const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: 'black',
    }),
}

const options = Array.from({length: 5}, (_, i) => 
                {i = i + 1; return { value: i, label: i.toString() }} );


const Rating = () => {
    const minRating = useSelector((state) => state.rating.minRating);
    const dispatch = useDispatch();
    return (
            <div>Minimum rating: <Select options={options} 
                defaultValue={minRating.toString()}
                styles={customStyles}
                onChange={(e) =>{dispatch(chooseRating(e.value))}}/>
            </div>
    )
}
export default Rating;