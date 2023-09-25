import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={styles.avatar}
        />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>

        <table className={styles.statsTable}>
        <tbody>
          <tr>
            <td className={styles.statCell}>
              <p className={styles.statLabel}>Followers</p>
              <p className={styles.statNumber}>{stats.followers}</p>
            </td>
            <td className={styles.statCell}>
              <p className={styles.statLabel}>Views</p>
              <p className={styles.statNumber}>{stats.views}</p>
            </td>
            <td className={styles.statCell}>
              <p className={styles.statLabel}>Likes</p>
              <p className={styles.statNumber}>{stats.likes}</p>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
