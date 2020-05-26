import React from 'react';

const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);

interface SignUpProps {
   name?: any;
   value?: any;
}
interface SignUpState {
   firstName: string,
   lastName: string,
   mobileNum: string,
   fbMsgrID: string,
   email: string,
   password: string,
   errors: {
      firstName: string,
      lastName: string,
      mobileNum: string,
      fbMsgrID: string,
      email: string,
      password: string
   }
}

export class SignUp extends React.Component<SignUpProps, SignUpState> {
   constructor(props: SignUpProps) {
      super(props);
      const initialState = {
         firstName: '',
         lastName: '',
         mobileNum: '',
         fbMsgrID: '',
         email: '',
         password: '',
         errors: {
            firstName: '',
            lastName: '',
            mobileNum: '',
            fbMsgrID: '',
            email: '',
            password: ''
         }
      }
      this.state = initialState;
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange = (event: any) => {
      event.preventDefault();
      const { name, value } = event.target;
      let errors = this.state.errors;
      switch (name) {
         case 'firstName':
            errors.firstName = value.length < 2 ? 'First name must be 2 characters long!' : '';
            break;
         case 'lastName':
            errors.lastName = value.length < 2 ? 'Last name must be 2 characters long!' : '';
            break;
         case 'email':
            errors.email = Regex.test(value) ? '' : 'Email is not valid!';
            break;
         case 'password':
            errors.password = value.length < 8 ? 'Password must be eight characters long!' : '';
            break;
         default:
            break;
      }
      this.setState(Object.assign(this.state, { errors, [name]: value }));
      console.log(this.state.errors);
   }

   handleSubmit = (event: any) => {
      event.preventDefault();
      fetch(`http://localhost:3000/user/create`, {
         method: 'POST',
         // body: JSON.stringify({ firstName: firstName, lastName: lastName, mobileNum: mobileNum, fbMsgrID: fbMsgrID, email: email, password: password }),
         headers: new Headers({
            'Content-Type': 'application/json'
         })
      })
      let validity = true;
      Object.values(this.state.errors).forEach(
         (val) => val.length > 0 && (validity = false)
      );
      if (validity === true) {
         console.log("Registering can be done");
      } else {
         console.log("You cannot be registered!")
      }
   }

   render() {
      const { errors } = this.state
      return (
         <div className='wrapper'>
            <div className='form-wrapper'>
               <h2>Sign Up</h2>
               <form onSubmit={this.handleSubmit} noValidate >
                  <div className='firstName'>
                     <label htmlFor="firstName">First Name</label>
                     <input type='text' name='firstName' onChange={this.handleChange} />
                     {errors.firstName.length > 0 && <span style={{ color: "red" }}>{errors.firstName}</span>}
                  </div>
                  <div className='lastName'>
                     <label htmlFor="lastName">Last Name</label>
                     <input type='text' name='lastName' onChange={this.handleChange} />
                     {errors.lastName.length > 0 && <span style={{ color: "red" }}>{errors.lastName}</span>}
                  </div>
                  <div className='mobileNum'>
                     <label htmlFor="mobileNum">Mobile Number</label>
                     <input type='text' name='mobileNum' onChange={this.handleChange} />
                  </div>
                  <div className='fbMsgrID'>
                     <label htmlFor="fbMsgrID">Facebook Messenger ID</label>
                     <input type='text' name='fbsgrID' onChange={this.handleChange} />
                  </div>
                  <div className='email'>
                     <label htmlFor="email">Email</label>
                     <input type='email' name='email' onChange={this.handleChange} />
                     {errors.email.length > 0 && <span style={{ color: "red" }}>{errors.email}</span>}
                  </div>
                  <div className='password'>
                     <label htmlFor="password">Password</label>
                     <input type='password' name='password' onChange={this.handleChange} />
                     {errors.password.length > 0 && <span style={{ color: "red" }}>{errors.password}</span>}
                  </div>
                  <div className='submit'>
                     <button>Register Me</button>
                  </div>
               </form>
            </div>
         </div>
      );
   }
}