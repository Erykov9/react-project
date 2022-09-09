import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { getColumnsByList} from '../../redux/columnsRedux';
import SearchForm from '../SearchForm/SearchForm';
import { useParams, Navigate } from 'react-router-dom';
import { getListById } from '../../redux/listsRedux';

const List = (props) => {

  const { listId } = useParams();

  const listData = useSelector((state) => getListById(state, listId));
  const getColumns = useSelector((state) => getColumnsByList(state, listId));


  if(!listData) return <Navigate to="/" />
    return (
      <div className={styles.list}>
        <header className={styles.header}>
          <h1 className={styles.title}>{listData.title} <span>soon!</span></h1>
        </header>
          <p className={styles.description}>{listData.description}</p>
          <SearchForm />
          <section className={styles.columns}>
          {getColumns.map(column => <Column key={column.id} {...column} />)}
          </section>
          <ColumnForm listId={listId}/>
      </div>
    );
};

export default List;