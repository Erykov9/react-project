import styles from './Container.module.scss';
import React from 'react';

const Container = props => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  )
}

export default Container;