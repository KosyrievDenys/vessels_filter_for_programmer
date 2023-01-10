import styles from './App.module.scss';
import '../../index.scss';
import InputSelected from "../common/InputSelected";

function App() {
  return (
    <div className={styles.app}>
      <InputSelected />
    </div>
  );
}

export default App;
