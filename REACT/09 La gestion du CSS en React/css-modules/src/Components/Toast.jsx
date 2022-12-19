import React from 'react';
import styles from './Toast.module.css';

const Toast = ({ alertType, label, onClose }) => {
    return (
        <div className={[styles.Toast, styles[alertType]].join(" ")}>
        {label}
        <div className={styles.Close} onClick={onClose}>
            &times;
        </div>
        </div>
    );
};

export default Toast;
