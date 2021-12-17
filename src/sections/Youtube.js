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
    margin-top: 40px;
`

const Youtube = () => {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=3&playlistId=UUv0ltFBzWdhRZFj8IbUwXmA&key=AIzaSyBhDFTaNrwIojZwNlXvc1PRS3pglo9kCmM')
            .then(res => {
                const yt = res.data.items;
                console.log(res.data.items);
                setData(yt);
            }) ;
    }, []);

    return (
        <Wrapper>
            <h1>Youtube</h1>
            {data && (
                <EmbedWrapper>
                    {data.map((item, id) => {
                        return (
                            <YoutubeEmbed embedId={item.contentDetails.videoId} key={id} />
                        )
                    })}
                </EmbedWrapper>
            )}
        </Wrapper>
    )
}

export default Youtube;