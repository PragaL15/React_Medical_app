import React from 'react';
import SimpleSidebar from '../components/SideNav'; 
import UpcommingReport from '../components/Dashboard/UpcomingAppoinment';
import PastPrescription from '../components/Dashboard/PastPrescription';
import styles from '../styles/Dashboard/Dashboard.module.css';
import PersonalDetails from '../components/Dashboard/PersonalDetails';
import About from '../components/About/About';
import Header from '../components/Dashboard/Header'

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <SimpleSidebar className={styles.sidebar} />

      <div className={styles.flexing}>
        <Header/>
        <div className={styles.details}>
          <PersonalDetails />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.content1}>
            <UpcommingReport />
          </div>
          <div className={styles.content2}>
            <PastPrescription />
          </div>
        </div>
        <About/>
      </div>
    </div>
  );
}
