import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addInput } from '../../redux/store';



const SearchForm = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const test = e => {
    e.preventDefault();
    dispatch(addInput(input));
    setInput('');
  }



  return (
    <form className={styles.searchForm} onSubmit={test}>
        <TextInput placeholder="Search…" onChange={e => setInput(e.target.value)}/>
        <Button>
          <span className="fa fa-search" />
        </Button>
    </form>
);
};

export default SearchForm;