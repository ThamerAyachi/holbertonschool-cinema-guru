import React from 'react';
import "../auth/auth.css";
import Submit from '../../components/general/SubmitButton';
import Input from '../../components/general/Input';


export default Register = ({
  username,
  password,
  setUsername,
  setPassword
}) => {
  return (
    <div>
      <h2 className='auth-header'>Create a new account</h2>
      <Input label="Username" value={username} setValue={setUsername}/>
      <Input label="Password" value={password} setValue={setPassword}/>
      <Submit label="Sign Up"/>
    </div>
  );
}
