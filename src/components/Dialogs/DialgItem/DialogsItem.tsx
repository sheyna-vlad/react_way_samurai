import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css';
import { PropsDialogItemType } from '../Dialogs';


 export function DialogItem(props: PropsDialogItemType) {
    return (

        <div className={s.dialog}>
            <NavLink to={'/dialogs/2' + props.id}>{props.name}</NavLink>
        </div>
    );

}



