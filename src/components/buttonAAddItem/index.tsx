import React from "react";
import style from './buttonAddItem.module.scss';
import { IoMdAddCircle } from "react-icons/io";

export default function ButtonAddItem(){
    return (
        <div className={style.icon}>
            <IoMdAddCircle size={50}/>
        </div>
    )
}