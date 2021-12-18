import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import YoutubeEmbed from '../components/YoutubeEmbed/YoutubeEmbed';

const Wrapper = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 60vh;
`

const EmbedWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: 40px 0px;
`

const Button = styled.a`
    border: 1px solid #e39439;
    background-color: #e39439;
    width: 200px;
    height: 50px;
    box-shadow: 0px 0px 4px 0px rgba(66, 68, 90, 1);
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
`

const Youtube = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=3&playlistId=UUv0ltFBzWdhRZFj8IbUwXmA&key=AIzaSyBhDFTaNrwIojZwNlXvc1PRS3pglo9kCmM')
            .then(res => {
                const yt = res.data.items;
                setData(yt);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <Wrapper>
            {data && (
                <EmbedWrapper>
                    {data.map((item, id) => {
                        return (
                            <YoutubeEmbed embedId={item.contentDetails.videoId} key={id} />
                        )
                    })}
                </EmbedWrapper>
            )}
            <Button href='https://www.youtube.com/c/RekinBiznesu' target='_blank'>Zobacz więcej filmów</Button>
        </Wrapper>
    )
}

export default Youtube;