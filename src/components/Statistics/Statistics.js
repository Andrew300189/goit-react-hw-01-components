import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <div className={styles.content}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <table className={styles.statTable}>
          <tbody>
            <tr>
              {stats.slice(0, 4).map((stat, index) => (
                <td key={index} className={styles.item}>
                  <p className={styles.label}>{stat.label}</p>
                  <p className={styles.percentage}>{stat.percentage}%</p>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
