import React from 'react';
import styled from 'styled-components';

const CoinWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const CoinRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #d7d7d7;
    width: 900px;
`

const CoinElement = styled.div`
    display: flex;
    align-items: center;
    padding-right: 24px;
    min-width: 300px;

    h1 {
        font-size: 16px;
        margin-right: 10px;
    }

    img {
        height: 30px;
        width: 30px;
        margin-right: 10px;
    }
`

const Symbol = styled.p`
    text-transform: uppercase;
`

const CoinData = styled.div`
    display: flex;
    text-align: right;
    justify-content: space-between;
    width: 100%;
`

const CoinPercent = styled.p`
    &.red {
        color: #f00606;
    }

    &.green {
        color: #11d811;
    }
`

const Coin = ({ name, src, symbol, price, volume, priceChange, marketcap }) => {
    return (
        <CoinWrapper>
            <CoinRow>
                <CoinElement>
                    <img src={src} alt='crypto' />
                    <h1>{name}</h1>
                    <p>{symbol}</p>
                </CoinElement>
                <CoinData>
                    <p>${price}</p>
                    <p>${volume.toLocaleString()}</p>
                    <CoinPercent className={priceChange < 0 ? 'red' : 'green'}>{priceChange.toFixed(2)}%</CoinPercent>
                    <p className='coin-marketcap'>
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </p>
                </CoinData>
            </CoinRow>
        </CoinWrapper>
    )
};

export default Coin;