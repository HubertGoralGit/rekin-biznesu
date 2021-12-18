import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Coin from '../components/Coin/Coin';

const Wrapper = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 60vh;
`

const Crypto = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
            .then(res => {
                const cryptos = res.data;
                setData(cryptos);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <Wrapper>
            <h1>Crypto</h1>
            {data.map(coin => {
                return (
                    <Coin 
                        key={coin.id}
                        name={coin.name}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        marketcap={coin.total_volume}
                        volume={coin.market_cap}
                        src={coin.image}
                        priceChange={coin.price_change_percentage_24h}
                    />
                )
            })}
        </Wrapper>
    );
}

export default Crypto;