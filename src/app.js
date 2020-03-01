import React from "react";
import useSWR, { SWRConfig } from "swr";

const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
const fetcher = url => fetch(url).then(res => res.json());

const BitcoinPrice = () => {
  
  const { data, error } = useSWR(url);

  if (error) return <div>Error...</div>;
  if (!data) return <div>Loading...</div>;

  return <pre>{JSON.stringify(data.bpi, null, 2)}</pre>;
};

const App = () => {
  return (
    <SWRConfig value={{ refreshInterval: 10000, fetcher }}>
      <BitcoinPrice />
    </SWRConfig>
  );
};

export default App;
