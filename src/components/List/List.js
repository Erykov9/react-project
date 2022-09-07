import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { getAllColumns, getListById } from '../../redux/store';

const List = () => {

  const columns = useSelector(getAllColumns);
  const listData = useSelector(getListById);
  console.log(listData)
  console.log(columns)


  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h1 className={styles.title}>Things to do <span>soon!</span></h1>
      </header>
        <p className={styles.description}>Interesting things i want to check out</p>
        <section className={styles.columns}>
         {columns.map(column => <Column key={column.id} {...column} />)}
        </section>
        <ColumnForm />
    </div>
  );
};

export default List;