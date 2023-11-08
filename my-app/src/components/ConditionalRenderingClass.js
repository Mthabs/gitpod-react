import React, { Component } from 'react';

export class ConditionalRenderingClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: true,
            isLoggedIn: true
        };
    }
    render() {
        return (
            <div>
                <h1>{this.state.isLoaded ? 'Data loaded' : 'loading...'}</h1>
                {this.state.isLoggedIn ? (
                    <div>
                        <p>Welcom to the site! Please complete the steps below:</p>
                        <ol>
                            <li>Comfirm your email</li>
                            <li>Complete your Profile</li>
                            <li>Subscribe to the newsletter</li>
                        </ol>
                    </div>
                ) : (<p>Please sign in</p>)}
            </div>
        );
    }
}

export default ConditionalRenderingClass;