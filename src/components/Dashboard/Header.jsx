import React from 'react';
import styles from '../../styles/Dashboard/Header.module.css'; // Import your CSS styles
import { FaSearch } from 'react-icons/fa'; // Importing an icon for the search bar
import { MdNotifications } from 'react-icons/md'; // Notification icon
//import userProfile from '../assets/profile.jpg'; // Placeholder profile image

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      {/* Greeting Section */}
      <div className={styles.greeting}>
        <h2>Hey, Pragalya <span role="img" aria-label="wave">👋</span></h2>
      </div>

      {/* Right section with search, date, notification and profile */}
      <div className={styles.rightSection}>


        {/* Date and Notification */}
        <div className={styles.dateAndNotification}>
          <div className={styles.date}>
            Thu, 15 Aug
          </div>
          <div className={styles.notification}>
            <MdNotifications />
            <span className={styles.notificationBadge}>3</span>
          </div>
        </div>

        {/* Profile Picture */}
        {/* <div className={styles.profile}>
          <img src={userProfile} alt="User Profile" className={styles.profileImg} />
          <span className={styles.onlineStatus}></span> {/* Online Status Indicator */
        // </div> 
        }
        
      </div>
    </div>
  );
}

export default Header;
