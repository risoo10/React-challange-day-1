import React, {Component} from 'react';
import styled from 'styled-components';

const GradientHeader = styled.div`
  background: linear-gradient(45deg, #7e77f8, #08aeea);
  background: -webkit-linear-gradient(bottom right, #7e77f8 0%, #08aeea 100%);
  width: 94%;
  padding: 3%;
  text-align: left;
`

const H1 = styled.h1`
  font-size: 18px;
  color: white;
  margin-bottom: 0.4em;
`
const H2 = styled.h2`
  font-size: 12px;
  color: white;
`



class ChatInfo extends Component {
    render() {
        return (
            <GradientHeader>
                <H1>Lizzy Morgan</H1>
                <H2>Online</H2>
            </GradientHeader>
        );
    }
}

export default ChatInfo;
