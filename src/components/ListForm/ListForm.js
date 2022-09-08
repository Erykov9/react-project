
import styles from './ListForm.module.scss';
import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addList } from "../../redux/store";
import shortid from 'shortid';

const ListForm = () => { 

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    dispatch(addList({ id: shortid(), title, description}));
    setTitle('');
    setDescription('');
  }

  return (
    <form onSubmit={submitHandler} className={styles.listForm}>
      <label>Title:</label> 
      <TextInput type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} />
      <label>Description:</label>
      <TextInput type="text" id="icon" value={description} onChange={e => setDescription(e.target.value)} />
      <Button>Add list</Button>
    </form>
    );
}

export default ListForm;