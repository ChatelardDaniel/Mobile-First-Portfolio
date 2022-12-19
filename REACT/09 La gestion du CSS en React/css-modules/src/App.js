import React, { useState } from 'react';
import styles from './App.module.css';
import Toast from './Components/Toast';

function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [showDanger, setShowDanger] = useState(false);

  const handleCloseInfo = () => setShowInfo(false);
  const handleCloseSuccess = () => setShowSuccess(false);
  const handleCloseWarning = () => setShowWarning(false);
  const handleCloseDanger = () => setShowDanger(false);

  const toggleVisibility = (event) => {
    switch(event.target.id) {
      case "Info": setShowInfo(!showInfo); break;
      case "Success": setShowSuccess(!showSuccess); break;
      case "Warning": setShowWarning(!showWarning); break;
      case "Danger": setShowDanger(!showDanger); break;
      default: setShowInfo(!showInfo);
    }
  }

  return (
    <div className={styles.App}>
      <div className={styles.Actions}>
        <button type="button" id="Info" onClick={toggleVisibility}>Afficher toast "Info"</button>
        <button type="button" id="Success" onClick={toggleVisibility}>Afficher toast "Success"</button>
        <button type="button" id="Warning" onClick={toggleVisibility}>Afficher toast "Warning"</button>
        <button type="button" id="Danger" onClick={toggleVisibility}>Afficher toast "Danger"</button>
      </div>

      <div className={styles.Toasts}>
        {showInfo 
          ? <Toast
            alertType="Info"
            label="toast Info"
            onClose={handleCloseInfo}
          />
          : null}

        {showSuccess 
          ? <Toast
            alertType="Success"
            label="toast Success"
            onClose={handleCloseSuccess}
          />
          : null}

        {showWarning 
          ? <Toast
            alertType="Warning"
            label="toast Warning"
            onClose={handleCloseWarning}
          />
          : null}

        {showDanger 
          ? <Toast
            alertType="Danger"
            label="toast Danger"
            onClose={handleCloseDanger}
          />
          : null}
      </div>

    </div>
  );
}

export default App;
