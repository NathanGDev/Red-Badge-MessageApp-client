import React, {useState, useEffect} from './node_modules/react';
import CssBaseline from './node_modules/@material-ui/core/CssBaseline';
import SignIn from './SignIn';
import SignUp from './SignUp';
const Auth = (props) => {
    const [signUp, setSignUp] = useState('N');  // Start with Sign-In
    console.log('At top of Auth.js');
    console.log('signUp = ' + signUp);
    const updateSignUpIn = (newToken) => {
        signUp=='N' ? setSignUp('Y') : setSignUp('N');
      }
    return (
        <React.Fragment>
        <CssBaseline />
            {signUp=='N' ? <SignIn updateToken={props.updateToken}  updateSignUpIn={updateSignUpIn} /> : <SignUp updateToken={props.updateToken} updateSignUpIn={updateSignUpIn} /> }
        </React.Fragment>
    );
}
export default Auth;