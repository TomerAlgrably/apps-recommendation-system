import { useSelector, useDispatch } from 'react-redux';
import { recommendationsChanged } from '../recommendations/recommendationsSlice';
import Rating  from '../rating/Rating'
import Categories  from '../categories/Categories'
import Birthdate  from '../birthdate/Birthdate'

const Filters = () => {
    const dispatch = useDispatch();
    const birthdate = useSelector((state) => state.birthdate.birthdate);
    const categories = useSelector((state) => state.categories.selectedCategories);
    const minRating = useSelector((state) => state.rating.minRating);

    const validate = () => {
        let birthdateValidated = false;
        let categoriesValidated = false;
        let ratingValidated = false;
        if (birthdate !== null) birthdateValidated = true;
        if (categories.length >= 3) categoriesValidated = true;
        if (minRating !== -1) ratingValidated = true;
        console.log(minRating);

        if (birthdateValidated && categoriesValidated && ratingValidated) return true;
        const errorMessage = (!birthdateValidated ? " Please enter your birthdate\n" : "") + (!categoriesValidated ? " Please select 3 categories minimum\n" : "") + (!ratingValidated ? " Please select minimum rating\n" : "");
        alert(errorMessage)
        return false;
    }
    const getResults = () => {
        if (!validate()) return;
        fetch('http://localhost:3000/recommendation', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
             "birthday": birthdate,
             "categories": categories,
             "min_rating": minRating
            })
           }).then(response => response.json())
           .then(data => {
            dispatch(recommendationsChanged(data));
            //    const categoriesOptions = data.map((cat) => {return {value: cat, label: cat};})
            //    setCategories(categoriesOptions);
           }).catch((err)=>{
           console.log(err)
           });
        }
    return (    
            <div>
                <Birthdate/>
                <Categories/>
                <Rating/>
                <button className="App-btn" onClick={()=>getResults()}>
                    <span>Submit</span>
                </button>
            </div>
    )
}
export default Filters;