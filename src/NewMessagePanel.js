import React, {Component} from 'react';
import styled from 'styled-components';

const TypingPanel = styled.div`
  background-color: whitesmoke;
  width: 94%;
  padding: 3%;
`

const Form = styled.form`
  display: flex;
  justify-content: space-between;
`

const Input = styled.input`
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
  padding: 10px;
  color: white;
`

class NewMessagePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msgValue: '',
        }
    }

    onSubmit(){
        // Send mssg


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
                <form onSubmit={() => this.onSubmit()}>
                    <Input
                        placeholder="Type message here ..."
                        value={this.state.msgValue}
                        onChange={(event) => this.onChange(event)}
                        type="text"
                    />
                    <Button
                        type="button"
                        onClick={() => this.onSubmit()}
                    >Send</Button>
                </form>
            </TypingPanel>
        );
    }
}

export default NewMessagePanel;
