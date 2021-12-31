import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils/index';

const Table = styled.div`
    overflow-x: scroll;
`

const CoinContainer = styled.div`
    display: flex;

    ${media.desktop`
        justify-content: center;
    `}
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

const Coin = styled.div`
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

    p {
        text-transform: uppercase;
    }
`;

const CoinData = styled.div`
    display: flex;
    text-align: right;
    justify-content: space-between;
    width: 100%;

    .coinPrice {
        width: 110px;
    }

    .coinVolume {
        width: 155px;
    }

    .coinPercentage {
        width: 100px;

        &.red {
            color: #f00606;
        }

        &.green {
            color: #11d811;
        }
    }
    
    .mkt {
        display: flex;
        width: 200px;

        .mktTitle {
            margin-right: 10px;
        }
    }

`

const CryptoTable = ({ data }) => {
    return (
        <Table>
                {data.map(coin => {
                    return (
                        <CoinContainer key={coin.id}>
                            <CoinRow>
                                <Coin>
                                    <img src={coin.image} alt={`${coin.name}-logo`}/>
                                    <h1>{coin.name}</h1>
                                    <p>{coin.symbol}</p>
                                </Coin>
                                <CoinData>
                                    <p className='coinPrice'>{coin.current_price}$</p>
                                    <p className='coinVolume'>{coin.total_volume}</p>
                                    <p className={`coinPercentage ${coin.price_change_percentage_24h < 0 ? 'red' : 'green'}`}>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                                    <div className='mkt'>
                                        <p className='mktTitle'>Mkt Cap: </p><p>${coin.total_volume}</p>
                                    </div>
                                </CoinData>
                            </CoinRow>
                        </CoinContainer>
                        )
                    })} 
        </Table>
    )
    
}

export default CryptoTable;