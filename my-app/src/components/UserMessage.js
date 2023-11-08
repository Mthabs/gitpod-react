import React from 'react';

function UserMessage(props) {
    return (
        <div>
            {
                props.isLoggedIn ? (
                    <div>
                        <p>Welcom to the site! Please complete the steps below:</p>
                        <ol>
                            <li>Comfirm your email</li>
                            <li>Complete your Profile</li>
                            <li>Subscribe to the newsletter</li>
                        </ol>
                    </div>
                ) : (
                    <p>Please sign in</p>
                )
            }
        </div>
    );
}

export default UserMessage;