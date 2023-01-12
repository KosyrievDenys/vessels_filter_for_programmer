import React from "react";
// components
import { Vessels } from "../common/Vessels/Vessels";
// assets
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Vessels />
    </div>
  );
}

export default App;
