import React from 'react';
import styled from 'styled-components';

const CoinWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const CoinRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
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
        width: 150px;
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

const Price = styled.p`
    width: 110px;   
`

const Volume = styled.p`
    width: 155px;
`

const MarketCap = styled.p`
    width: 230px;
`

const CoinPercent = styled.p`
    width: 100px;

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
                    <Price>${price}</Price>
                    <Volume>${volume.toLocaleString()}</Volume>
                    <CoinPercent className={priceChange < 0 ? 'red' : 'green'}>{priceChange.toFixed(2)}%</CoinPercent>
                    <MarketCap className='coin-marketcap'>
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </MarketCap>
                </CoinData>
            </CoinRow>
        </CoinWrapper>
    )
};

export default Coin;