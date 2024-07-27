import React from "react";
import style from './buttonFilter.module.scss'
import { IoIosArrowDown } from "react-icons/io";

export default function ButtonFilter() {
    return (
        <div className={style.buttonFilter}>
            <select name="filter" id="filter">
                <option value="all">ALL</option>
            </select>
            <label htmlFor="filter">
                <IoIosArrowDown/>
            </label>
        </div>
    )
}