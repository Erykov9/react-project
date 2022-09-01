import React from "react";
import styles from "./Column.module.scss";
import CardForm from '../CardForm/CardForm.js';
import Card from '../Card/Card.js';
import { useSelector } from "react-redux";

const Columns = props => {

  const cards = useSelector(state => state.cards.filter(card => card.columnId === props.id));

  return (
    <article className={styles.column}>
      <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h2>
      <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} title={card.title} />)}
      </ul>
      <CardForm columnId={props.id} action={props.addCard} />
    </article>)
}

export default Columns;