import React from 'react';
import s from './../Dialogs.module.css';
import { PropsMessageType } from '../Dialogs';



 export function Message(props: PropsMessageType) {
    return (
        <div className={s.message}>{props.message}</div>
    );

}


