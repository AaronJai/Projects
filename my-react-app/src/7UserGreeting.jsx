// conditional rendering - allows you to control what gets rendered in your application
//                         based on certain conditions
//                         (show, hide, or change components)

import PropTypes from 'prop-types';

function UserGreeting(props) {

    // ternary operator common
    // return (props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2> : 
    //                            <h2 className="login-prompt">Please log in to continue</h2>);

    // if (props.isLoggedIn) {
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else {
    //     return <h2>Please log in to continue</h2>
    // }

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>

    return (props.isLoggedIn ? welcomeMessage : loginPrompt);
    condition ? true : false
}
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting