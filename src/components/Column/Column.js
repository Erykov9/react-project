import React from "react";
import styles from "./Column.module.scss";
import CardForm from '../CardForm/CardForm.js';
import Card from '../Card/Card.js';

const Columns = props => {
  return (
    <article className={styles.column}>
      <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}></span>{props.title}</h2>
      <ul className={styles.cards}>
        {props.cards.map(card => <Card key={card.id} title={card.title} />)}
      </ul>
      <CardForm columnId={props.id} action={props.addCard} />
    </article>)
}

export default Columns;