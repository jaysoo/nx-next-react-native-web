import styles from './next-library.module.css';

/* eslint-disable-next-line */
export interface NextLibraryProps {}

const NextLibrary = (props: NextLibraryProps) => {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NextLibrary!</h1>
    </div>
  );
};

export default NextLibrary;
