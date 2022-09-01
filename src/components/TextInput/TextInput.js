import styles from './TextInput.module.scss';
import React from 'react';

const TextInput = props => {
    return (<input className={styles.input} value={props.value} onChange={props.onChange} placeholder={props.placeholder} type="text" />);
};

export default TextInput;