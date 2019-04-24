import React from 'react';
import NavBar from './navbar';
import CityDetail from './CityDetail';
import CityName from './CityName';
import ChatBox from './ChatBox';

export class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chatboxOpen: false
        }
        this.buttonClick = this.buttonClick.bind(this);
    }

    buttonClick(){
        this.setState((prev, props) =>{
            const newState = !prev.chatboxOpen;
            return {chatboxOpen:newState};
        });
    }

    render() {

        return (
            <>
                <NavBar />
                <CityName/>
                <CityDetail/>
                {this.state.chatboxOpen ? <ChatBox buttonClick={this.buttonClick}/> :
                                          <button id="chatbutton" className="button is-info" onClick={this.buttonClick} style={{ bottom: 10, position: "fixed", float: "right", right: "15%", left: "85%" }}>Chat with Us ?</button>}
            </>
        )
    }
}
