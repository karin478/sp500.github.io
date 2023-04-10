import React, { useState, useEffect } from 'react';
import fetchData from '../fetchData';
import PredictionChart from '../components/PredictionChart';
import styles from '../styles/HomePage.module.css';

const HomePage = () => {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const scheduleFetch = () => {
      const now = new Date();
      const targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 6, 0, 0);
      if (now > targetTime) {
        targetTime.setDate(targetTime.getDate() + 1);
      }
      const delay = targetTime - now;
      setTimeout(() => {
        fetchAndSetData();
        scheduleFetch();
      }, delay);
    };

    const fetchAndSetData = async () => {
      const data = await fetchData();
      const sevenDaysData = data.slice(0, 7).map((price, index) => ({ day: `Day ${index + 1}`, price }));
      setPredictions(sevenDaysData);
    };

    fetchAndSetData();
    scheduleFetch();
  }, []);

  return (
    <div className={styles.home}>
      <h1>Welcome to the AI SP500 Predictor</h1>
      <p>
        Discover how our cutting-edge artificial intelligence model can help you
        predict future SP500 prices.
        </p>
  <div className={styles.chartContainer}>
    <h2>Next 7 Days SP500 Predictions</h2>
    {predictions.length > 0 ? (
      <PredictionChart data={predictions} />
    ) : (
      <p>Loading predictions...</p>
    )}
  </div>
</div>
);
};
export default HomePage;

