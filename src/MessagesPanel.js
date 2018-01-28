import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ebf7f7;
  overflow-y: scroll;
  padding: 0px 5%;
  height: 500px;
  width: 90%;
  
`

const MessageWrapper = styled.div`
  width: 85%;
  ${props => props.align === "left" ? 'margin-right: auto;' +
    'margin-left: 0px;' : 'margin-left: auto;' +
    'margin-right: 0px;' }; 
  display: flex;
  justify-content: flex-start;  
  flex-direction: ${props => props.align === 'left' 
    ? 'row' 
    : 'row-reverse'};
  margin-bottom: 1em;
`
const MessageAvatar = styled.img`
  min-width: 25px;
  height: 25px;
  border-radius: 100%;
`

const MessageBubble = styled.div`
  text-align: left;
  border-radius: ${ props => props.align === 'left' 
    ? '0px 15px 15px 15px' 
    : '15px 0px 15px 15px'};
  background-color: ${ props => props.align === 'left'
    ? 'white'
    : '#ecf6ff'} ;
  margin: 0px 5px;
  padding: 15px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
`

const MessageText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 0.4em;
`

const MessageTime = styled.p`
  font-size: 10px;
  color: rgba(0,0,0,0.6);
`

class Message extends Component{
    render() {
        const align = this.props.message.sender === 'me' ? 'left' : 'right';
        return (
            <MessageWrapper align={align}>
                <MessageAvatar src={align === 'left' ? 'avatar-1.jpg' : 'avatar-2.jpg'} alt="Sender image"></MessageAvatar>
                <MessageBubble align={align}>
                    <MessageText>{this.props.message.message}</MessageText>
                    <MessageTime>{this.props.message.time}</MessageTime>
                </MessageBubble>
            </MessageWrapper>

        );
    }

}

class MessagesPanel extends Component {

    scrollToBottom() {
        this.endOfChat.scrollIntoView({behavior: "smooth"});
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate(prevProps, prevState) {
        this.scrollToBottom();
    }

    render() {
        return (
            <Container>
                {this.props.messages && this.props.messages.map( message =>
                    <Message message={message}></Message>
                )}
                <div ref={(end) => {this.endOfChat = end;}}></div>
            </Container>
        );
    }
}
export default MessagesPanel;
