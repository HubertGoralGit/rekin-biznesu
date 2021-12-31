import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CryptoTable from '../components/CryptoTable/CryptoTable';
import { media } from '../utils/index';

const Wrapper = styled.section`
    padding: 40px 0;
    min-height: 60vh;
    width: 100%;
    background-image: linear-gradient(to bottom, #ffffff, #e9edfa, #cbddf5, #a3d0ed, #74c4df, #74c4df, #74c4df, #74c4df, #a3d0ed, #cbddf5, #e9edfa, #ffffff);

    .title {
        text-align: center;
    }

    ${media.desktop`
        display: flex;
        flex-direction: column;
        align-items: center;
    `}
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
            <h1 className='title'>Aktualne kursy</h1>
            <CryptoTable data={data}/>
        </Wrapper>
    );
}

export default Crypto;