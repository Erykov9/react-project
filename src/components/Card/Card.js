import styles from './Card.module.scss';
import React from 'react';

const Card = props => {
    return (
        <li className={styles.card}>{props.title}</li>
    );
};

export default Card;