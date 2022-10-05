import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { categoriesChanged } from './categoriesSlice';

import Select from 'react-select';

const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: 'black',
    }),
}

const defaultCategories = [
    { value: 'loading', label: 'Loading...' }
  ];

const Categories = () => {
    const [categories, setCategories] = useState(defaultCategories);
    const getCategories = () => {
        fetch('http://localhost:3000/categories')
        .then(response => response.json())
        .then(data => {
            const categoriesOptions = data.map((cat) => {return {value: cat, label: cat};})
            setCategories(categoriesOptions);
        }).catch((err)=>{
        console.log(err)
        })
    }

    useEffect(() => {
        getCategories();
    },[]);
    const dispatch = useDispatch();
    return (
            <div>Preffered categories: 
                <Select options={categories} 
                styles={customStyles}
                isMulti
                onChange={(e) =>{
                    dispatch(categoriesChanged(e))}}
                />
            </div>
    )
}
export default Categories;