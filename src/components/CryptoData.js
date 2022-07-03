import {useState, useEffect} from "react";
import axios from "axios";

const CryptoData = () => {
    // data: represents our data, setdata sets the data we are pulling from the api
    const [marketsData, setMarketsData] = useState([]);
    const [assetsData, setAssetsData] = useState([]);
    // collect user data, empty string
    const baseUrl = "https://www.cryptingup.com/api";

    // Make a request to all exchanges
    useEffect(() => {
        axios.get(`${baseUrl}/markets`).then(res => {
            console.log(res);
            setMarketsData(res.data.markets);
        });
        axios.get(`${baseUrl}/assets`).then(res => {
            setAssetsData(res.data.assets);
        });
        // axios.get(`${baseUrl}/assets/<ID>/USDT`).then(res => {
        //     setAssetsData(res.data.assets.id.usdt);
        // });
    }, []);


    return (
        <div>
            <h1>Data from my API, First Markets and then assets</h1>
            {/* List specific data for the 3 exchanges  */}
            <div>
                {/* <h1>specific asset</h1>
                {assetsData.map(x => <li key={x.assets.USDT}>{x.name}</li>)} */}
             <h1>symbols</h1>
            {marketsData.map(x => <li key={x.markets}>{x.symbol}</li>)}
            </div>
           <div>
            <h2>markets Id's: </h2>
            {marketsData.map(x => <li key={x.markets}>{x.exchange_id}</li>)}
            </div>
            <div>
            <h3>Prices:</h3>
            {marketsData.map(x => <li key={x.markets}>{x.price}</li>)}
            </div>
            <div>
                <h1>Name</h1>
                {assetsData.map(x => <li key={x.assets}>{x.name}</li>)}
                <h2>Asset Id's:</h2>
                {assetsData.map(x => <li key={x.assets}>{x.asset_id}</li>)}
                <h3>Price: </h3>
                {assetsData.map(x => <li key={x.assets}>{x.price}</li>)}
            </div>
        </div>
    )
};

export default CryptoData;

