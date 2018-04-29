import React, { Component } from 'react';

class WelcomeBubble extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            bubbleActive: false,
            bubbleDismissed: false
        }
    }

    componentDidMount() {

        setTimeout(() => {
            this.setState(() => ({
                bubbleActive: this.props.showBubble
            }))
        }, 2500)


    }

    /* The speech bubble */
    dismissBubble = () => {

        this.setState(() => ({
            bubbleActive: false,
            bubbleDismissed: true
        }))

    }

    setBubbleState = () => {

        let bubbleIsActive = this.state.bubbleActive;

        if (bubbleIsActive === true) {
            return " -is-active";
        } else {
            return " -is-hidden";
        }

    }


    render() { 
        return (  
            <div className={"welcome-bubble" + this.setBubbleState()}>
                &nbsp;
                <button className="btn-clear" onClick={() => this.dismissBubble()}>Dismiss</button>
            </div>
        )
    }
}
 
export default WelcomeBubble;