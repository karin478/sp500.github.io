import React from 'react';
import styles from '../styles/DescriptionPage.module.css';

const DescriptionPage = () => {
  return (
    <div className={styles.container}>
      <h2>Introducing the AI SP500 Predictor: Leveraging LSTM Neural Networks for Accurate Stock Market Predictions</h2>
      <p>Our AI SP500 Predictor harnesses the power of Long Short-Term Memory (LSTM) neural networks to forecast the SP500 index's future performance with unparalleled accuracy. LSTM is a type of recurrent neural network (RNN) architecture that excels in processing and predicting time series data, such as stock market prices (Hochreiter & Schmidhuber, 1997). This unique ability stems from LSTM's capacity to learn long-term dependencies and mitigate the vanishing gradient problem common in traditional RNNs.

To ensure the utmost precision in our predictions, we have trained our LSTM model on the historical data of the top 50 market cap U.S. stocks, encompassing diverse sectors and industries. This data-driven approach has enabled our model to recognize underlying patterns and correlations, facilitating accurate SP500 predictions for the next 30 days.

Deep learning techniques, like LSTM, have consistently outperformed traditional time series forecasting methods, such as Autoregressive Integrated Moving Average (ARIMA) and Exponential Smoothing State Space Model (ETS) (Makridakis, Spiliotis, & Assimakopoulos, 2018). By embracing deep learning for stock market predictions, investors can take advantage of a more robust and adaptive modeling approach that accommodates nonlinearity and complex interactions in financial data.

Several leading financial institutions have already adopted artificial intelligence (AI) models to enhance their investment strategies and generate profits. For example, JPMorgan Chase employs AI algorithms to optimize trading execution, while Goldman Sachs utilizes machine learning to better understand market trends and identify investment opportunities (Chui, Kamalnath, & McCarthy, 2020).

With our AI SP500 Predictor, you too can leverage the power of LSTM neural networks and benefit from accurate stock market predictions. Stay ahead of the curve and make informed decisions with the assistance of cutting-edge AI technology.</p>
      {/* Add the rest of the paragraphs and references */}
      <div className={styles.references}>
        <p className={styles.reference}>- Chui, M., Kamalnath, V., & McCarthy, B. (2020). Artificial intelligence in asset management. McKinsey & Company. Retrieved from https://www.mckinsey.com/industries/financial-services/our-insights/artificial-intelligence-in-asset-management</p>
        <p className={styles.reference}>- Hochreiter, S., & Schmidhuber, J. (1997). Long Short-Term Memory. Neural Computation, 9(8), 1735-1780. doi:10.1162/neco.1997.9.8.1735</p>
        <p className={styles.reference}>- Makridakis, S., Spiliotis, E., & Assimakopoulos, V. (2018). Statistical and Machine Learning forecasting methods: Concerns and ways forward. PLoS ONE, 13(3): e0194889. doi:10.1371/journal.pone.0194889</p>
      </div>
    </div>
  );
};

export default DescriptionPage;
