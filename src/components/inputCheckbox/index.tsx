import React from "react";
import style from './inputCheckbox.module.scss'
import { MdOutlineCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

export default function InputCheckbox(props: any) {

    const size = 30;
    const label = props.label || 'Componente padrão'
 
    let [checked, setChecked] = React.useState(props.checked || false);

    return (
        <div className={style.inputCheckbox} onMouseUp={()=>setChecked(!checked)} >
            {
                checked ?
                    <MdCheckBox size={size} className={style.checked} /> :
                    <MdOutlineCheckBoxOutlineBlank size={size} className={style.unchecked} />
            }
            <p>{label}</p>
        </div>
    )
}