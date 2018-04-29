import React, { Component } from "react";
import WelcomeBubble from './WelcomeBubble.component';

class AvatarSelector extends Component {


    constructor(props) {
        super(props)

        this.state = {
            selectedAvatar: {},
            avatars: this.props.avatars,
            requestedAvatarId: null,
            popdownActive: true,
            showBubble: false
        }
    }

    componentDidMount() {
        // Once the component is mounted... 
        this.selectAvatarById(1);
    }


    // Sets an avatar (triggered on load & onClick)
    selectAvatarById(id) {

        // Filter out the selected ID from the array of avatars...
        let selectedAvatar = this.state.avatars.find((av) => id === av.id);

        // Activate loading on the `selected` avatar to fake HTTP latency... 
        this.setState(() => ({
            requestedAvatarId: id
        }))

        // Deactivate the loading state + set selectedAvatar 
        setTimeout(() => {

            let bubbleState = true;
            if (this.state.showBubble === true) {
                bubbleState = false;
            }
            
            this.setState(() => ({
                selectedAvatar,
                requestedAvatarId: id,
                showBubble: bubbleState
            }))

            // Closes the popdown
            this.togglePopdown();

        }, 1800)

    }

    // Handle the avatar selection onClick
    handleSelectAvatar = (id) => {
        this.selectAvatarById(id);
    }

    // Handle the varying states of the avatars
    setAvatarStates = (id) => {
        // Avatar is SELECTED
        if (this.state.selectedAvatar.id === id) {
            return " -is-active";
        }
        // Avatar is REQUESTED (pending)
        else if (this.state.requestedAvatarId === id) {
            return " -is-loading";
        }

        else {
            return " ";
        }
    }


    // Toggle the popdown state
    togglePopdown = () => {
        let popdownIsActive = this.state.popdownActive;

        this.setState(() => ({
            popdownActive: !popdownIsActive
        }))
    }

    // Handle the popdown state. Adds class to set popdown to ACTIVE
    setPopdownState = () => {

        let popdownIsActive = this.state.popdownActive;

        if (popdownIsActive === true) {
            return " -is-active";
        } else {
            return "";
        }

    }


    render() {

        // Add `this` to the scope
        let { selectedAvatar } = this.state;

        return (

            <div className="avatar-selector">

                <div className="avatar avatar-main">
                    <div className="avatar-img-mask"
                         onClick={() => this.togglePopdown()}
                         onKeyPress={(e) => { (e.key === 'Enter' ? this.togglePopdown() : null) }}
                         tabIndex="0">
                        {selectedAvatar !== undefined &&
                            <img src={selectedAvatar.src} alt={selectedAvatar.label} />
                        }
                    </div>
                    <WelcomeBubble showBubble={this.state.showBubble}></WelcomeBubble>
                </div>


                <ul className={"avatar-popdown" + this.setPopdownState()}
                    tabIndex="0">
                    <h3>Choose your avatar</h3>
                    {this.state.avatars.map((av) => {
                        return (

                            <li key={av.id}
                                className={"avatar" + this.setAvatarStates(av.id)}
                                onClick={() => this.handleSelectAvatar(av.id)}
                                onKeyPress={(e) => { (e.key === 'Enter' ? this.handleSelectAvatar(av.id) : null) }}
                                tabIndex="0"
                                >

                                <div className="avatar-img-mask">
                                    <img src={av.src} alt={av.label} />
                                </div>

                                <span className="avatar-state"></span>

                            </li>

                        )

                    })}
                </ul>

            </div>

        );

    }
}

export default AvatarSelector;