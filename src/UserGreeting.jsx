import propTypes from 'prop-types'

function UserGreeting(props){

        const wcMessage = <h2 className="wc-message">Welcome {props.username}</h2>
        const loginPrompt = <h2 className="login-prompt">Please Login to continue</h2>

        // if(props.isLoggedIn){
        //     return <h2 className="wc-message">Welcome {props.username}</h2>
        // }else{
        //     return <h2 className="login-prompt">Please Login to continue</h2>
        // }

        if(props.isLoggedIn){
            return wcMessage
        } else {
            return loginPrompt
        }
}

UserGreeting.propTypes = {
    isLoggedIn: propTypes.bool,
    username: propTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "guest",
}
export default UserGreeting