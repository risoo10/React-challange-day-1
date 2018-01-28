import React from 'react';
import styled from 'styled-components';
import ChatInfo from './ChatInfo';
import MessagesPanel from './MessagesPanel';
import NewMessagePanel from './NewMessagePanel'; 

const Wrapper = styled.div`
	width: 400px;
	margin: 0px auto;
`

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        	messages: [
				{
					sender: 'me',
					message: 'Hello are you here ?',
					time: '9.35 pm'
				},
                {
                    sender: 'Lizzy',
                    message: 'Hi, yes I am ...',
                    time: '9.40 pm'
                },
                {
                    sender: 'me',
                    message: 'I have a question ...',
                    time: '9.35 pm'
                },
                {
                    sender: 'me',
                    message: 'You getting new haircut ?',
                    time: '9.35 pm'
                },
                {
                    sender: 'Lizzy',
                    message: 'Nah, just thinking about it ...',
                    time: '9.35 pm'
                },
                {
                    sender: 'me',
                    message: 'Go with blond color :D',
                    time: '9.35 pm'
                },
                ,
                {
                    sender: 'me',
                    message: 'I have a question ...',
                    time: '9.35 pm'
                },
                {
                    sender: 'me',
                    message: 'You getting new haircut ?',
                    time: '9.35 pm'
                },
                {
                    sender: 'Lizzy',
                    message: 'Nah, just thinking about it ...',
                    time: '9.35 pm'
                },
                {
                    sender: 'me',
                    message: 'Go with blond color :D',
                    time: '9.35 pm'
                },
			]
		}
    }

    handleNewMessage(msg) {
    	const mesgs = this.state.messages.splice();
    	mesgs.push(msg);
    	this.setState({
			messages: mesgs,
		});
	}

    render(){
		return (
			<Wrapper>
				<ChatInfo></ChatInfo>
				<MessagesPanel messages={this.state.messages}></MessagesPanel>
				<NewMessagePanel newMessageEvent={this.handleNewMessage}></NewMessagePanel>
			</Wrapper>
		);
	}
}

