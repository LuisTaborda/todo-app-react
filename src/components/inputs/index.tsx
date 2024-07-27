import React from "react";
import style from './inputs.module.scss';

import InputSearch from "../InputSearch";
import ButtonFilter from "../buttonFilter";

export default function Inputs() {
    return (
        <div className={style.inputs}>
            <div className={style.item}>
                <InputSearch />
            </div>
            <div className={style.item}>
                <ButtonFilter />
            </div>
        </div>
    )
}

