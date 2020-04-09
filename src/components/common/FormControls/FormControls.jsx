import React from 'react';
import s from './FormControls.module.css'


export const FormControl = ({meta: {touched, error}, ...props}) => {
    return (
        <div>
            {props.children}
            <div>
                {touched && (error && <span className={s.error}>{error}</span>)}
            </div>
        </div>
    )
};


export const Textarea = (props) => {
    return (
        <FormControl {...props} ><textarea {...props.input} placeholder={props.placeholder}/></FormControl>
    )
}

export const Input = (props) => {
    return (
        <FormControl {...props} ><input {...props.input} placeholder={props.placeholder}/></FormControl>
    )
}