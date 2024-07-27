import React from "react";
import style from './item.module.scss'
import { FaRegTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import InputCheckbox from "../inputCheckbox";

export default function Item(props : any) {

    let [over, setOver] = React.useState(false);
    let [click, setClick] = React.useState(false);
    
    const name = props.name;

    console.log(click);

    return (
        <div className={style.item} onMouseOver={() => setOver(true)} onMouseOut={() => setOver(false)} onMouseUp={() => setClick(true)}>
            <InputCheckbox checked={false} label={name} />
            {
                over ?
                    <div className={style.actions}>
                        <GoPencil size={20} className={style.itemAction} />
                        <FaRegTrashAlt size={20} className={style.itemAction} />
                    </div>
                    : <div></div>
            }
        </div>
    )
}