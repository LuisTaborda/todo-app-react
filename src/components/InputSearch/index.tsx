import React from 'react';
import style from './InputSearch.module.scss'
import { CiSearch } from "react-icons/ci";

function InputSearch() {
    return (
        <div className={style.inputSearch}>
            <input type="text" placeholder='Search note...' name="search" id="search" />
            <label htmlFor="search">
                <CiSearch size={25} className={style.icon}/>
            </label>
        </div>
    )
}

export default InputSearch;