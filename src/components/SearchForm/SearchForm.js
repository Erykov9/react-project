import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addInput, inputValue } from '../../redux/searchStringRedux';

const SearchForm = () => {

  const inputVal = useSelector(inputValue);
  const [input, setInput] = useState(inputVal);
  const dispatch = useDispatch();

  const test = e => {
    e.preventDefault();
    dispatch(addInput(input));
    setInput('');
    e.target.value = '';
  }

  return (
    <form className={styles.searchForm} onSubmit={test}>
        <TextInput placeholder="Search…" value={input} onChange={e => setInput(e.target.value)}/>
        <Button>
          <span className="fa fa-search" />
        </Button>
    </form>
);
};

export default SearchForm;