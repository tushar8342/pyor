import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactECharts from 'echarts-for-react';
import Select from 'react-select';
import Loader from './Loader'; 

const assets = [
    { label: 'Ethereum', value: 'ethereum' },
    { label: 'Dogecoin', value: 'dogecoin' },
    { label: 'Solana', value: 'solana' },
    { label: 'optimism', value: 'optimism' },
    { label: 'arbitrum', value: 'arbitrum' },
];

const LineChart = () => {
  const [selectedAsset, setSelectedAsset] = useState(assets[0]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    setIsLoading(true); 
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${selectedAsset.value}/market_chart?vs_currency=usd&days=365&interval=daily`)
      .then((response) => {
        setData(response.data.prices);
        setIsLoading(false); 
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false); 
      });
  }, [selectedAsset]);

  return (
    <div>
      <Select
        options={assets}
        value={selectedAsset}
        onChange={(selectedOption) => setSelectedAsset(selectedOption)}
      />
      {isLoading ? ( 
        <Loader />
      ) : (
        <ReactECharts option={createChartOption(data)} />
      )}
    </div>
  );
};

const createChartOption = (data) => {
  const xAxisData = data.map((item) => item[0]);
  const seriesData = data.map((item) => item[1]);

  return {
    xAxis: {
      type: 'category',
      data: xAxisData,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: seriesData,
        type: 'line',
      },
    ],
  };
};

export default LineChart;
