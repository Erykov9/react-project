import styles from './Card.module.scss';
import React from 'react';
import { addFavorite } from '../../redux/store';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';



const Card = props => {
    const dispatch = useDispatch();
    const [fav, setFav] = useState(props.isFavorite);


    const clickHandler = e => {
        e.preventDefault();
        if(fav === false) {
            setFav(true);
        } else if (fav === true) {
            setFav(false);
        };
        dispatch(addFavorite(props.targetCard));
    };

    return (
        <li className={styles.card}>{props.title}<button onClick={clickHandler} className={clsx(fav && styles.isActive)}><span className={'fa fa-star-o'}></span></button></li>
    );
};

export default Card;                                                            