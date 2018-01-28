import React, {Component} from 'react';
import styled from 'styled-components';

const TypingPanel = styled.div`
  background-color: whitesmoke;
  width: 94%;
  padding: 3%;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
  z-index: 10;
`

const Form = styled.form`
  display: flex;
  align-items: center;
`

const Input = styled.input`
  width: 100%;
  margin-right: 2%;
  border-radius: 15px;
  border: 0px;
  padding: 10px;
`

const Button = styled.button`
  background: linear-gradient(45deg, #7e77f8, #08aeea);
  background: -webkit-linear-gradient(bottom right, #7e77f8 0%, #08aeea 100%);
  border-radius: 15px;
  border: 0px;
  font-weight: bold;
  padding: 10px 15px;
  color: white;
`

class NewMessagePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msgValue: '',
        }
    }

    onSubmit(event){
        event.preventDefault();

        if(event.target.value === '') return;

        const newMsg = {
            sender: "me",
            message: this.state.msgValue,
            time: "8:39 PM"
        }
        this.props.onSubmit(newMsg);
        this.setState({
            msgValue: ''
        })
    }

    onChange(event){
        const nemMsg = event.target.value;
        this.setState({
            msgValue: nemMsg
        });
    }

    render() {
        return (
            <TypingPanel>
                <Form onSubmit={(event) => this.onSubmit(event)}>
                    <Input
                        placeholder="Type message here ..."
                        value={this.state.msgValue}
                        onChange={(event) => this.onChange(event)}
                        type="text"
                    />
                    <Button
                        type="button"
                        onClick={(event) => this.onSubmit(event)}
                    >Send</Button>
                </Form>
            </TypingPanel>
        );
    }
}

export default NewMessagePanel;
