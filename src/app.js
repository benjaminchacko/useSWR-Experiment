import React from 'react'
import useSWR, {SWRConfig} from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json());

const App = () => {
  const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
  const { data, error } = useSWR(url, fetcher)
  console.log(data)

  if (error){
    return <div>Error...</div>
  }

  if (!data){
    return <div>Loading ...</div>
  }
  
  else return <div>{JSON.stringify(data, null, 2)}</div>
};

export default App

