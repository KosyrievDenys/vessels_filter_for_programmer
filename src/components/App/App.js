import styles from './App.module.scss';
import '../../index.scss';
import Vessels from "../common/Vessels/Vessels";

function App() {
  return (
    <div className={styles.app}>
      <Vessels />
    </div>
  );
}

export default App;
