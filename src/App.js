import React from 'react';
import './App.css';
import { loadGas, convertPrice } from './utils/fees';
import {useSelector} from "react-redux";
import {useEffect} from 'react';
import { networks } from './utils/constants';
import 'bootstrap/dist/css/bootstrap.css'
function App() {
  // I dunno...
  const hackyBool = true;
  useEffect(()=>{
    if(hackyBool) {
      loadGas();
    }
  },[hackyBool]);

  const networkInfo = useSelector(state => {
    return Object.keys(state.networkInfo).map((key)=>{
      const network = networks[key];
      const priceInfo = state.networkInfo[key];
      return {
        name: network.name,
        swapPrice: convertPrice(priceInfo.swapPrice * priceInfo.tokenPrice),
        transferPrice: convertPrice(priceInfo.transferPrice * priceInfo.tokenPrice),
        lpPrice: convertPrice(priceInfo.lpPrice * priceInfo.tokenPrice),
        tokenPrice: convertPrice(priceInfo.tokenPrice)
      }
    })
    .sort((a, b)=>{
      if (a.swapPrice < b.swapPrice) return 1;
      if (a.swapPrice > b.swapPrice) return -1;
      return 0;
    });
  });

  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Name</td>
            <td>Transfer Price</td>
            <td>Swap Price</td>
            <td>Add/Remove LP Price</td>
          </tr>
        </thead>
        <tbody>
          {networkInfo.map((data)=>
          <tr key={data.name}>
            <td>{data.name}</td>
            <td>{data.transferPrice}</td>
            <td>{data.swapPrice}</td>
            <td>{data.lpPrice}</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
