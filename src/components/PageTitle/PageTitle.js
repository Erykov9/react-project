import styles from './PageTitle.module.scss';

const PageTitle = (props) => { 
  return (
    <div className={styles.pageTitle}>
      <h2 className={styles.title}>{props.children}</h2>
    </div>
  )
};

export default PageTitle;